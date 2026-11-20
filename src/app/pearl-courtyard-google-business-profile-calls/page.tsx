import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const SITE = "https://fielmente.com";
const PATH = "/pearl-courtyard-google-business-profile-calls/";
const TITLE = "Pearl Courtyard Varanasi: Why We Sent Hotel Demand to Google Maps, Not Another Landing Page";
const DESCRIPTION = "Inside Fielmente's call-first Google Ads strategy for Pearl Courtyard Varanasi: strong Google reviews, location assets, call goals and management-reported sold-out nights.";

export const metadata: Metadata = {
  title: "Pearl Courtyard Varanasi Google Ads & Maps Strategy | Fielmente",
  description: DESCRIPTION,
  alternates: { canonical: SITE + PATH },
  openGraph: {
    title: TITLE, description: DESCRIPTION, url: SITE + PATH,
    type: "article", siteName: "Fielmente", locale: "en_IN",
    images: [{ url: "/images/blog/pearl-courtyard-gbp-calls.svg", width: 1200, height: 630, alt: "Call-first Google Ads strategy for Pearl Courtyard Varanasi" }],
  },
};

const steps = [
  { number: "01", name: "Audit the assets", detail: "We evaluated the existing website, prior landing-page funnel, Google Ads goals and the hotel's much stronger Google Business Profile." },
  { number: "02", name: "Choose the strongest proof", detail: "The hotel's established review footprint, 4.4 rating and photo-rich Maps listing could build confidence before a guest ever opened a separate page." },
  { number: "03", name: "Reorient Google Ads", detail: "We moved the strategy toward relevant local intent, Business Profile-linked location experiences, phone-first ad interactions and call-oriented conversion goals." },
  { number: "04", name: "Remove an unnecessary step", detail: "For this setup we did not rely on a standalone landing page or Google Tag Manager to measure website events. The priority was a shorter path to a phone enquiry." },
  { number: "05", name: "Watch operational outcomes", detail: "We compared call demand with front-desk enquiries, occupancy and management-reported revenue rather than declaring a website click a booking." },
];

const lessons = [
  ["Website-first", "Useful when guests need package details, a direct booking engine, rich room comparisons, a form or measurable on-site actions."],
  ["Landing-page-first", "Useful when a specific offer, destination wedding, retreat or conversion proposition needs focused explanation."],
  ["Business Profile + calls", "Useful when local search intent is high, the listing already has credible reviews and photographs, and the reservation desk can close enquiries quickly."],
];

