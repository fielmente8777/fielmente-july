import { Container } from "@/components/sectionComponants";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../contact";
import AuditForm from "./components/AuditForm";
import {
  caseStudies,
  clientNames,
  faqs,
  heroPoints,
  heroStats,
  included,
  miniCases,
  steps,
} from "./components/pageData";

const PAGE_URL = "https://fielmente.com/google-ads-for-hotels/";
const TITLE = "Google Ads for Hotels & Resorts | Fielmente";
const DESCRIPTION =
  "Fielmente runs Google Ads for hotels, resorts and wellness retreats — more direct enquiries at a lower cost per enquiry. Get a free Google Ads audit.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    "Google Ads for hotels, hotel PPC agency, resort Google Ads, hotel Google Ads management, hospitality PPC India",
  alternates: {
    canonical: PAGE_URL,
    languages: { "en-US": PAGE_URL },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/fielmente_logo.png", width: 1200, height: 630 }],
  },
};

const PHONE_TEL = `tel:${contacts.phone_1.replace(/\s/g, "")}`;

const eyebrow = "text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-primary";
const h2 = "text-[30px]/[1.1] md:text-[44px]/[1.1] font-bold tracking-tight";
const dot = <span className="text-orange-primary">.</span>;

export default function GoogleAdsForHotelsPage() {
  return (
    <main className="overflow-x-clip bg-white text-primary2 max-md:pb-20">
      {/* Top bar — no site navigation on purpose: one goal per ads landing page */}
      <header className="bg-primary2">
        <Container className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="relative block w-25 md:w-28 aspect-[349/127]">
            <Image src="/logo2.png" alt="Fielmente" fill sizes="112px" className="object-contain" priority />
          </Link>
          <div className="flex items-center gap-7">
            <span className="hidden lg:inline text-sm text-[#C9C7DD]">Hospitality marketing agency · India</span>
            <Link
              href={PHONE_TEL}
              aria-label={`Call ${contacts.phone_1}`}
              className="inline-flex items-center justify-center gap-2.5 min-h-11 max-md:w-11 md:px-4.5 rounded-lg border border-[#3A3566] text-white text-[15px] font-medium hover:border-skyBlue"
            >
              <FaPhoneAlt className="text-skyBlue" aria-hidden="true" />
              <span className="max-md:hidden">{contacts.phone_1}</span>
            </Link>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary2 pt-9 pb-10 md:pt-16 md:pb-22">
        <Image
          src="/landing-pages/google-ads/fielmente-symbol-white.png"
          alt=""
          aria-hidden="true"
          width={390}
          height={820}
          className="pointer-events-none absolute -right-20 top-2 md:-right-15 md:top-8 h-105 md:h-205 w-auto opacity-5"
        />
        <Container className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="flex flex-col gap-5 md:gap-6.5 lg:pt-2">
            <p className={eyebrow}>Google Ads for hotels, resorts &amp; retreats</p>
            <h1 className="text-[36px]/[1.06] md:text-[60px]/[1.04] font-bold tracking-tight text-white">
              More direct enquiries. <span className="text-orange-primary">Lower cost per enquiry.</span>
            </h1>
            <p className="text-base/relaxed md:text-[19px]/relaxed text-[#C9C7DD] max-w-140">
              We run Google Ads only for hospitality and travel brands. Across our client accounts, cost per
              enquiry fell from ₹650 in 2024 to ₹192 in 2026 — while enquiry volume grew nearly six times.
            </p>
            <ul className="hidden md:flex flex-col gap-3.5">
              {heroPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-base text-white">
                  <FaCheck className="shrink-0 text-skyBlue" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <dl className="grid grid-cols-3 gap-3 md:gap-5 pt-4 md:pt-5.5 border-t border-[#2E2A5C]">
              {heroStats.map((st) => (
                <div key={st.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-[11px] md:text-[13px] text-skyBlue">{st.label}</dt>
                  <dd className="text-[22px] md:text-[34px] font-bold text-white">{st.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="audit" className="scroll-mt-6 rounded-2xl bg-white p-5 md:p-10">
            <AuditForm />
          </div>
        </Container>
      </section>

      {/* Client strip */}
      <section aria-label="Clients" className="bg-[#F5F5F9] py-7 md:py-10">
        <Container className="text-center">
          <p className="mb-3 md:mb-4.5 text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#55536E]">
            Hotels, resorts &amp; retreats we run Google Ads for
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 md:gap-x-9 gap-y-2 md:gap-y-3 text-base md:text-[19px] font-bold text-glaucous">
            {clientNames.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Case studies */}
      <section className="py-14 md:py-26">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-12 mb-8 md:mb-12">
            <div className="flex flex-col gap-3.5">
              <p className={eyebrow}>Real accounts, real numbers</p>
              <h2 className={h2}>Before and after Fielmente{dot}</h2>
            </div>
            <p className="text-[15px]/relaxed text-[#55536E] max-w-105">
              Figures from each client&apos;s Google Ads account, averaged per month. Enquiries = calls, WhatsApp
              chats, forms and Book Now clicks. Map taps and page views are never counted.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
            {caseStudies.map((c) => (
              <article key={c.name} className="flex flex-col gap-4.5 rounded-2xl border border-[#E4E3EC] p-5.5 md:p-8">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">{c.tag}</p>
                  <h3 className="text-[21px] md:text-[22px] font-bold">{c.name}</h3>
                </div>
                <p className="text-lg/snug md:text-xl/snug font-bold">{c.line}</p>
                <dl className="grid grid-cols-2 gap-4 pt-4.5 border-t border-[#E4E3EC]">
                  <div>
                    <dt className="text-xs text-[#55536E]">Enquiries / month</dt>
                    <dd className="text-[19px] md:text-[22px] font-bold">{c.enquiries}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-[#55536E]">Cost per enquiry</dt>
                    <dd className="text-[19px] md:text-[22px] font-bold">{c.cpe}</dd>
                  </div>
                </dl>
                <div className="mt-auto flex items-center justify-between gap-3">
                  <span className="rounded-full bg-[#FDE8DF] px-3 py-1.5 text-[13px] font-semibold text-[#A63F17]">
                    {c.badge}
                  </span>
                  <Link href={c.href} className="text-sm font-semibold text-sapphireBlue hover:underline">
                    Read case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
            {miniCases.map((m) => (
              <Link
                key={m.name}
                href={m.href}
                className="flex items-center justify-between gap-6 rounded-2xl bg-[#F5F5F9] px-5.5 py-4.5 md:px-8 md:py-7 hover:bg-[#ECEBF3]"
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">{m.tag}</p>
                  <h3 className="text-[17px] md:text-xl font-bold">{m.name}</h3>
                </div>
                <div className="flex flex-col items-end text-right">
                  <span className="text-2xl md:text-[30px] font-bold text-orange-primary">{m.value}</span>
                  <span className="text-xs text-[#55536E]">{m.note}</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-primary2 py-14 md:py-26">
        <Container>
          <div className="flex flex-col gap-3.5 max-w-205">
            <p className={eyebrow}>How we work</p>
            <h2 className={`${h2} text-white`}>We fix the funnel first. Then we scale the budget{dot}</h2>
            <p className="text-[15px]/relaxed md:text-[17px]/relaxed text-[#C9C7DD]">
              In 2024, about 2 in every 100 clicks on our clients&apos; ads became an enquiry. In 2026 it&apos;s more
              than 9. That gain came from tracking and landing pages as much as from the ads.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 md:mt-14">
            {steps.map((st, i) => (
              <li key={st.title} className="flex flex-col gap-3 md:gap-3.5 pt-4 md:pt-5.5 border-t-2 border-orange-primary">
                <span className="text-lg font-bold text-orange-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[19px] md:text-[21px] font-bold text-white">{st.title}</h3>
                <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#C9C7DD]">{st.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-14 md:py-26">
        <Container className="grid lg:grid-cols-2 gap-8 lg:gap-18 items-start">
          <div className="flex flex-col gap-4.5">
            <p className={eyebrow}>What you get</p>
            <h2 className={h2}>Everything between the search and the booking{dot}</h2>
            <p className="text-[15px]/relaxed md:text-[17px]/relaxed text-[#55536E]">
              One team handles your ads, landing pages and tracking — built for hotels, not adapted from
              e-commerce playbooks.
            </p>
            <a
              href="#audit"
              className="mt-2.5 inline-flex self-start items-center min-h-13 px-7 rounded-[10px] bg-orange-primary text-white font-semibold hover:bg-glaucous-3"
            >
              Get my free audit
            </a>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-4.5">
            {included.map((it) => (
              <li key={it.title} className="flex flex-col gap-2 rounded-xl bg-[#F5F5F9] p-4.5 md:p-6">
                <h3 className="text-base md:text-[17px] font-bold">{it.title}</h3>
                <p className="text-sm/relaxed text-[#55536E]">{it.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F9] py-14 md:py-24">
        <Container className="grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-18">
          <div className="flex flex-col gap-3.5">
            <p className={eyebrow}>Questions</p>
            <h2 className={h2}>Before you ask{dot}</h2>
          </div>
          <div className="flex flex-col">
            {faqs.map((f) => (
              <details key={f.q} open className="group py-5 md:py-6 border-b border-[#D9D8E4] last:border-b-0">
                <summary className="cursor-pointer list-none text-[17px] md:text-[19px] font-bold mb-2 [&::-webkit-details-marker]:hidden">
                  {f.q}
                </summary>
                <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#55536E]">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA + footer */}
      <section className="bg-primary2 pt-11 md:pt-24">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12 rounded-2xl md:rounded-[20px] bg-orange-primary p-7 md:p-14">
            <div className="flex flex-col gap-3">
              <h2 className="text-[26px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">
                Find out what your enquiries should cost.
              </h2>
              <p className="text-[15px]/relaxed md:text-[17px]/relaxed text-white">
                Free audit, no obligation. Most properties hear back within 3 working days.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="#audit"
                className="inline-flex justify-center items-center min-h-14 px-8 rounded-[10px] bg-primary2 text-white text-[17px] font-semibold hover:text-skyBlue"
              >
                Get my free audit
              </a>
              <a
                href={contacts.WhatsAppCta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center min-h-12 px-8 rounded-[10px] border border-white text-white text-[15px] font-semibold hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5 mt-10 md:mt-16 pt-8 pb-10 border-t border-[#2E2A5C]">
            <Link href="/" className="relative block w-25 aspect-[349/127]">
              <Image src="/logo2.png" alt="Fielmente" fill sizes="100px" className="object-contain" />
            </Link>
            <nav aria-label="Footer" className="flex flex-col md:flex-row gap-2.5 md:gap-7 text-sm">
              <Link href="/" className="text-[#C9C7DD] hover:text-white">fielmente.com</Link>
              <a href={PHONE_TEL} className="text-[#C9C7DD] hover:text-white">{contacts.phone_1}</a>
              <Link href="/privacy-policy/" className="text-[#C9C7DD] hover:text-white">Privacy policy</Link>
            </nav>
            <p className="basis-full text-xs text-[#8F8CB0]">
              Results shown are from client Google Ads accounts, Sep 2023 – Sep 2026. Past results don&apos;t
              guarantee future performance.
            </p>
          </footer>
        </Container>
      </section>

      {/* Sticky call / WhatsApp bar — mobile only */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2.5 border-t border-[#E4E3EC] bg-white px-4 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
        <a
          href={PHONE_TEL}
          className="inline-flex items-center justify-center gap-2 min-h-12.5 rounded-[10px] border border-primary2 text-primary2 text-[15px] font-semibold"
        >
          <FaPhoneAlt aria-hidden="true" /> Call now
        </a>
        <a
          href={contacts.WhatsAppCta}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 min-h-12.5 rounded-[10px] bg-orange-primary text-white text-[15px] font-semibold"
        >
          <FaWhatsapp aria-hidden="true" size={18} /> WhatsApp us
        </a>
      </div>
    </main>
  );
}
