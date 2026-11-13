import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";

const SITE = "https://fielmente.com";
const SLUG = "why-hotels-should-hire-a-google-partner-agency";
const URL = SITE + "/" + SLUG + "/";
const IMAGE = "/images/blog/google-partner-hotel-growth.svg";
const DATE = "2026-11-13";
const TITLE = "Why Hotel & Resort Owners Should Choose a Google Partner Agency";
const DESCRIPTION = "Why should hotels hire Fielmente? Discover the Google Partner advantage, direct booking strategies, Hotel Ads, enquiry tracking and hospitality-first marketing.";

export const metadata: Metadata = {
  title: "Why Hire a Google Partner Hotel Marketing Agency? | Fielmente",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Fielmente",
    locale: "en_IN",
    type: "article",
    publishedTime: DATE,
    images: [{ url: IMAGE, width: 1200, height: 675, alt: "Fielmente hotel marketing infographic showing a journey from search to direct bookings" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  robots: { index: true, follow: true },
};

const journey = [
  { num: "01", title: "Get discovered", detail: "A traveller searches for a hotel, resort or getaway on Google.", icon: "SEARCH", color: "bg-[#EAF1FF] border-[#C9DAFF]" },
  { num: "02", title: "Win the click", detail: "Relevant Search or Hotel Ads point them to your official property.", icon: "VISIBILITY", color: "bg-[#FFF1E8] border-[#FFCEB7]" },
  { num: "03", title: "Convert interest", detail: "A fast landing page makes rooms, rates and contact options clear.", icon: "EXPERIENCE", color: "bg-[#ECF8F3] border-[#C9EADB]" },
  { num: "04", title: "Measure bookings", detail: "Track calls, qualified enquiries and completed reservations.", icon: "RESULTS", color: "bg-[#F2EEFF] border-[#DED4FF]" },
];

const differentiators = [
  { num: "01", title: "Hospitality is our focus", body: "A weekend resort, wedding venue, business hotel and wellness retreat attract different guests. We build around those booking journeys, not a generic campaign template." },
  { num: "02", title: "Google Partner recognition", body: "Our agency has met the Google Partners programme requirements for certifications, performance and managed ad spend. It's an additional sign of agency expertise, not a guarantee of results." },
  { num: "03", title: "Direct bookings matter", body: "We look at your official website, Google Hotel Center, booking engine and rate experience so travellers have a better opportunity to book with you directly." },
  { num: "04", title: "Every enquiry should count", body: "We care about qualified calls, WhatsApp conversations, booking starts and completed reservations—not just impressions, CTR and cheap traffic." },
  { num: "05", title: "Marketing meets technology", body: "From ads and SEO to landing pages, analytics and enquiry follow-up workflows, we identify gaps across the full guest journey." },
  { num: "06", title: "An accountable growth plan", body: "We review demand, market, seasonality and acquisition costs, then adjust channel budgets based on evidence rather than vanity metrics." },
];

const faqs = [
  { q: "Does Google Partner status guarantee more bookings?", a: "No. Google Partner status means an agency has met the Google Partners programme requirements. Booking performance still depends on demand, pricing, competition, campaign quality, website experience and follow-up." },
  { q: "Can Fielmente help our resort reduce OTA dependence?", a: "We can help develop a healthier distribution mix through direct-booking campaigns, Hotel Ads eligibility, website improvements, rate-parity checks and conversion tracking. OTAs may still play an important role." },
  { q: "Can every hotel run Google Hotel Ads immediately?", a: "Not necessarily. Hotel advertising depends on supported booking connectivity, accurate price and availability feeds, eligible properties and approved Hotel Center / Google Ads account connections." },
  { q: "Do you manage only Google Ads?", a: "No. Fielmente also supports hospitality SEO, Meta advertising, conversion-focused websites, analytics and appropriate CRM or guest-enquiry workflows." },
  { q: "How should a hotel evaluate an advertising agency?", a: "Ask how it measures qualified enquiries, call quality, confirmed bookings, acquisition cost, conversion rate and channel attribution. Request a strategy that reflects your property's demand patterns and booking technology." },
];

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </svg>
  );
}

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#D85F2F]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-primary2 md:text-3xl">{children}</h2>
    </div>
  );
}