export default function PearlCourtyardStrategyBlog() {
  const url = SITE + PATH;
  const articleLd = {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: TITLE,
    description: DESCRIPTION, url, mainEntityOfPage: url, datePublished: "2026-11-21",
    image: SITE + "/images/blog/pearl-courtyard-gbp-calls.svg",
    author: { "@type": "Organization", name: "Fielmente", url: SITE },
    publisher: { "@type": "Organization", name: "Fielmente", logo: { "@type": "ImageObject", url: SITE + "/fielmente_logo.png" } },
    about: ["Hotel Google Ads", "Google Business Profile", "Hotel direct phone enquiries", "Pearl Courtyard Varanasi"],
  };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Hospitality marketing blog", item: SITE + "/blogs/" },
    { "@type": "ListItem", position: 3, name: "Pearl Courtyard Varanasi strategy", item: url },
  ] };
  return <main className="bg-white text-[#292541]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <section className="bg-[#17143f] text-white">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-32 md:pb-20 md:pt-40">
        <nav className="text-sm text-white/65"><Link href="/blogs/" className="hover:text-white">Fielmente Blog</Link><span className="mx-2">/</span>Hotel Google Ads</nav>
        <p className="mt-9 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9568]">Strategy breakdown · Varanasi hotel marketing · 21 November 2026</p>
        <h1 className="mt-5 max-w-5xl text-4xl font-extrabold leading-tight md:text-6xl">When the Google Business Profile Is Stronger Than the Landing Page, Change the Strategy.</h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-white/80">The Pearl Courtyard, Varanasi story: how Fielmente shifted attention from website visits to Google Maps credibility and real phone conversations — and what the hotel management reported next.</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm"><Link href="/case-study/pearl-courtyard-varanasi-google-business-profile-calls/" className="rounded-full bg-[#f86a36] px-6 py-3 font-semibold text-white hover:bg-[#df5726]">Read the full case study</Link><a href="https://pearlcourtyard.com/" rel="noopener noreferrer" target="_blank" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">Explore the hotel</a></div>
      </div>
    </section>
    <div className="mx-auto max-w-6xl px-5">
      <div className="-mt-6 overflow-hidden rounded-3xl border border-[#e7e3ee] bg-[#17143f] shadow-xl md:-mt-9"><Image src="/images/blog/pearl-courtyard-gbp-calls.svg" alt="Fielmente's campaign flow from search and Maps through hotel reviews to direct phone enquiries, with results marked management-reported" width={1200} height={630} priority sizes="(max-width: 1200px) 100vw, 1200px" className="block h-auto w-full" /></div>
      <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_295px] lg:py-20">
        <article className="max-w-3xl space-y-11 text-[17px] leading-8 text-[#49465c]">
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">A powerful marketing asset was being underused</h2>
            <p>When Pearl Courtyard approached Fielmente, the earlier agency had been using a familiar setup: website traffic, a standalone landing page and Google Tag Manager-based website tracking. Those tools are not inherently wrong. But the hotel's team reported that direct phone enquiries were falling, while the campaign remained focused on bringing users to web pages.</p>
            <p>Our first question was not “Which landing page should we build?” It was <strong>“Which digital touchpoint gives a potential guest the most confidence to call and book?”</strong></p>
            <p>Pearl Courtyard is a <strong>54-room boutique hotel with seven room categories</strong> near Kashi Vishwanath Dham in Varanasi. Its official website describes Victorian-inspired architecture, modern rooms and a central location near the city's pilgrimage attractions. For an intent-led destination like Varanasi, searchers often want immediate reassurance on location, photographs, guest experience and how to contact the hotel. <a href="https://pearlcourtyard.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#d65b2b] underline">Source: Pearl Courtyard's official website</a>.</p>
          </section>
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">The overlooked strength: reviews, reputation and real hotel photos</h2>
            <p>At the time of our audit, the Fielmente team reported seeing a <strong>4.4-star Google rating and approximately 4,600 reviews</strong> on Pearl Courtyard's Google Business Profile. The listing was also supported by useful hotel photographs. These are the review figures from the team's campaign account at the time, not a real-time count; Google ratings and review totals change.</p>
            <p>This was a meaningful difference. A website or landing page can explain a property beautifully, but a well-established Google Maps listing also shows the lived experiences of thousands of guests. The key was to reduce friction between that credibility and an enquiry to the hotel's reservation desk.</p>
            <div className="grid gap-4 sm:grid-cols-3">{[{n:"4.4/5",t:"Google rating at audit"},{n:"~4,600",t:"Reviews reported at audit"},{n:"54",t:"Rooms on the official site"}].map(x=><div key={x.t} className="rounded-2xl border border-[#e6e3ed] bg-[#faf9fc] p-5"><p className="text-3xl font-extrabold text-[#17143f]">{x.n}</p><p className="mt-2 text-sm font-medium leading-5 text-[#686278]">{x.t}</p></div>)}</div>
          </section>
          <section className="space-y-6"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">What we changed in the advertising approach</h2>
            <div className="space-y-4">{steps.map(x=><div key={x.number} className="flex gap-5 rounded-2xl border border-[#ebe8ef] p-5"><span className="shrink-0 text-2xl font-extrabold text-[#ed6935]">{x.number}</span><div><h3 className="text-xl font-bold text-[#17143f]">{x.name}</h3><p className="mt-2 leading-7">{x.detail}</p></div></div>)}</div>
            <p>Google Ads supports <a href="https://support.google.com/google-ads/answer/2404182" target="_blank" rel="noopener noreferrer" className="text-[#d65b2b] underline">location assets linked to Google Business Profile</a> and <a href="https://support.google.com/google-ads/answer/6100664" target="_blank" rel="noopener noreferrer" className="text-[#d65b2b] underline">call conversion actions</a>. Local actions such as call clicks can be considered as campaign goals where eligible and relevant. Not every click necessarily opens the Business Profile, and call tracking must be configured correctly; this is a strategy-level description, not an assertion about an unverified individual ad format.</p>
          </section>
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">What happened after the switch?</h2>
            <p>According to the Pearl Courtyard team, before this change the hotel had been seeing roughly <strong>₹20,000–₹50,000 in daily business</strong>. Following the call-first strategy shift, management reported <strong>four to five consecutive sold-out nights</strong> and <strong>approximately ₹4–6 lakh in daily revenue</strong> during the strongest reported days.</p>
            <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-[#17143f] p-7 text-white"><p className="text-sm font-semibold text-white/70">Before · management estimate</p><p className="mt-3 text-3xl font-extrabold">₹20K–₹50K</p><p className="mt-3 text-sm text-white/80">Typical daily business described by the team</p></div><div className="rounded-2xl bg-[#f86a36] p-7 text-white"><p className="text-sm font-semibold text-white/80">After · reported peak days</p><p className="mt-3 text-3xl font-extrabold">₹4L–₹6L</p><p className="mt-3 text-sm text-white/90">Daily hotel revenue during the strongest period described</p></div></div>
            <p><strong>Important context:</strong> These figures are hotel-management reports shared with Fielmente, not independently audited Google Ads-attributed revenue. Occupancy and revenue may also reflect demand, room rates, seasonality, organic enquiries, repeat guests and other channels. We are not presenting a controlled before-and-after experiment or claiming every sale came from paid advertising.</p>
          </section>
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">Why removing Google Tag Manager was not the lesson</h2>
            <p>The success here was <em>not</em> “GTM is bad” or “hotels should never use landing pages.” Google Tag Manager is useful for managing on-site events. We simply chose not to make website tagging the centre of this particular conversion path when the higher-value action was a conversation by phone.</p>
            <p>Google Ads can report calls from eligible ad interactions using call assets, call reporting and conversion configuration; that is different from tracking a phone number clicked on a website. In a calls-led campaign, the reservation team still needs to answer promptly, qualify enquiries and reconcile calls to real bookings. <a href="https://support.google.com/google-ads/answer/2453991/" className="text-[#d65b2b] underline" target="_blank" rel="noopener noreferrer">Google Ads documentation on call assets</a>.</p>
          </section>
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">The real strategic decision: where should the next click go?</h2>
            <p>Different properties have different strongest conversion assets. An attractive resort with complex packages may need a dedicated landing page. A hotel with an excellent booking engine may benefit from direct website traffic. A well-reviewed city hotel with call-ready reservations staff may win by reducing the journey to Maps trust and a call.</p>
            <div className="overflow-hidden rounded-2xl border border-[#e8e5f0]"><div className="grid grid-cols-[155px_1fr] bg-[#f2f0f8] px-5 py-3 text-sm font-bold text-[#17143f]"><span>Best-fit route</span><span>When to use it</span></div>{lessons.map((x,i)=><div key={x[0]} className={"grid grid-cols-[155px_1fr] gap-3 px-5 py-4 text-sm leading-6 "+(i===1?"bg-[#faf9fc]":"bg-white")}><strong className="text-[#17143f]">{x[0]}</strong><span>{x[1]}</span></div>)}</div>
            <p><strong>Our principle:</strong> diagnose the business's strongest existing asset, select a meaningful conversion action and put budget behind the shortest trustworthy path to that action. A marketing stack should serve the booking objective, not the other way around.</p>
          </section>
          <section className="space-y-5"><h2 className="text-3xl font-bold leading-tight text-[#17143f]">How we would validate and scale the win</h2>
            <p>To establish sustained performance, the next measurement layer is straightforward: track eligible ad-attributed call clicks and completed calls, answer rate, qualified reservation enquiries, booking confirmations, room nights and booking revenue. Compare like-for-like dates and account for seasonal peaks. We would retain the hotel's website and booking engine as alternatives for guests who prefer online booking, rather than declaring one channel universally superior.</p>
            <p>The Pearl Courtyard experience is a reminder that the highest-converting asset may already exist. Sometimes better marketing means not building another page — it means sending interested travellers to the trust signals and contact route most likely to help them book.</p>
          </section>
          <div className="rounded-2xl border-l-4 border-[#f86a36] bg-[#fbf8f4] p-6 text-sm leading-7"><strong className="text-[#17143f]">About this case:</strong> Property facts are drawn from <a href="https://pearlcourtyard.com/" target="_blank" rel="noopener noreferrer" className="underline">the official Pearl Courtyard website</a>. The Google review snapshot, earlier daily business, occupancy and later revenue figures were provided by the Fielmente team from hotel management conversations. Detailed Google Ads conversion exports and audited booking ledgers were not supplied for independent verification.</div>
        </article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-[#e8e5ee] bg-[#faf9fc] p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#ed6935]">The principle</p><p className="mt-4 text-2xl font-bold leading-snug text-[#17143f]">Optimise for bookings and real conversations — not the number of pages visited.</p><p className="mt-4 text-sm leading-6">A hotel website, landing page and Google Business Profile can each be the right choice. Match the route to the asset that earns trust fastest.</p></div>
          <div className="rounded-2xl bg-[#17143f] p-6 text-white"><p className="text-xl font-bold">Your hotel's highest-converting route may be different.</p><p className="mt-3 text-sm leading-7 text-white/80">Fielmente audits Maps, Search ads, call handling, landing pages and booking journeys before recommending a funnel.</p><Link href="/contact-us/" className="mt-6 inline-block rounded-full bg-[#f86a36] px-5 py-3 text-sm font-bold">Book a strategy consultation</Link></div>
          <Link href="/case-study/pearl-courtyard-varanasi-google-business-profile-calls/" className="block rounded-2xl border border-[#e8e5ee] p-6 font-semibold text-[#17143f] hover:border-[#f86a36]">See the Pearl Courtyard case study →</Link>
        </aside>
      </div>
    </div>
  </main>;
}
