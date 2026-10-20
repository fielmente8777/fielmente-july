// Website lead intake. Every website form posts here; this route filters out bots and only then
// sends the lead on to the Eazotel CRM (which sends the "New Lead" WhatsApp alert).
//
// Before, forms posted straight from the browser to the CRM, so any bot could send junk leads
// ("Zjtkhxra Cbqqb", impossible +91 5… numbers, the same lead twice in a second).
//
// Filters, cheapest first:
//   1. Hidden honeypot field filled in            -> dropped (bot)
//   2. Form sent in under 3 seconds                -> dropped (bot)
//   3. Same phone number again within 10 minutes  -> dropped (duplicate / double click)
//   4. More than 5 leads from one IP in 10 minutes -> dropped (flood)
//   5. Random-letter name, impossible phone, bad email -> refused with a message a real visitor can fix
//   6. Cloudflare Turnstile check, when NEXT_PUBLIC_TURNSTILE_SITE_KEY and TURNSTILE_SECRET_KEY are set
// Dropped leads get the same "success" answer as real ones, so bots get no signal to adapt to.
// 3 and 4 are kept in this server instance's memory: they catch bursts, not slow repeat attacks.
import { NextResponse } from "next/server";
import { contacts } from "../../../../contact";
import { emailError, LeadPayload, MIN_FILL_MS, nameError, phoneError } from "@/lib/leadGuard";

const CRM_ENDPOINT = "https://nexon.eazotel.com/eazotel/addcontacts";
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_IP = 5;

const recentPhones = new Map<string, number>();
const recentByIp = new Map<string, number[]>();

function prune(now: number) {
  for (const [k, t] of recentPhones) if (now - t > WINDOW_MS) recentPhones.delete(k);
  for (const [k, ts] of recentByIp) {
    const keep = ts.filter((t) => now - t <= WINDOW_MS);
    if (keep.length) recentByIp.set(k, keep);
    else recentByIp.delete(k);
  }
}

const ok = () => NextResponse.json({ Status: true });
const refuse = (message: string) => NextResponse.json({ Status: false, message }, { status: 400 });
const mask = (phone: string) => phone.replace(/\d(?=\d{3})/g, "•");

function dropped(reason: string, phone: string) {
  console.warn(`[lead] dropped (${reason}) ${mask(phone)}`);
  return ok();
}

async function turnstilePasses(token: string | undefined, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Only enforced when both keys are set, so the site never blocks every lead by a half-done setup.
  if (!secret || !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY) return true;
  if (!token) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = (await res.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch (e) {
    // Cloudflare unreachable: let the lead through rather than lose it.
    console.error("[lead] turnstile check failed", e);
    return true;
  }
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return refuse("Invalid request");
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const countryCode = String(body.countryCode ?? "+91").trim();
  const phone = String(body.phone ?? "").replace(/\D/g, "");
  const fullPhone = `${countryCode}${phone}`;
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const now = Date.now();
  prune(now);

  if (body.hp) return dropped("honeypot", fullPhone);
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < MIN_FILL_MS) return dropped("too fast", fullPhone);

  const problem = nameError(name) || phoneError(countryCode, phone) || emailError(email);
  if (problem) {
    console.warn(`[lead] refused (${problem}) ${mask(fullPhone)}`);
    return refuse(problem);
  }

  if (recentPhones.has(fullPhone)) return dropped("duplicate", fullPhone);
  const ipTimes = recentByIp.get(ip) ?? [];
  if (ipTimes.length >= MAX_PER_IP) return dropped("too many from one IP", fullPhone);

  if (!(await turnstilePasses(body.turnstileToken, ip))) {
    console.warn(`[lead] refused (turnstile) ${mask(fullPhone)}`);
    return refuse("Please complete the security check and try again.");
  }

  recentPhones.set(fullPhone, now);
  recentByIp.set(ip, [...ipTimes, now]);

  try {
    const res = await fetch(CRM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Origin: "https://fielmente.com", Referer: String(body.sourceUrl || "https://fielmente.com/") },
      body: JSON.stringify({
        Domain: contacts.formDomain,
        Name: name,
        email,
        Contact: fullPhone,
        Description: String(body.description ?? "").slice(0, 2000),
        created_from: "webform",
        source_url: String(body.sourceUrl ?? "").slice(0, 500),
      }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.Status) {
      // Let the visitor retry if the CRM did not take it.
      recentPhones.delete(fullPhone);
      return NextResponse.json({ Status: false, message: data?.message || "Something went wrong. Please try again." }, { status: 502 });
    }
    return ok();
  } catch (e) {
    recentPhones.delete(fullPhone);
    console.error("[lead] CRM request failed", e);
    return NextResponse.json({ Status: false, message: "Something went wrong. Please try again." }, { status: 502 });
  }
}