export default function GooglePartnerHotelsArticle() {
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    url: URL,
    mainEntityOfPage: URL,
    image: SITE + IMAGE,
    datePublished: DATE,
    dateModified: DATE,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "Fielmente", url: SITE },
    publisher: { "@type": "Organization", name: "Fielmente", url: SITE, logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
    articleSection: "Hotel Marketing",
    keywords: "Google Partner hotel marketing agency, hotel marketing agency, resort marketing, Google Hotel Ads, direct hotel bookings, hospitality marketing, Fielmente",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blogs/" },
      { "@type": "ListItem", position: 3, name: TITLE, item: URL },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <section className="relative overflow-hidden bg-primary2 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_460px_at_88%_-10%,rgba(242,102,51,0.24),transparent_72%),radial-gradient(700px_460px_at_-5%_100%,rgba(13,84,235,0.3),transparent_72%)]" />
        <Container className="relative pb-16 pt-32 md:pb-20 md:pt-40">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-sm text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blogs/" className="hover:text-white">Blog</Link><span>/</span>
            <span className="text-white">Hotel marketing</span>
          </nav>
          <p className="inline-flex rounded-full border border-[#FFAA82]/50 bg-[#FFAA82]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.13em] text-[#FFD5C4]">For hotel &amp; resort owners · Fielmente Google Partner</p>
          <div className="mt-7 grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight md:text-[3.6rem]">
                Your rooms deserve to be booked. <span className="text-[#FF9667]">Your marketing deserves a Google Partner.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Discover why hotels and resorts choose Fielmente for hospitality-focused Google Ads, direct booking strategies, better enquiry tracking and measurable marketing decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/hotel-performance-marketing-agency/" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#F26633] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#D95021]">Get a free hotel growth plan <Arrow /></Link>
                <Link href="/contact-us/" className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Talk to our team</Link>
              </div>
              <p className="mt-6 text-sm text-white/55">By the Fielmente Team · 13 November 2026 · 8 min read</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#F26633]/10 blur-3xl" aria-hidden="true" />
              <Image src={IMAGE} alt="Illustrated infographic of hotel discovery, online advertising and direct booking opportunities" width={1200} height={675} priority className="relative w-full rounded-3xl border border-white/20 shadow-2xl" />
              <p className="mt-3 text-center text-xs text-white/55">From guest search to your own booking channel</p>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#D85F2F]">The owner's question</p>
          <p className="mt-4 text-2xl font-semibold leading-relaxed text-primary2 md:text-4xl">When a guest searches for a stay near you, <span className="text-[#D85F2F]">do they find your hotel's official booking experience—or only an OTA?</span></p>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-8 text-[#4B5567]">A beautiful property is only the beginning. Marketing needs to connect the right traveller to an experience that can become a confirmed reservation.</p>
        </div>

        <section id="guest-journey" className="mt-16 rounded-3xl border border-[#E3E8F0] bg-[#FBFCFF] p-6 md:p-10">
          <SectionTitle eyebrow="Infographic 01 · The guest journey">How a traveller becomes your guest</SectionTitle>
          <p className="max-w-3xl text-[#4A5264]">An effective campaign is not simply a click generator. Each step must work, from being discovered to knowing which reservations the marketing helped create.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {journey.map((stage, i) => (
              <div key={stage.num} className="relative">
                <div className={"h-full rounded-2xl border p-5 " + stage.color}>
                  <span className="text-xs font-bold tracking-widest text-[#536077]">{stage.icon}</span>
                  <p className="mt-6 text-3xl font-extrabold text-primary2">{stage.num}</p>
                  <h3 className="mt-4 text-lg font-bold text-primary2">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#515B6C]">{stage.detail}</p>
                </div>
                {i < journey.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden rounded-full bg-white p-1 text-[#F26633] shadow md:block" aria-hidden="true"><Arrow /></span>}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#697286]">The stages are a planning framework. Actual guest paths may involve several searches, ads and booking platforms before purchase.</p>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0 text-[17px] leading-8 text-[#384153]">
            <section id="recognition">
              <SectionTitle eyebrow="01 · Recognition that matters">What does Fielmente's Google Partner status actually mean?</SectionTitle>
              <p>Fielmente has earned <strong>Google Partner status</strong>, recognition awarded to participating agencies that meet Google's requirements covering advertising account performance, certifications and managed ad spend.</p>
              <p className="mt-4">For a hotel owner comparing agencies, it provides an additional signal of Google Ads expertise. For us, it is a responsibility to apply that knowledge to hotel businesses with demanding occupancy, seasonality and acquisition-cost goals.</p>
              <div className="mt-6 rounded-2xl border-l-4 border-[#F26633] bg-[#FFF5EF] p-5">
                <p className="font-semibold text-primary2">The badge is not the business outcome. The booking strategy behind it matters.</p>
                <p className="mt-2 text-sm leading-6 text-[#596275]">Google Partner status does not guarantee search placement, discounted CPCs, increased bookings or Google endorsement of a hotel's services.</p>
              </div>
            </section>

            <section id="hospitality-expertise" className="mt-14">
              <SectionTitle eyebrow="02 · A specialist, not a generalist">Your hotel needs an agency that understands hospitality</SectionTitle>
              <p>A room unsold tonight cannot be sold tomorrow. A weekend getaway resort depends on different search behaviour from a corporate hotel or a destination wedding property. Seasonal peaks, source markets, length of stay, pricing and the time between enquiry and booking all affect campaign strategy.</p>
              <p className="mt-4">Fielmente's hospitality-first approach starts with the property: who stays, why they travel, when they book and what prevents them from confirming. The right message for a wellness retreat is not the same as for a business hotel in a metro city.</p>
              <p className="mt-4">That's why we recommend property-specific campaigns instead of generic keywords and copied advertisement templates.</p>
            </section>

            <section id="ota" className="mt-14">
              <SectionTitle eyebrow="03 · Own more of the guest relationship">Grow direct bookings without ignoring OTAs</SectionTitle>
              <p>Booking.com, Agoda, Expedia and other travel marketplaces help hotels reach guests. But relying on them for every reservation can make acquisition costs and guest relationships harder to control.</p>
              <p className="mt-4">A stronger direct-booking strategy brings together a discoverable official website, an easy booking engine, accurate room rates, relevant ads and quick enquiry responses. It does not require abandoning OTAs. It means improving the <strong>balance between intermediary bookings and your own channels</strong>.</p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-[#E4E8F0]">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className="bg-[#F2F4F8] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#697286]">When guests book through an OTA</p>
                    <h3 className="mt-3 text-xl font-extrabold text-primary2">Marketplace-led relationship</h3>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6"><li>Potential commission or promotional costs</li><li>Guest discovery occurs on the platform</li><li>Fewer opportunities to shape the full booking journey</li></ul>
                  </div>
                  <div className="bg-[#ECF6F1] p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#267A50]">When guests book with you</p>
                    <h3 className="mt-3 text-xl font-extrabold text-primary2">Property-owned relationship</h3>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6"><li>Your own website and booking experience</li><li>Direct guest communication and follow-up</li><li>Acquisition costs that can be tracked and optimised</li></ul>
                  </div>
                </div>
                <div className="border-t border-[#E4E8F0] bg-white px-6 py-3 text-xs text-[#667085]">Infographic 02 · Direct and OTA channels can work together; neither route is automatically cheaper for every booking.</div>
              </div>
              <p className="mt-5">Through <Link href="/google-hotel-center/" className="font-semibold text-[#0D54EB] underline underline-offset-4">Google Hotel Center</Link>, compatible booking technology and <Link href="/google-hotel-ads-agency/" className="font-semibold text-[#0D54EB] underline underline-offset-4">Google Hotel Ads</Link>, we help properties explore eligible opportunities to present official booking rates when travellers compare hotels.</p>
            </section>

            <section id="performance" className="mt-14">
              <SectionTitle eyebrow="04 · Measure what matters">Stop judging campaigns by clicks alone</SectionTitle>
              <p>Impressions, CTR and cost per click are useful signals, but they do not answer the hotel's central question: <strong>Did our advertising help generate profitable business?</strong></p>
              <p className="mt-4">We look at relevant enquiries, qualified phone calls, WhatsApp conversations, booking starts, confirmed reservations and booking value where tracking and hotel data permit. We also review where the journey breaks: slow pages, weak messages, missing tracking, irrelevant search terms or unreturned enquiries.</p>
              <p className="mt-4">That is the thinking behind Fielmente's <Link href="/hotel-performance-marketing-agency/" className="font-semibold text-[#0D54EB] underline underline-offset-4">hotel performance marketing</Link>: invest where results can be measured and improve the conversion journey before simply increasing budgets.</p>
            </section>

            <section id="technology" className="mt-14">
              <SectionTitle eyebrow="05 · More than advertising">Search is only the beginning of the guest journey</SectionTitle>
              <p>Imagine someone clicking an ad for your resort, comparing rooms, then calling for a price. If the page is confusing, the phone number is hidden or follow-up is delayed, the money spent on the click may be wasted.</p>
              <p className="mt-4">Our work can connect ads with conversion-focused hotel landing pages, hotel technology, analytics and guest enquiry management. Eazotel technology can support the hand-off from discovery to conversations and CRM workflows, where appropriate for your property.</p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {["Google Search & Hotel Ads", "SEO & local discovery", "Landing pages & booking UX", "Call & WhatsApp tracking", "Enquiry follow-up", "Booking & revenue reporting"].map((item, i) => (
                  <div key={item} className="rounded-xl border border-[#DDE5EF] bg-[#F8FAFD] p-4">
                    <p className="text-sm font-extrabold text-[#F26633]">0{i + 1}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-primary2">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5">For properties ready to grow internationally, the plan may also consider geography, language, booking behaviour and cost per booking by source market. Learn about our <Link href="/international-hotel-marketing-agency/" className="font-semibold text-[#0D54EB] underline underline-offset-4">international hotel marketing services</Link>.</p>
            </section>

            <section id="why-us" className="mt-14">
              <SectionTitle eyebrow="Infographic 03 · Why owners choose us">Six reasons to speak with Fielmente</SectionTitle>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {differentiators.map((d) => (
                  <div key={d.num} className="rounded-2xl border border-[#E2E6EF] bg-white p-5 shadow-[0_8px_32px_-28px_rgba(17,13,60,.45)]">
                    <p className="text-sm font-bold tracking-widest text-[#F26633]">{d.num} / FIELMENTE</p>
                    <h3 className="mt-3 text-lg font-extrabold leading-6 text-primary2">{d.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#576174]">{d.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="questions" className="mt-14">
              <SectionTitle eyebrow="Before you choose your agency">Questions every hotel owner should ask</SectionTitle>
              <p>Before signing with any agency, ask whether it understands your property's occupancy patterns, room categories, price positioning and ideal guest. Ask which campaigns aim to drive bookings versus awareness. Ask what happens after an enquiry arrives and how the booking engine and CRM data are reconciled with ad results.</p>
              <p className="mt-4">A good partner should be willing to discuss limitations, transparent attribution and realistic growth plans. No responsible agency should guarantee occupancy or promise first-place rankings simply because it holds a Partner badge.</p>
            </section>

            <section id="faq" className="mt-14">
              <SectionTitle eyebrow="Answers for property owners">Frequently asked questions</SectionTitle>
              <div className="mt-5 divide-y divide-[#E4E7EE] overflow-hidden rounded-2xl border border-[#E4E7EE]">
                {faqs.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold leading-6 text-primary2">
                      {f.q}<span className="text-xl font-bold text-[#F26633] group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#526074]">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section id="sources" className="mt-14 rounded-2xl border border-[#E7E9F0] bg-[#F9FAFC] p-6">
              <h2 className="text-lg font-bold text-primary2">Google programme and technical references</h2>
              <p className="mt-3 text-sm leading-7">See Google's <a href="https://support.google.com/google-ads/answer/9028798?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0D54EB] underline">Partner badge guidance</a> and <a href="https://support.google.com/google-ads/answer/7663773?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0D54EB] underline">Hotel Center account-linking instructions</a>. Partner recognition belongs to the qualifying agency; it does not imply Google certifies a hotel, endorses Fielmente's SEO services or guarantees advertising results.</p>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <nav className="rounded-2xl border border-[#E4E7EE] bg-[#FAFAFC] p-5" aria-label="Article contents">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#6B7280]">Explore the article</p>
                {[
                  ["#guest-journey", "The guest journey"],
                  ["#recognition", "Google Partner recognition"],
                  ["#hospitality-expertise", "Hospitality-first expertise"],
                  ["#ota", "Direct bookings vs OTAs"],
                  ["#performance", "Measure real results"],
                  ["#technology", "Marketing and technology"],
                  ["#why-us", "Six Fielmente advantages"],
                  ["#faq", "FAQs"],
                ].map(([href, name]) => <a key={href} href={href} className="block rounded-lg px-2 py-2 text-sm font-medium text-[#4F596B] hover:bg-white hover:text-[#0D54EB]">{name}</a>)}
              </nav>
              <div className="rounded-2xl bg-primary2 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FFAB86]">For your property</p>
                <h3 className="mt-3 text-xl font-extrabold leading-snug">Get a direct-booking growth plan.</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">Let's review your website, Google Ads, booking journey and opportunities to improve qualified enquiries.</p>
                <Link href="/hotel-performance-marketing-agency/" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F26633] px-4 py-3 text-sm font-bold text-white hover:bg-[#DB5525]">Request a free plan <Arrow /></Link>
                <a href="tel:+919501868775" className="mt-4 block text-center text-sm text-white/80 underline underline-offset-4">Call +91 95018 68775</a>
              </div>
            </div>
          </aside>
        </div>

        <section id="results" className="mt-16 overflow-hidden rounded-3xl bg-primary2 px-6 py-9 text-white md:px-12 md:py-12">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-[#FFAD88]">Our published Google Ads results</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-bold md:text-3xl">Evidence matters more than a badge alone.</h2>
            </div>
            <Link href="/hotel-performance-marketing-agency/" className="text-sm font-semibold text-[#FFB18E] underline underline-offset-4">Explore our results</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6"><p className="text-4xl font-extrabold text-white">23</p><p className="mt-2 text-sm text-white/80">hospitality Google Ads accounts in our published dataset</p></div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6"><p className="text-4xl font-extrabold text-white">54,900+</p><p className="mt-2 text-sm text-white/80">tracked guest enquiries and booking-intent actions</p></div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6"><p className="text-4xl font-extrabold text-white">−70%</p><p className="mt-2 text-sm text-white/80">reported change in cost per enquiry, 2024–2026</p></div>
          </div>
          <p className="mt-5 max-w-4xl text-xs leading-6 text-white/60">Source: Fielmente's published hotel performance marketing case-study summary (23 managed Google Ads accounts, Sep 2023–Sep 2026). The enquiry figure includes tracked calls, chats, forms and booking clicks; it is not a count of confirmed reservations. Past performance is not a guarantee of future results.</p>
        </section>

        <section className="relative mt-14 overflow-hidden rounded-3xl border border-[#F5C3AB] bg-[#FFF3ED] p-8 md:p-12">
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-[#F26633]/10" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[.17em] text-[#C65325]">Ready for the next booking?</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary2 md:text-4xl">Your property creates memorable stays. We help the right guests discover them.</h2>
              <p className="mt-4 text-[17px] leading-7 text-[#5D6474]">Tell us where your bookings come from today. We'll discuss your website, ads, room demand and the marketing gaps worth solving first.</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              <Link href="/hotel-performance-marketing-agency/" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F26633] px-6 py-4 text-sm font-extrabold text-white hover:bg-[#D95021]">Get my free growth plan <Arrow /></Link>
              <Link href="/contact-us/" className="inline-flex items-center justify-center rounded-full border border-[#E7A488] px-6 py-3 text-sm font-semibold text-primary2 hover:bg-white">Contact Fielmente</Link>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
