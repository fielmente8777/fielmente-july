// Sends a website form to /api/lead (which filters bots and forwards real leads to the Eazotel CRM).
import { HONEYPOT_FIELD, LeadPayload } from "./leadGuard";
import { markLeadSubmitted } from "./leadPrompt";

export interface SubmitLeadInput {
  form: HTMLFormElement | null;
  /** When the form appeared (Date.now()), to measure how long it took to fill in. */
  startedAt: number;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  description?: string;
}

export async function submitLead(input: SubmitLeadInput): Promise<{ ok: boolean; message?: string }> {
  const field = (name: string) =>
    (input.form?.querySelector(`[name="${name}"]`) as HTMLInputElement | null)?.value ?? "";

  const payload: LeadPayload = {
    name: input.name,
    email: input.email,
    countryCode: input.countryCode,
    phone: input.phone,
    description: input.description,
    sourceUrl: window.location.href,
    hp: field(HONEYPOT_FIELD),
    elapsedMs: Date.now() - input.startedAt,
    turnstileToken: field("cf-turnstile-response") || undefined,
  };

  try {
    // Trailing slash: the site uses trailingSlash, so /api/lead would redirect first.
    const res = await fetch("/api/lead/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { Status?: boolean; message?: string };
    if (data.Status) {
      markLeadSubmitted();
      window.turnstile?.reset();
      return { ok: true };
    }
    window.turnstile?.reset();
    return { ok: false, message: data.message || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
