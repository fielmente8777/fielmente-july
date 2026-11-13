import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components";

const SITE = "https://fielmente.com";
const SLUG = "google-ads-promotional-credits-hotels-resorts";
const URL = SITE + "/" + SLUG + "/";
const IMAGE = "/images/blog/google-ads-hotel-promotional-credits.svg";
const DATE = "2026-11-13";
const TITLE = "Google Ads Promotional Credits for Hotels & Resorts: What Changes With Google Partners?";
const DESCRIPTION = "Did hotels already get Google Ads credits before? Compare standard offers with Google Partner promotions, eligibility, spending rules and hotel booking benefits.";

export const metadata: Metadata = {
  title: "Google Ads Promotional Credits for Hotels | Fielmente",
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
    images: [{ url: IMAGE, width: 1600, height: 900, alt: "Google Ads promotional credits explained for hotel and resort owners" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  robots: { index: true, follow: true },
};

const offers = [
  ["$500", "$500"],
  ["$680", "$630"],
  ["$1,400", "$980"],
  ["$3,200", "$1,600"],
  ["$4,500", "$2,250"],
  ["$10,000", "$5,000"],
  ["$12,000", "$6,000"],
] as const;

const differences = [
  { label: "Who receives them?", before: "Google offers promotions to selected qualifying advertisers, including some new businesses and selected existing advertisers.", after: "Google Partner agencies can assign Partner-programme offers to eligible new clients." },
  { label: "How is the offer chosen?", before: "Advertisers usually receive the available offer automatically or through an eligible promotion.", after: "A participating Partner can choose one of seven published promotional values, subject to availability." },
  { label: "New-account window", before: "A standard new-advertiser offer generally requires redemption when the Google Ads account is less than 14 days old.", after: "Partner promotional offers can be assigned within 20 days of a qualifying advertiser account's creation." },
  { label: "Agency allocation", before: "No Partner-level monthly allocation applies to an ordinary advertiser offer.", after: "The Partner programme uses a monthly credit cap calculated from qualifying agency-managed spend." },
] as const;

const steps = [
  { n: "01", title: "Check eligibility", body: "Confirm this is a genuinely new Google Ads advertiser with an eligible billing country, no other promotion and a qualifying Partner-managed account." },
  { n: "02", title: "Select the offer", body: "The Partner checks its available monthly allocation, reviews the current offers and chooses a value appropriate to the hotel's real advertising budget." },
  { n: "03", title: "Redeem promptly", body: "The Partner assigns and redeems the offer within 20 days after the eligible Google Ads account was created." },
  { n: "04", title: "Meet the spend requirement", body: "The hotel spends the specified amount on qualifying ads within 60 days of the offer's redemption." },
  { n: "05", title: "Google verifies", body: "Google checks the spend and verifies that the business is genuinely new to Google Ads. Processing may take up to 35 days after the spend requirement is met." },
  { n: "06", title: "Use future ad credit", body: "If approved, the promotional amount can cover eligible future advertising costs until it is used or expires." },
] as const;

const faqs = [
  { q: "Are Google Ads promotional credits free cash?", a: "No. They are advertising credits, not cash, reimbursements or refunds. The hotel normally has to meet a qualifying ad-spend requirement first." },
  { q: "Didn't hotels already receive promotional offers before Google Partner status?", a: "Yes. Standard Google Ads promotions were available before and remain available to selected eligible advertisers. The difference is that Partner agencies have a separate programme for manually allocating offers to eligible new clients." },
  { q: "Will every new hotel client receive a promotional credit?", a: "No. Eligibility, country availability, a Partner's monthly allocation and the exact promotional terms all matter. Google performs additional verification after the spending requirement is reached." },
  { q: "Can an existing hotel open another account to qualify as a new advertiser?", a: "No. A different Google Ads account does not make the same previously advertising business a new advertiser. Google may offer separate promotions to some existing advertisers." },
  { q: "When can we use the credit?", a: "After the qualifying spend and Google's verification are complete. The credit is applied to eligible future advertising costs, not to the amount required to earn it." },
  { q: "Does Google Partner status guarantee hotel bookings or lower CPC?", a: "No. Campaign results depend on demand, competition, campaign quality, property pricing, website experience, conversion tracking and enquiry follow-up." },
] as const;

function SectionTitle({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-[#CA5429]">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-primary2 md:text-3xl">{children}</h2>
    </div>
  );
}

const sourceClass = "font-semibold text-[#0D54EB] underline underline-offset-4 hover:text-[#D4552D]";

export default function HotelGoogleAdsPromotionalCredits() {
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
    articleSection: "Hotel Marketing",
    keywords: "Google Ads promotional credits for hotels, Google Partner offers, Google Ads hotel advertising credits, resort marketing, hotel direct booking campaigns",
    author: { "@type": "Organization", name: "Fielmente", url: SITE },
    publisher: { "@type": "Organization", name: "Fielmente", url: SITE, logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
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
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(700px_480px_at_95%_-10%,rgba(242,102,51,0.3),transparent_72%),radial-gradient(750px_460px_at_-10%_100%,rgba(13,84,235,0.28),transparent_70%)]" />
        <Container className="relative pb-14 pt-32 md:pb-20 md:pt-40">
          <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-sm text-white/65">
            <Link href="/" className="hover:text-white">Home</Link><span aria-hidden="true">/</span>
            <Link href="/blogs/" className="hover:text-white">Blogs</Link><span aria-hidden="true">/</span>
            <span className="text-white">Google Ads credits for hotels</span>
          </nav>
          <div className="grid items-center gap-9 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <p className="inline-flex rounded-full border border-[#FFC4A6]/40 bg-[#F26633]/15 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFD2BC]">Hotel &amp; Resort Owner's Guide · 2026</p>
              <h1 className="mt-6 max-w-4xl text-[34px] font-extrabold leading-[1.13] tracking-tight md:text-[52px]">
                Google Ads Promotional Credits for Hotels &amp; Resorts:
                <span className="mt-2 block text-[#FF986A]">What Has Actually Changed?</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Hotels received introductory ad credits before Google Partner agencies existed. Here's what is genuinely different now, what your property may qualify for and how to avoid costly misunderstandings.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#before-vs-now" className="inline-flex min-h-12 items-center rounded-full bg-[#F26633] px-6 py-3 text-sm font-bold text-white hover:bg-[#DC5729]">See what changed</a>
                <Link href="/contact-us/" className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">Check my hotel eligibility</Link>
              </div>
              <p className="mt-6 text-sm text-white/60">By the Fielmente Team · 13 November 2026 · 8 min read</p>
              <a href="https://www.google.com/partners/agency?id=7707754365" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm font-medium text-white/80 underline underline-offset-4 hover:text-white">Fielmente is part of Eazotel, a Google Partner · Verify the profile</a>
            </div>
            <figure className="relative">
              <Image src={IMAGE} alt="Infographic showing an eligible hotel advertising budget, Google Ads promotional credit and the direct booking journey" width={1600} height={900} priority className="w-full rounded-3xl border border-white/15 shadow-2xl" />
              <figcaption className="mt-3 text-center text-xs leading-5 text-white/55">Extra eligible advertising value—not cash and not a booking guarantee.</figcaption>
            </figure>
          </div>
        </Container>
      </section>

      <Container className="py-12 md:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#CB542B]">Let's clear up the confusion</p>
          <p className="mt-4 text-2xl font-bold leading-snug text-primary2 md:text-4xl">The credit isn't new. <span className="text-[#D25B31]">The way Google Partners can assign it is.</span></p>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#566075]">Google has offered incentives to advertisers for years. Its updated Partners programme now gives qualified agencies more flexibility to select offers for eligible new clients. That is useful for a hotel's marketing plan—but it does not make the credit automatic.</p>
        </div>

        <section id="before-vs-now" className="mt-16 rounded-3xl border border-[#E7E7EF] bg-[#FAFBFD] p-5 md:p-10">
          <SectionTitle eyebrow="Infographic 01 · Then and now">Standard Google Ads offers vs. Google Partner offers</SectionTitle>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-[#DCE5FA] bg-[#EDF3FF] px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#335AAB]">Before and still available</p>
              <h3 className="mt-2 text-2xl font-extrabold text-primary2">Standard promotions</h3>
              <p className="mt-2 text-sm leading-6 text-[#526079]">Google selects eligible accounts and communicates offers through sign-up, email or the Promotions area.</p>
            </div>
            <div className="rounded-2xl border border-[#FFD0B9] bg-[#FFF1E9] px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-[#A74B22]">An additional agency benefit</p>
              <h3 className="mt-2 text-2xl font-extrabold text-primary2">Partner-managed offers</h3>
              <p className="mt-2 text-sm leading-6 text-[#6F5449]">Qualified Partners can manually select from published offer tiers for eligible new-client accounts.</p>
            </div>
          </div>
          <div className="mt-5 overflow-hidden rounded-2xl border border-[#E2E6EE] bg-white">
            {differences.map((row, idx) => (
              <div key={row.label} className={"grid gap-4 p-5 md:grid-cols-[0.75fr_1.35fr_1.35fr] md:gap-5 " + (idx > 0 ? "border-t border-[#E2E6EE]" : "")}>
                <h3 className="text-sm font-extrabold text-primary2">{row.label}</h3>
                <p className="rounded-lg bg-[#F3F6FC] px-3 py-2 text-sm leading-6 text-[#4D586B]">{row.before}</p>
                <p className="rounded-lg bg-[#FFF4ED] px-3 py-2 text-sm leading-6 text-[#4D586B]">{row.after}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-[#5C6372]">Ordinary promotional offers remain separate from Partner promotional offers. Each offer has its own terms, and the 14-day rule does not replace the 20-day Partner window.</p>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_275px]">
          <article className="min-w-0 text-[17px] leading-8 text-[#384153]">
            <section id="what-are-credits">
              <SectionTitle eyebrow="01 · The basics">What are Google Ads promotional credits?</SectionTitle>
              <p>Google Ads promotional credits are incentives that can cover eligible <strong>future advertising costs</strong> after a business meets an offer's specific requirements. They are not cash, refunds or money that a hotel can withdraw.</p>
              <p className="mt-4">For example, an eligible hotel might be offered a promotion that requires $500 in advertising spend within the specified period to qualify for $500 in additional Google Ads credit. The hotel pays for the qualifying spend first; Google then reviews whether the business is eligible for the reward.</p>
              <div className="mt-6 rounded-2xl border-l-4 border-[#F26633] bg-[#FFF4ED] p-5">
                <h3 className="font-extrabold text-primary2">Important: “Spend $500, get $500” is not an immediate 50% discount.</h3>
                <p className="mt-2 text-sm leading-6">The initial $500 in ad costs must be paid in the normal way. The promotional credit, if approved, applies only to eligible costs incurred after the credit is issued.</p>
              </div>
            </section>

            <section id="offers" className="mt-14">
              <SectionTitle eyebrow="02 · Available offer values">The seven published Google Partner promotional credit tiers</SectionTitle>
              <p>Google currently publishes the following USD offer values for eligible new clients of Partners and Premier Partners. A property's billing country and account determine whether a local equivalent and a particular offer are available.</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#DBE1ED] shadow-sm">
                <table className="w-full text-left text-sm md:text-base">
                  <thead className="bg-primary2 text-white">
                    <tr><th className="px-4 py-4 font-bold md:px-6">Qualifying ad spend</th><th className="px-4 py-4 font-bold md:px-6">Potential promotional credit</th></tr>
                  </thead>
                  <tbody>
                    {offers.map(([spend, credit], idx) => (
                      <tr key={spend} className={idx % 2 ? "bg-[#F5F7FC]" : "bg-white"}>
                        <td className="px-4 py-3 font-semibold text-primary2 md:px-6">{spend}</td>
                        <td className="px-4 py-3 font-extrabold text-[#1B7859] md:px-6">{credit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-6 text-[#627083]">Source: Google's <a className={sourceClass} href="https://support.google.com/google-ads/answer/15329625?hl=en" target="_blank" rel="noopener noreferrer">official Google Partners promotional offer guidance</a>. USD figures are for reference; they are not a promise of an INR credit amount or availability in every account.</p>
            </section>

            <section id="eligibility" className="mt-14">
              <SectionTitle eyebrow="03 · Who qualifies?">What a hotel or resort needs to qualify</SectionTitle>
              <p>For a Google Partner promotional offer, Google requires a <strong>new advertiser</strong>, an eligible billing country and no existing promotion on the account. The managing agency must have active Partner or Premier Partner status and enough available promotional allocation.</p>
              <ul className="mt-6 space-y-3 rounded-2xl border border-[#E0E5EF] bg-white p-5">
                {[
                  "The advertiser must be genuinely new to Google Ads—not an established hotel opening another account.",
                  "The Partner-managed account must be within 20 days of its creation when the offer is applied.",
                  "Google must support Partner promotional offers in the account's billing country.",
                  "No other promotion may already be applied to that advertiser account.",
                  "The agency must have sufficient remaining allocation and the account must satisfy applicable Google policies.",
                  "The hotel must meet the chosen spend requirement within 60 days from redemption.",
                ].map((line) => <li key={line} className="flex gap-3 text-sm leading-6"><span aria-hidden="true" className="font-extrabold text-[#16956B]">✓</span><span>{line}</span></li>)}
              </ul>
              <p className="mt-5">Google verifies the new-advertiser status <strong>after</strong> the spend requirement is reached. It can take up to 35 days from that point for an approved credit to appear.</p>
            </section>

            <section id="journey" className="mt-14">
              <SectionTitle eyebrow="Infographic 02 · The eligibility journey">How promotional credits move from offer to usable ad credit</SectionTitle>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {steps.map((step) => (
                  <div key={step.n} className="rounded-2xl border border-[#DFE5EF] bg-[#FCFDFF] p-5 shadow-sm">
                    <p className="text-3xl font-extrabold text-[#F26633]">{step.n}</p>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-primary2">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#536074]">{step.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 grid gap-2 rounded-2xl bg-primary2 p-5 text-center text-sm font-bold text-white sm:grid-cols-3">
                <div className="rounded-xl bg-white/10 px-3 py-3"><span className="block text-3xl text-[#FFAD86]">20</span> days to assign</div>
                <div className="rounded-xl bg-white/10 px-3 py-3"><span className="block text-3xl text-[#FFAD86]">60</span> days to spend</div>
                <div className="rounded-xl bg-white/10 px-3 py-3"><span className="block text-3xl text-[#FFAD86]">35</span> days possible processing</div>
              </div>
              <p className="mt-3 text-xs leading-5 text-[#687183]">The 60 days begin at redemption; the 35-day processing period begins when the qualifying spend is met. All timings remain subject to applicable terms.</p>
            </section>

            <section id="allocation" className="mt-14">
              <SectionTitle eyebrow="04 · What agencies can allocate">What does the monthly 15% Google Partner cap mean?</SectionTitle>
              <p>Google calculates an agency's <strong>monthly promotional credit allocation</strong> as 15% of its rolling previous 90-day managed Google Ads spend, with the amount recalculated on the first day of the month. This is a ceiling on eligible offers that can be assigned, not money paid to the agency or a guaranteed amount each client will receive.</p>
              <div className="mt-6 overflow-hidden rounded-2xl border border-[#C9D8FA]">
                <div className="bg-[#EDF3FF] px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-[.15em] text-[#4162A1]">Illustrative example only</p>
                  <div className="mt-4 grid items-end gap-5 sm:grid-cols-2">
                    <div><p className="text-sm text-[#536079]">Agency's 90-day qualifying spend</p><p className="mt-1 text-3xl font-extrabold text-primary2">₹10 lakh</p></div>
                    <div><p className="text-sm text-[#536079]">Potential monthly offer allocation at 15%</p><p className="mt-1 text-3xl font-extrabold text-[#216C4E]">₹1.5 lakh</p></div>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#C5D8FF]" aria-label="15 percent of rolling spend">
                    <div className="h-full w-[15%] rounded-full bg-[#F26633]" />
                  </div>
                  <p className="mt-3 text-xs text-[#536079]">The orange portion represents the 15% allocation ratio. Actual amounts depend on Google's calculation.</p>
                </div>
                <p className="bg-white px-6 py-4 text-sm leading-6">This example is not Eazotel's actual account balance and is not a quote for a specific hotel.</p>
              </div>
            </section>

            <section id="hotel-benefits" className="mt-14">
              <SectionTitle eyebrow="05 · Value for hospitality brands">Why might a hotel benefit from additional ad credit?</SectionTitle>
              <p>A qualifying promotional credit can support additional advertising after the hotel's qualifying spend. That might mean more room to learn which campaigns, audiences and landing pages bring useful enquiries.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  ["High-intent guest searches", "Reach travellers comparing hotels, resorts and destination stays relevant to your property."],
                  ["Direct booking campaigns", "Send potential guests to your official website, booking engine or appropriate enquiry channels."],
                  ["Campaign testing", "Evaluate destinations, seasonal demand and creative approaches without confusing free credit with guaranteed return."],
                  ["Better measurement", "Compare calls, qualified leads, completed reservations and cost per booking rather than clicks alone."],
                ].map(([heading, body]) => <div key={heading} className="rounded-2xl border border-[#E1E5EE] bg-white p-5"><h3 className="text-lg font-bold leading-snug text-primary2">{heading}</h3><p className="mt-2 text-sm leading-6 text-[#536074]">{body}</p></div>)}
              </div>
              <p className="mt-5">In hospitality, the real goal is not merely to spend more. It's to generate profitable room revenue while improving the quality of the direct-booking journey.</p>
            </section>

            <section id="existing-clients" className="mt-14">
              <SectionTitle eyebrow="06 · A distinction worth knowing">What if your hotel already runs Google Ads?</SectionTitle>
              <p>A hotel that previously advertised using Google Ads should not assume it can qualify again as a new advertiser through an agency or by opening a second account. Google checks whether the <em>business</em> is new to Google Ads, not only the age of the account.</p>
              <p className="mt-4">Google does sometimes provide separate targeted promotions for existing advertisers, such as feature adoption or account reactivation. These depend on the individual offer and are not the same as the new-client Google Partner programme.</p>
              <p className="mt-4">For an established hotel, <strong>landing-page conversion rate, tracked bookings, cost per acquisition and budget allocation</strong> are often more valuable than chasing a one-time promotional credit.</p>
            </section>

            <section id="fielmente" className="mt-14">
              <SectionTitle eyebrow="07 · Hospitality-first expertise">How Fielmente can help you use Google Ads more effectively</SectionTitle>
              <p>Fielmente is part of <a href="https://www.eazotel.com/" target="_blank" rel="noopener noreferrer" className={sourceClass}>Eazotel</a>, a Google Partner. We help hospitality businesses connect advertising with the full guest journey, from discovery to website visits, conversations and measurable booking outcomes.</p>
              <ul className="mt-5 list-disc space-y-2 pl-6">
                <li>Hotel and resort Google Ads strategy built around destination demand, guest intent and property positioning.</li>
                <li>Call-focused, enquiry-focused and direct-booking landing pages with transparent offers and clear calls to action.</li>
                <li>Tracking for calls, forms, WhatsApp and confirmed bookings wherever reliable data is available.</li>
                <li>Campaign optimisation based on qualified lead value, acquisition cost and seasonality.</li>
                <li>A review of available Google Ads promotional offers for genuinely eligible new advertisers, without promising credits.</li>
              </ul>
              <p className="mt-4">The promotional incentive can help an eligible hotel get started, but our success criteria remain straightforward: relevant guests, useful enquiries and bookings that make financial sense for the property.</p>
            </section>

            <section id="faq" className="mt-14">
              <SectionTitle eyebrow="Questions from hotel owners">Frequently asked questions</SectionTitle>
              <div className="mt-5 divide-y divide-[#E1E5ED] overflow-hidden rounded-2xl border border-[#E1E5ED]">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold leading-6 text-primary2">
                      {faq.q}<span className="text-xl font-bold text-[#F26633] group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-[#526074]">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section id="sources" className="mt-14 rounded-2xl border border-[#E4E7EF] bg-[#F8FAFD] p-6">
              <h2 className="text-lg font-extrabold text-primary2">Official Google sources</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6">
                <li><a className={sourceClass} href="https://support.google.com/google-ads/answer/15329625?hl=en" target="_blank" rel="noopener noreferrer">Google Partners promotional offers, available tiers and eligibility</a></li>
                <li><a className={sourceClass} href="https://support.google.com/google-ads/answer/6388096?hl=en" target="_blank" rel="noopener noreferrer">About Google Ads promotional offers for new and existing advertisers</a></li>
                <li><a className={sourceClass} href="https://support.google.com/google-ads/answer/16915411?hl=en" target="_blank" rel="noopener noreferrer">How promotional offers work with different payment settings</a></li>
                <li><a className={sourceClass} href="https://www.google.com/partners/agency?id=7707754365" target="_blank" rel="noopener noreferrer">Eazotel's Google Partner profile</a></li>
              </ul>
              <p className="mt-4 text-xs leading-6 text-[#687183]">Programme details may change. Check the current terms shown in the relevant Google Ads account before committing a budget. Google Partner status does not guarantee campaign performance or mean that Google endorses Fielmente's SEO services.</p>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <nav aria-label="Article contents" className="rounded-2xl border border-[#E4E7EF] bg-[#FBFCFE] p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#667087]">In this guide</p>
                {[
                  ["#before-vs-now", "Before vs. now"],
                  ["#what-are-credits", "What are the credits?"],
                  ["#offers", "Seven credit tiers"],
                  ["#eligibility", "Eligibility rules"],
                  ["#journey", "How the process works"],
                  ["#allocation", "Agency's 15% allocation"],
                  ["#hotel-benefits", "Benefits for hotels"],
                  ["#existing-clients", "Existing advertisers"],
                  ["#faq", "Frequently asked questions"],
                ].map(([href, label]) => <a key={href} href={href} className="block rounded-lg px-2 py-2 text-sm font-medium text-[#4F596B] hover:bg-[#EDF2FF] hover:text-[#0D54EB]">{label}</a>)}
              </nav>
              <div className="rounded-2xl bg-primary2 p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FFB48F]">Planning to advertise?</p>
                <h3 className="mt-3 text-xl font-extrabold leading-snug">Start with a smarter hotel Google Ads plan.</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">We can review your property, campaign goals and potential promotional offer eligibility.</p>
                <Link href="/contact-us/" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#F26633] px-4 py-3 text-sm font-bold text-white hover:bg-[#D65025]">Book a free consultation</Link>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-16 overflow-hidden rounded-3xl bg-primary2 px-6 py-10 text-white md:px-12 md:py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[.17em] text-[#FFB28E]">Fielmente · Part of Eazotel, a Google Partner</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">Build more direct booking opportunities—not just ad impressions.</h2>
              <p className="mt-3 text-base leading-7 text-white/75">Speak to our hospitality marketing team about your hotel website, Google Ads strategy and possible new-advertiser offers.</p>
            </div>
            <Link href="/contact-us/" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-[#F26633] px-6 py-3 text-sm font-bold text-white hover:bg-[#D65025]">Get my free Google Ads consultation</Link>
          </div>
        </section>
        <p className="mt-5 text-xs leading-6 text-[#788193]">Disclosure: Promotional credits are supplied by Google to qualifying advertiser accounts, subject to offer and country availability. Fielmente does not issue or guarantee the credits. Google Partner status belongs to the eligible participating Google Ads manager account associated with Eazotel.</p>
      </Container>
    </main>
  );
}
