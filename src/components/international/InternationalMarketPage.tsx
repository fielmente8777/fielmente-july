import Link from "next/link";
import Container from "@/components/sectionComponants/Container";
import LeadForm from "@/components/forms/LeadForm";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import { INTERNATIONAL_DIRECTORY, INTERNATIONAL_HUB, INTERNATIONAL_PAGES, type InternationalMarket, internationalLabel, internationalParent, internationalPath, internationalRelated } from "@/lib/internationalMarkets";
import InternationalExperiencePreview from "@/components/international/InternationalExperiencePreview";

const SITE = "https://fielmente.com";
const SERVICES = [
  { title: "Hotel SEO and local search", body: "Useful property content, accurate listings and a clear path from discovery to the stay.", href: "/industries-we-serve/hotel-marketing-agency/hotel-seo/" },
  { title: "Google Ads for hotels", body: "Paid search and hotel campaigns connected to relevant offers and measurable booking goals.", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/" },
  { title: "Restaurant marketing", body: "Local discovery, original content and campaigns connected to reservations and private dining.", href: "/industries-we-serve/restaurant-marketing-agency/" },
  { title: "Hotel website development", body: "Clear room information and a mobile booking journey that works with your existing systems.", href: "/industries-we-serve/hotel-marketing-agency/hotel-website-development/" },
  { title: "Direct booking strategy", body: "Relevant room offers, useful guest information and a dependable path to your booking engine.", href: "/hotel-direct-booking-marketing-agency/" },
  { title: "Resort marketing", body: "Experience content and enquiry journeys for destination stays, retreats and celebrations.", href: "/industries-we-serve/resort-marketing-agency/" },
];
const CASES = [
  { title: "Naad Wellness", body: "See the published Google Ads case study for a wellness property in India.", href: "/case-study/naad-wellness-google-ads/" },
  { title: "EBC Mussoorie", body: "Explore the published campaign approach for a destination stay in India.", href: "/case-study/ebc-mussoorie-google-ads/" },
  { title: "Syah Udaipur", body: "Read the published TripAdvisor advertising case study for an Indian restaurant.", href: "/case-study/syah-udaipur-tripadvisor-ads/" },
];
const RESTAURANT_SERVICES = [
  {title:"Restaurant local SEO",body:"Accurate venue information and useful local content connected to menus and reservations.",href:"/industries-we-serve/restaurant-marketing-agency/restaurant-local-seo/"},
  {title:"Restaurant social media",body:"Original food, space and occasion content with a practical route to the next reservation.",href:"/industries-we-serve/restaurant-marketing-agency/restaurant-social-media/"},
  {title:"Restaurant Google Ads",body:"Focused campaigns linked to relevant dining occasions, available service periods and measurable enquiries.",href:"/industries-we-serve/restaurant-marketing-agency/restaurant-google-ads/"},
  {title:"Restaurant website development",body:"Current menus, clear venue information and a dependable mobile reservation journey.",href:"/industries-we-serve/restaurant-marketing-agency/restaurant-website-development/"},
];
const NEEDS = ["More direct room bookings", "Hotel SEO and local search", "Google Ads and Hotel Ads", "Restaurant reservations", "Group and event enquiries", "Website and booking journey", "A complete marketing plan"];

export default function InternationalMarketPage({ market: m }: { market: InternationalMarket }) {
  const parent = internationalParent(m);
  const cities = INTERNATIONAL_PAGES.filter(p => p.parentHref === internationalPath(m));
  const related = internationalRelated(m);
  const url = SITE + internationalPath(m);
  const restaurant = m.sector === "restaurant";
  const services = restaurant ? RESTAURANT_SERVICES : m.sector === "hotel" ? SERVICES.filter(s => s.title !== "Restaurant marketing") : SERVICES;
  const caseStudies = restaurant ? CASES.filter(c => c.title === "Syah Udaipur") : CASES;
  const needs = restaurant ? ["More table reservations", "Local SEO and Google Maps", "Social media and food content", "Private dining and events", "Restaurant website", "A complete restaurant marketing plan"] : m.sector === "hotel" ? NEEDS.filter(n => n !== "Restaurant reservations") : NEEDS;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "International hotel marketing", href: INTERNATIONAL_HUB },
    { label: "Countries and destinations", href: INTERNATIONAL_DIRECTORY },
    ...(parent ? [{ label: parent.name, href: parent.href }] : []),
    { label: m.name, href: internationalPath(m) },
  ];
  const schema = [
    { "@context": "https://schema.org", "@type": "Service", name: `${restaurant ? "Restaurant" : m.sector === "hotel" ? "Hotel and resort" : "Hotel and restaurant"} marketing in ${m.name}`, serviceType: "Hospitality digital marketing", url, description: m.description,
      areaServed: { "@type": m.kind === "country" || m.sector !== "hospitality" ? "Country" : ["region", "province", "destination"].includes(m.kind) ? "AdministrativeArea" : "City", name: m.name, ...(m.kind === "country" || m.sector !== "hospitality" ? {} : { containedInPlace: { "@type": "Country", name: m.country } }) },
      provider: { "@type": "Organization", name: "Fielmente", url: SITE + "/" },
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Hospitality marketing services", itemListElement: services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: SITE + s.href } })) },
    },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.label, item: c.href.startsWith("https://") ? c.href : SITE + c.href })) },
  ];
  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <section className="bg-primary2 pt-24 pb-14 text-white md:pt-32 md:pb-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-x-2 gap-y-1 text-sm text-white/75">{crumbs.map((c, i) => <span className="inline-flex items-center gap-2" key={c.href}>{i > 0 && <span aria-hidden="true">/</span>}{i === crumbs.length - 1 ? <span aria-current="page">{c.label}</span> : <Link className="underline underline-offset-4 hover:text-white" href={c.href}>{c.label}</Link>}</span>)}</nav>
          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="lg:pt-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">International hospitality marketing · {m.country}</p>
              <h1 className="mt-5 max-w-3xl text-[34px] leading-[1.08] font-bold tracking-tight md:text-[50px]">{restaurant ? "Restaurant & café" : m.sector === "hotel" ? "Hotel & resort" : "Hotel & restaurant"} marketing in {m.name}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#C9C7DD]">{m.intro}</p>
              <ul className="mt-7 flex flex-col gap-3 text-[15px] leading-relaxed"><li>SEO, paid campaigns and a clearer direct booking journey</li><li>{restaurant ? "Reservations, private dining and repeat visits" : "Bookings and qualified enquiries measured by business purpose"}</li><li>An international team with communication hours agreed for your property</li></ul>
              <div className="mt-8 flex flex-wrap gap-3"><a href="#local-priorities" className="inline-flex min-h-12 items-center rounded-full border border-white/40 px-5 py-3 font-semibold hover:border-orange-primary">Explore the local plan</a><WhatsAppChatButton label="Discuss your property" /></div>
            </div>
            <div id="plan" className="scroll-mt-28 rounded-3xl bg-white p-5 text-primary2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] md:p-7"><LeadForm pageKeyword={`International ${m.sector} marketing: ${m.name}`} title={`Plan your ${m.name} marketing`} body="Share your property and the business you want to grow. We’ll review the fit and discuss a practical scope." defaultCountryCode={m.code} defaultCountry={m.country === "Canada" ? "CAN" : undefined} needs={needs} idPrefix={`international-${m.path.replaceAll("/", "-")}`} /></div>
          </div>
        </Container>
      </section>
      <section id="local-priorities" className="scroll-mt-24 py-14 md:py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">The guest journey</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">Start with the stay your {m.name} property can sell</h2>
          <p className="mt-6 max-w-4xl leading-relaxed text-[#55536E]">{m.context}</p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">{m.actions.map((a, i) => <article key={a.title} className="rounded-2xl border border-[#E4E3EC] p-6"><p className="text-sm font-bold text-orange-primary">0{i + 1}</p><h3 className="mt-3 text-xl font-bold">{a.title}</h3><p className="mt-4 text-sm leading-relaxed text-[#55536E]">{a.body}</p></article>)}</div>
          <p className="mt-7 max-w-4xl text-sm leading-relaxed text-[#55536E]">These are planning priorities, not a forecast of your property’s results. We refine the scope using your booking patterns, room availability, guest value and enquiry quality.</p>
        </Container>
      </section>
      {cities.length > 0 && <section className="border-y border-[#E4E3EC] bg-[#F5F5F9] py-10"><Container><h2 className="text-2xl font-bold">Related service plans for {m.name}</h2><p className="mt-3 max-w-3xl leading-relaxed text-[#55536E]">Explore the city page for a more specific discussion of neighborhood positioning, guest decisions and campaign priorities.</p><ul className="mt-5 flex flex-wrap gap-3">{cities.map((c) => <li key={c.path}><Link href={internationalPath(c)} className="inline-flex rounded-full border border-[#CFCDDC] bg-white px-5 py-3 font-semibold hover:border-orange-primary hover:text-orange-primary">{internationalLabel(c)} <span aria-hidden="true" className="ml-3">↗</span></Link></li>)}</ul></Container></section>}
      <section className="bg-[#F5F5F9] py-14 md:py-20">
        <Container><h2 className="max-w-3xl text-3xl font-bold md:text-4xl">Connect local demand to the right service</h2><p className="mt-5 max-w-4xl leading-relaxed text-[#55536E]">{restaurant ? "Connect local food discovery and original venue content to a reservation route your team can maintain. Keep table bookings, private dining and repeat visits clear in the plan and reporting." : "Choose the services that fit the property and its guests. Keep room bookings, dining reservations and group enquiries distinct so each team can respond usefully and measure business value."}</p><ul className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <li key={s.href}><Link href={s.href} className="block h-full rounded-2xl border border-[#E4E3EC] bg-white p-6 hover:border-orange-primary"><h3 className="text-lg font-bold">{s.title} <span aria-hidden="true">↗</span></h3><p className="mt-3 text-sm leading-relaxed text-[#55536E]">{s.body}</p></Link></li>)}</ul></Container>
      </section>
      <section className="py-14 md:py-20"><Container><h2 className="text-3xl font-bold md:text-4xl">How we agree a useful growth plan</h2><ol className="mt-8 grid gap-6 md:grid-cols-3"><li><h3 className="text-xl font-bold">1. Understand the property</h3><p className="mt-3 leading-relaxed text-[#55536E]">Review the rooms or dining experience, actual guest mix, booking systems and dates that need demand.</p></li><li><h3 className="text-xl font-bold">2. Choose the first work</h3><p className="mt-3 leading-relaxed text-[#55536E]">Agree relevant pages, offers and channels, with clear ownership for enquiries and a reliable booking route.</p></li><li><h3 className="text-xl font-bold">3. Review business outcomes</h3><p className="mt-3 leading-relaxed text-[#55536E]">Compare qualified leads, reservations and booking value. Adjust the plan using results your team can verify.</p></li></ol></Container></section>
      <InternationalExperiencePreview compact />
      <section className="bg-primary2 py-14 text-white md:py-20"><Container><p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">Published hospitality work</p><h2 className="mt-4 text-3xl font-bold md:text-4xl">See how we approach the work</h2><p className="mt-5 max-w-3xl leading-relaxed text-white/80">These published case studies are from properties in India. Explore the approach alongside our named international client references and review the work relevant to your property.</p><ul className="mt-8 grid gap-4 md:grid-cols-3">{caseStudies.map((c) => <li key={c.href}><Link className="block h-full rounded-2xl border border-white/20 p-6 hover:border-orange-primary" href={c.href}><h3 className="text-xl font-bold">{c.title} <span aria-hidden="true">↗</span></h3><p className="mt-3 text-sm leading-relaxed text-white/75">{c.body}</p></Link></li>)}</ul></Container></section>
      <section className="py-14 md:py-20"><Container><h2 className="text-3xl font-bold">Questions about marketing in {m.name}</h2><div className="mt-8 max-w-4xl divide-y divide-[#E4E3EC] border-y border-[#E4E3EC]">{[
        { q: m.faq.question, a: m.faq.answer },
        { q: `Do you have an office in ${m.name}?`, a: "Our published office is in Gurugram, India. We serve international properties through a shared team and agree communication hours, responsibilities and any local content-production arrangements before work begins. This page describes service coverage." },
        { q: "What should we share for a useful first discussion?", a: "Share the property website, actual location, accommodation or dining offer, business goals and the dates or segments you want to grow. Existing booking and campaign information helps us prioritize a realistic scope." },
      ].map((f) => <details key={f.q} className="group py-5"><summary className="cursor-pointer pr-5 text-lg font-semibold leading-snug">{f.q}</summary><p className="mt-4 max-w-3xl leading-relaxed text-[#55536E]">{f.a}</p></details>)}</div></Container></section>
      <section className="bg-[#F5F5F9] py-12"><Container><h2 className="text-2xl font-bold">Continue exploring</h2><ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">{parent && <li><Link href={parent.href} className="font-semibold text-sapphireBlue underline underline-offset-4">{parent.name} marketing</Link></li>}{related.map((r) => <li key={r.href}><Link href={r.href} className="font-semibold text-sapphireBlue underline underline-offset-4">{r.name}</Link></li>)}<li><Link href={INTERNATIONAL_DIRECTORY} className="font-semibold text-sapphireBlue underline underline-offset-4">All countries and destinations</Link></li></ul><div className="mt-8 flex flex-wrap gap-4"><a href="#plan" className="rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-glaucous-3">Discuss your {m.name} property</a><Link href={INTERNATIONAL_HUB} className="rounded-full border border-primary2 px-6 py-3 font-semibold hover:text-orange-primary">Our international marketing approach</Link></div></Container></section>
      <section className="border-t border-[#E4E3EC] py-9"><Container><h2 className="text-lg font-bold">Local planning resource</h2><p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#55536E]">Use the <a href={m.source.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-sapphireBlue underline underline-offset-4">{m.source.label}</a> for current destination and visitor information. The campaign priorities above are Fielmente’s recommendations and do not imply a tourism-board partnership or endorsement.</p></Container></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
