import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";

const SITE = "https://fielmente.com";
const URL = SITE + "/google-hotel-center-google-ads-data-manager-guide/";
const TITLE = "How to Connect Google Hotel Center to Google Ads Using Data Manager (2026)";
const DESCRIPTION = "Step-by-step Google Hotel Center and Google Ads linking guide: Tools, Data Manager, Hotel Center ID, approval, hotel feeds and direct booking ads.";
const IMAGE = "/images/blog/google-hotel-center-ads-connection.svg";

export const metadata: Metadata = {
  title: "Link Google Hotel Center to Google Ads via Data Manager | Fielmente",
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: URL, siteName: "Fielmente",
    locale: "en_IN", type: "article",
    publishedTime: "2026-11-07",
    images: [{ url: IMAGE, width: 1200, height: 675, alt: "Google Hotel Center to Google Ads account linking workflow" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [IMAGE] },
  robots: { index: true, follow: true },
};

const linkingSteps = [
  { title: "Sign in to Google Ads", body: "Open Google Ads in Expert Mode. Your user must have administrative access to the Google Ads account that will run hotel advertising." },
  { title: "Select Tools", body: "In the Google Ads left navigation, click the Tools icon to open account utilities." },
  { title: "Open Data Manager", body: "Choose Data Manager. This is where Google Ads manages connections to other Google products and data sources." },
  { title: "Choose Google Hotel Center", body: "Under Featured products, select Google Hotel Center and click Proceed. If Hotel Center was linked before, use Connected products → Google Hotel Center → Manage & link → +." },
  { title: "Enter the Hotel Center account ID", body: "Paste the correct Google Hotel Center Account ID—not the Google Ads customer ID or hotel property ID—and click Send. This creates a pending request, not an active link." },
  { title: "Approve in Hotel Center", body: "An Hotel Center owner signs in, opens Account settings, finds the Google Ads link table, selects Review link request and clicks Approve." },
  { title: "Choose which hotels to share", body: "The owner can approve All properties or Only some properties. For selected properties, Google supports uploading a CSV containing hotel IDs." },
  { title: "Verify and prepare your campaigns", body: "Back in Google Ads, visit Tools → Data Manager → Connected products → Google Hotel Center → Manage & link. Confirm the connection and relevant properties, then configure your campaign and conversion measurement." },
];

const requirements = [
  ["Google Ads account", "An account in Expert Mode with administrative access."],
  ["Hotel Center account", "An account containing your hotel data, with an owner available to approve the request."],
  ["Valid price and availability data", "A rate feed provided directly or through a booking engine, channel manager or other connectivity partner."],
  ["Bookable landing page", "A working hotel booking destination where prices, taxes and availability match what guests were shown."],
  ["Measurement", "Google Ads conversion actions and booking attribution so paid traffic can be evaluated against direct-booking value."],
];

const faqs = [
  { q: "Where is the Google Hotel Center connector in Google Ads?", a: "Open Tools → Data Manager, then under Featured products choose Google Hotel Center. Existing links appear under Connected products → Google Hotel Center → Manage & link." },
  { q: "Can I connect Google Hotel Center using only the Google Ads ID?", a: "You can start from Hotel Center using the Google Ads customer ID, or start from Google Ads using the Hotel Center Account ID. In either direction, the recipient must approve the linking request." },
  { q: "Does linking Hotel Center immediately start Google Hotel Ads?", a: "No. The link makes eligible hotel data available to supported Google Ads campaign types. You still need valid rates, property eligibility, campaign setup, budget, bidding and tracking." },
  { q: "How long before the Hotel campaign option appears?", a: "Google says it may take up to 72 hours after linking for the Hotel campaign type to become available in Google Ads." },
  { q: "Do I need a booking engine or connectivity partner?", a: "Google Hotel campaigns need hotel rates and availability supplied through a valid price feed. Most independent hotels use a compatible booking engine, CRS or channel manager as their connectivity partner." },
  { q: "Can one Google Ads account connect to multiple Hotel Center accounts?", a: "Yes. Google allows an Ads account to link to multiple Hotel Center accounts, but not to link the same Hotel Center account twice." },
  { q: "Will the hotel website appear above OTAs automatically?", a: "No. Free booking links and paid hotel ads have different eligibility and ranking processes. Linking does not guarantee placement, a particular price position or bookings." },
];

const process = [
  { num: "01", title: "Your booking engine", detail: "Hotel rates, rooms and live availability", color: "border-[#0D54EB]/20 bg-[#EAF1FF]" },
  { num: "02", title: "Google Hotel Center", detail: "Validated property and price feed", color: "border-[#F26633]/30 bg-[#FFF0E7]" },
  { num: "03", title: "Google Ads", detail: "Linked account, budget and bidding", color: "border-[#0D54EB]/20 bg-[#EAF1FF]" },
  { num: "04", title: "Booking links", detail: "Eligible paid ads and guest bookings", color: "border-[#F26633]/30 bg-[#FFF0E7]" },
];

function Arrow() {
  return <span aria-hidden="true" className="text-xl font-bold text-[#F26633]">→</span>;
}

export default function GoogleHotelCenterLinkGuide() {
  const articleLd = {
    "@context": "https://schema.org", "@type": "BlogPosting",
    headline: TITLE, description: DESCRIPTION, url: URL, mainEntityOfPage: URL,
    image: SITE + IMAGE, datePublished: "2026-11-07", dateModified: "2026-11-07",
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "Fielmente", url: SITE },
    publisher: { "@type": "Organization", name: "Fielmente", url: SITE, logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
    keywords: "Google Hotel Center, Google Hotel Ads, Google Ads Data Manager, Hotel Center Account ID, Google Hotel Center data connector, hotel direct booking ads",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: SITE + "/blogs/" },
      { "@type": "ListItem", position: 3, name: TITLE, item: URL },
    ],
  };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <section className="relative overflow-hidden bg-primary2 text-white">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(650px_350px_at_95%_0%,rgba(242,102,51,.25),transparent_70%),radial-gradient(700px_500px_at_0%_100%,rgba(13,84,235,.25),transparent_70%)]" />
        <Container className="relative pb-16 pt-32 md:pb-20 md:pt-40">
          <nav className="mb-5 flex flex-wrap gap-2 text-sm text-white/65" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <Link href="/blogs/" className="hover:text-white">Blog</Link><span>/</span><span className="text-white">Google Hotel Ads Guide</span>
          </nav>
          <p className="inline-flex rounded-full border border-[#F26633]/50 bg-[#F26633]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#FFC0A7]">Hotel Advertising · Step-by-Step 2026 Guide</p>
          <h1 className="mt-6 max-w-5xl text-3xl font-bold leading-tight md:text-5xl lg:text-[3.4rem]">{TITLE}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">Connect a hotel&apos;s room-rate feed with the Google Ads account that will advertise it. Follow the exact Tools → Data Manager path, approve the link in Hotel Center, and understand what must happen before your ads can run.</p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/65"><span>By Fielmente Team</span><span>7 November 2026</span><span>Google Hotel Center & Direct Booking Ads</span></div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#link-steps" className="rounded-full bg-[#F26633] px-6 py-3 text-sm font-bold text-white hover:bg-[#DC5523]">See the linking steps</a>
            <Link href="/google-hotel-ads-agency/" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Google Hotel Ads services</Link>
          </div>
        </Container>
      </section>

      <Container className="relative -mt-1 pb-20">
        <figure className="overflow-hidden rounded-2xl border border-[#E6E4EF] bg-primary2 shadow-[0_20px_65px_-25px_rgba(17,13,60,.3)] md:rounded-3xl">
          <Image src={IMAGE} alt="Infographic showing booking engine to Google Hotel Center to Google Ads to paid hotel booking links, and the Tools to Data Manager link approval route" width={1200} height={675} priority className="h-auto w-full" />
          <figcaption className="bg-white px-5 py-3 text-sm text-[#5F6776]">Visual guide: the hotel price feed is separate from the Google Ads account-linking approval process.</figcaption>
        </figure>

        <div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="min-w-0 text-[#353D50]">
            <section className="space-y-4 text-[17px] leading-8">
              <p>A traveller comparing hotels on Google may see prices from online travel agencies as well as a property&apos;s own booking website. To participate in eligible hotel advertising formats, hotels need the right property and rate data flowing into <strong>Google Hotel Center</strong> and a link to the Google Ads account managing the campaigns.</p>
              <p>Many hotel teams have a Google Ads account but cannot find the Hotel campaign setup. The missing step is often not a new campaign—it is a connection between <strong>Google Hotel Center and Google Ads through Data Manager</strong>. Here is how that connection actually works.</p>
            </section>

            <section className="mt-12" id="what-is-hotel-center">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">What is Google Hotel Center?</h2>
              <p className="mt-4 text-[17px] leading-8">Google Hotel Center is the platform for managing hotel property information, booking links, price feeds and availability data used in Google&apos;s hotel booking experiences. A hotel often sends this data through a compatible booking engine, channel manager or central reservations system, rather than typing every nightly rate manually.</p>
              <p className="mt-4 text-[17px] leading-8">Google Ads is different: it is where advertisers build campaigns, choose bids and budgets, and measure results. Linking the accounts enables Hotel Center travel-feed data to be used in supported advertising formats such as Hotel campaigns and Performance Max for travel goals.</p>
              <p className="mt-4 text-[17px] leading-8">For a deeper overview of setup and free booking links, explore <Link href="/google-hotel-center/" className="font-semibold text-[#0D54EB] underline">Fielmente&apos;s Google Hotel Center service guide</Link>.</p>
            </section>

            <section className="mt-12" id="data-flow">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Infographic: How the Google hotel booking data flow works</h2>
              <p className="mt-3 text-[17px] leading-8">Think of this as two complementary connections: your booking system supplies hotel rates, while Data Manager links the hotel data account to your advertising account.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {process.map((stage) => (
                  <div key={stage.num} className={`rounded-2xl border p-5 ${stage.color}`}>
                    <p className="text-xs font-extrabold tracking-[0.16em] text-[#0D54EB]">STAGE {stage.num}</p>
                    <h3 className="mt-2 text-lg font-bold text-primary2">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#495164]">{stage.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-xl border-l-4 border-[#F26633] bg-[#FFF4EE] px-4 py-3 text-sm leading-6"><strong>Important:</strong> Linking accounts does not itself upload live prices, launch an ad, or guarantee your hotel&apos;s position. Rate feeds, eligibility, a booking page and campaign configuration still matter.</p>
            </section>

            <section className="mt-12" id="requirements">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Before you begin: What you need</h2>
              <div className="mt-6 space-y-3">
                {requirements.map(([head, body]) => (
                  <div key={head} className="flex items-start gap-4 rounded-2xl border border-[#E6E4EF] bg-white p-4">
                    <span aria-hidden="true" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E9F8ED] font-bold text-[#237B40]">✓</span>
                    <div><h3 className="font-bold text-primary2">{head}</h3><p className="mt-1 text-sm leading-6 text-[#555E70]">{body}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12" id="link-steps">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">How to link Google Hotel Center through Tools → Data Manager</h2>
              <p className="mt-3 text-[17px] leading-8">These steps follow Google&apos;s official <a className="font-semibold text-[#0D54EB] underline" href="https://support.google.com/google-ads/answer/7663773?hl=en" target="_blank" rel="noopener noreferrer">Hotel Center account-linking instructions</a>.</p>
              <div className="mt-6 flex flex-wrap items-center gap-2 rounded-2xl bg-primary2 px-4 py-5 text-sm font-semibold text-white">
                {["Tools", "Data Manager", "Google Hotel Center", "Send request", "Approve link"].map((x, i) => (
                  <span key={x} className="inline-flex items-center gap-2">
                    {i > 0 && <span className="font-bold text-[#FF9B74]" aria-hidden="true">→</span>}
                    <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-2">{x}</span>
                  </span>
                ))}
              </div>
              <ol className="relative mt-7 space-y-4 border-l-2 border-[#DBE6FF] pl-6">
                {linkingSteps.map((s, i) => (
                  <li key={s.title} className="relative rounded-2xl border border-[#E6E4EF] bg-white px-5 py-5 shadow-sm">
                    <span className="absolute -left-[41px] top-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#0D54EB] text-xs font-bold text-white">{i + 1}</span>
                    <h3 className="text-lg font-bold text-primary2">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#555E70]">{s.body}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-2xl border border-[#FFBE9F] bg-[#FFF5F0] px-5 py-5">
                <h3 className="text-lg font-bold text-primary2">What happens after approval?</h3>
                <p className="mt-2 leading-7">The link becomes manageable under Connected products. Google says the Hotel campaign type may take <strong>up to 72 hours</strong> to appear. This does not mean an ad automatically goes live after 72 hours; you must still set up and enable the campaign.</p>
              </div>
            </section>

            <section className="mt-12" id="hotel-ads-vs-free-links">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Visual comparison: Free booking links vs Google Hotel Ads</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#BDD5FF] bg-[#F0F6FF] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#0D54EB]">Organic hotel booking opportunity</p>
                  <h3 className="mt-3 text-xl font-bold text-primary2">Free booking links</h3>
                  <p className="mt-4 text-3xl font-extrabold text-[#0D54EB]">₹0 <span className="text-sm font-semibold text-[#4E586B]">per click</span></p>
                  <p className="mt-3 text-sm leading-7">Eligible hotel rates and bookable landing pages can be displayed without paying Google for each click. Visibility is not bought through a hotel ad bid.</p>
                </div>
                <div className="rounded-2xl border border-[#FFC7AA] bg-[#FFF2EA] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#B5461A]">Paid hotel booking opportunity</p>
                  <h3 className="mt-3 text-xl font-bold text-primary2">Google Hotel Ads</h3>
                  <p className="mt-4 text-3xl font-extrabold text-[#B5461A]">Paid <span className="text-sm font-semibold text-[#4E586B]">campaign</span></p>
                  <p className="mt-3 text-sm leading-7">A linked Google Ads account enables eligible paid hotel advertising, with campaign controls, bidding, spend and performance measurement.</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#555E70]">Hotels can evaluate free booking links first and then consider paid advertising where the economics of direct bookings justify it.</p>
            </section>

            <section className="mt-12" id="common-errors">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Common mistakes to avoid</h2>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-[16px] leading-8">
                <li><strong>Entering the wrong ID:</strong> The Google Ads linking form asks for the <em>Hotel Center Account ID</em>, not the hotel property&apos;s listing ID.</li>
                <li><strong>Leaving the request pending:</strong> An Hotel Center owner must approve the link; clicking Send alone is not enough.</li>
                <li><strong>Assuming rates flow automatically:</strong> The price feed must be properly connected and accurate.</li>
                <li><strong>Linking the wrong property set:</strong> Select all hotels or only the intended hotels when approving access.</li>
                <li><strong>Skipping conversion tracking:</strong> Measure completed bookings and booking value instead of relying only on ad clicks.</li>
                <li><strong>Expecting instant availability:</strong> Allow for the campaign type to appear, and check campaign eligibility separately.</li>
              </ul>
            </section>

            <section className="mt-12" id="fielmente-help">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">How Fielmente helps hotels set up Google Hotel Ads</h2>
              <p className="mt-4 text-[17px] leading-8">Fielmente works with hotel owners and connectivity partners to check Google Hotel Center access, property matching, booking-engine readiness, the Google Ads link, tracking and direct-booking campaign performance. The aim is not merely to connect two accounts—it is to make sure the resulting booking journey can be measured and improved.</p>
              <p className="mt-3 text-[17px] leading-8">Explore our <Link href="/google-hotel-ads-agency/" className="font-semibold text-[#0D54EB] underline">Google Hotel Ads management</Link> and <Link href="/google-hotel-center/" className="font-semibold text-[#0D54EB] underline">Hotel Center setup</Link> services for more details.</p>
            </section>

            <section className="mt-12" id="faq">
              <h2 className="text-2xl font-bold text-primary2 md:text-3xl">Frequently asked questions</h2>
              <div className="mt-5 divide-y divide-[#E6E4EF] rounded-2xl border border-[#E6E4EF]">
                {faqs.map((f) => (
                  <details key={f.q} className="group px-5 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-primary2">{f.q}<span aria-hidden="true" className="text-xl text-[#F26633] group-open:rotate-45">+</span></summary>
                    <p className="mt-3 text-[15px] leading-7 text-[#555E70]">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-5" id="sources">
              <h2 className="text-lg font-bold text-primary2">Official documentation and references</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
                <li><a href="https://support.google.com/google-ads/answer/7663773?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0D54EB] underline">Google Ads Help: Link Hotel Center and Google Ads</a></li>
                <li><a href="https://support.google.com/google-ads/answer/13073106?hl=en" target="_blank" rel="noopener noreferrer" className="text-[#0D54EB] underline">Google Ads Help: Set up Hotel campaign accounts and price feeds</a></li>
              </ul>
              <p className="mt-3 text-xs text-[#687082]">Guide reviewed 7 November 2026. Google may rename interface controls or change eligibility; confirm your account view before proceeding.</p>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <nav aria-label="On this page" className="rounded-2xl border border-[#E6E4EF] bg-[#FAFAFD] p-5">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#5F6776]">On this page</p>
                {[
                  ["#what-is-hotel-center", "What is Hotel Center?"],
                  ["#data-flow", "How the data flows"],
                  ["#requirements", "Before you begin"],
                  ["#link-steps", "Link through Data Manager"],
                  ["#hotel-ads-vs-free-links", "Free vs paid links"],
                  ["#common-errors", "Common mistakes"],
                  ["#faq", "FAQs"],
                ].map(([href, label]) => <a key={href} href={href} className="block rounded-lg px-2 py-2 text-sm text-[#444D60] hover:bg-white hover:text-[#0D54EB]">{label}</a>)}
              </nav>
              <div className="rounded-2xl bg-primary2 p-6 text-white">
                <p className="text-xl font-bold leading-snug">Need help with your hotel&apos;s Google Ads connection?</p>
                <p className="mt-3 text-sm leading-6 text-white/75">Our hospitality marketing team can assess account access, feed readiness and direct-booking measurement.</p>
                <div className="mt-5"><CtaBtn type="button" label="Get a Free Consultation" className="rounded-full border-none bg-orange-primary text-white" /></div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 rounded-3xl bg-primary2 p-7 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-12">
          <div><h2 className="max-w-xl text-2xl font-bold md:text-3xl">Turn hotel visibility into measurable direct bookings.</h2><p className="mt-3 max-w-2xl text-white/75">Talk to Fielmente about Hotel Center connectivity, Google Hotel Ads strategy and conversion tracking.</p></div>
          <div className="mt-6 shrink-0 md:mt-0"><CtaBtn type="button" label="Discuss My Hotel Ads" className="rounded-full border-none bg-orange-primary text-white md:text-lg" /></div>
        </div>
      </Container>
    </main>
  );
}
