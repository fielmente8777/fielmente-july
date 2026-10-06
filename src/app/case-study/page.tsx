import { Container } from "@/components/sectionComponants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { contacts } from "../../../contact";
import { casStudiesData } from "./[story]/components/caseData";
import CaseStudyCardRich from "./components/rich/CaseStudyCardRich";
import { caseStudies, portfolioStats } from "./data/caseStudies";

const TITLE = "Hotel Marketing Case Studies & Results | Fielmente";
const DESCRIPTION =
  "Real results from hotels, resorts and wellness retreats: more direct enquiries at a lower cost per enquiry. Google Ads and SEO case studies by Fielmente.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://fielmente.com/case-study/",
    languages: { "en-US": "https://fielmente.com/case-study/" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://fielmente.com/case-study/",
    images: [{ url: "/case-studies/index-hero.jpg", width: 1200, height: 630 }],
  },
};

const eyebrow = "text-xs md:text-[13px] font-semibold uppercase tracking-[0.16em] text-orange-primary";
const h2 = "text-[28px]/[1.15] md:text-[40px]/[1.12] font-bold tracking-tight text-primary2";
const dot = <span className="text-orange-primary">.</span>;

export default function CaseStudy() {
  const [featured, ...rest] = caseStudies;

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-primary2">
        <Image
          src="/case-studies/index-hero.jpg"
          alt="Guests enjoying a mountain-view resort pool in India (representative image)"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary2 via-primary2/90 to-primary2/40" />
        <Container className="pt-24 pb-14 md:pt-32 md:pb-24">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[#B9B6D3] mb-6">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">Case Studies</li>
            </ol>
          </nav>
          <div className="max-w-190 flex flex-col gap-5 md:gap-6">
            <p className={eyebrow}>Case studies</p>
            <h1 className="text-[36px]/[1.06] md:text-[58px]/[1.04] font-bold tracking-tight text-white">
              Real results from real hotels{dot}
            </h1>
            <p className="text-base/relaxed md:text-lg/relaxed text-[#C9C7DD] max-w-150">
              How resorts, retreats and hotels across India turned more of their search traffic into direct guest
              enquiries — at a lower cost per enquiry, year after year.
            </p>
          </div>
          <dl className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {portfolioStats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/12 bg-white/6 backdrop-blur-sm p-5 md:p-6 flex flex-col-reverse gap-1">
                <dt className="text-[13px] md:text-sm text-skyBlue">{s.label}</dt>
                <dd className="text-[26px] md:text-[36px] font-bold text-white leading-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-xs text-[#8F8CB0]">
            Across 23 client Google Ads accounts, Sep 2023 – Sep 2026. Enquiries = tracked calls, WhatsApp chats, forms and
            Book Now clicks.
          </p>
        </Container>
      </section>

      {/* ── Featured + grid ──────────────────────────────── */}
      <section className="py-14 md:py-22">
        <Container>
          <div className="flex flex-col gap-3 mb-8 md:mb-12 max-w-180">
            <p className={eyebrow}>Google Ads</p>
            <h2 className={h2}>More enquiries, at a lower cost per enquiry{dot}</h2>
          </div>
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-5">
            <CaseStudyCardRich cs={featured} large />
            <div className="grid gap-5">
              {rest.slice(0, 1).map((c) => (
                <CaseStudyCardRich key={c.slug} cs={c} />
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mt-5">
            {rest.slice(1).map((c) => (
              <CaseStudyCardRich key={c.slug} cs={c} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── How we get these results ─────────────────────── */}
      <section className="bg-primary2 py-14 md:py-22">
        <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col gap-4">
            <p className={eyebrow}>The pattern</p>
            <h2 className={`${h2} text-white!`}>We fix the funnel first. Then we scale the budget{dot}</h2>
            <p className="text-base/relaxed text-[#C9C7DD]">
              In 2024, about 2 in every 100 clicks on our clients&apos; ads became an enquiry. In 2026 it&apos;s more
              than 9. That gain came from tracking and landing pages as much as from the ads themselves.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-5">
            {[
              ["Audit the whole path", "Search terms, landing pages, listings and booking engine — everything between the search and the stay."],
              ["Track every enquiry", "Calls, WhatsApp, forms and Book Now tracked separately, so Google bids for what becomes a stay."],
              ["Search-first campaigns", "Budget on people actively looking for a stay, a retreat or a therapy."],
              ["Scale with the season", "Budgets follow demand, so money goes in when enquiries are cheapest."],
            ].map(([t, b], i) => (
              <li key={t} className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
                <span className="text-sm font-bold text-orange-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-bold text-white">{t}</h3>
                <p className="text-sm/relaxed text-[#C9C7DD]">{b}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* ── SEO & other success stories (existing entries) ─ */}
      {casStudiesData.length > 0 && (
        <section className="py-14 md:py-22">
          <Container>
            <div className="flex flex-col gap-3 mb-8 md:mb-10 max-w-180">
              <p className={eyebrow}>SEO & brand</p>
              <h2 className={h2}>More success stories{dot}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {casStudiesData.map((c) => (
                <Link
                  key={c.slug}
                  href={`/case-study/${c.slug}/`}
                  className="group flex gap-5 items-center rounded-3xl border border-[#E4E3EC] p-5 md:p-6 hover:border-primary2/40 transition-colors"
                >
                  <div
                    className="relative h-20 w-28 shrink-0 rounded-2xl"
                    // White logos (e.g. Naad) need the same dark backing they get on the cards above
                    style={{ backgroundColor: caseStudies.find((r) => r.logo === c.img)?.logoBg ?? "#F5F5F9" }}
                  >
                    <Image src={c.img} alt={`${c.title} logo`} fill sizes="112px" className="object-contain p-3" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg/snug font-bold">{c.title}</h3>
                    <p className="text-sm/relaxed text-[#55536E] line-clamp-2">{c.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-primary">
                      Read more <FaArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="pb-14 md:pb-22">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-orange-primary px-6 py-12 md:px-14 md:py-16">
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-150">
                <h2 className="text-[28px]/[1.15] md:text-[40px]/[1.1] font-bold text-white">
                  Find out what your enquiries should cost.
                </h2>
                <p className="text-base/relaxed text-white">
                  Free audit of your Google Ads, landing page and tracking — with a target cost per enquiry for your
                  property.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/google-ads-for-hotels/#audit"
                  className="inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full bg-primary2 text-white font-semibold hover:text-skyBlue"
                >
                  Get my free audit <FaArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={contacts.WhatsAppCta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-13 px-7 rounded-full border border-white text-white font-semibold hover:bg-white/10"
                >
                  <FaWhatsapp aria-hidden="true" /> WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
