import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/sectionComponants/Container";
import { LOCAL_AGENCY_PAGES } from "../(agency)/data/india-locations";
import { INDIA_HOTEL_GUIDES } from "@/data/india-hotel-guides";

const url = "https://fielmente.com/hospitality-marketing-locations/";
const title = "Hospitality Marketing Locations in India | Fielmente";
const description = "Explore Fielmente’s hotel, resort and restaurant marketing services across Indian cities and states, with local context, relevant services and case studies.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", images: ["/fielmente_logo.png"] },
  robots: { index: true, follow: true },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: title, url,
    mainEntity: { "@type": "ItemList", itemListElement: LOCAL_AGENCY_PAGES.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.keyword, url: `https://fielmente.com/${p.slug}/` })) },
  };
  return (
    <main className="bg-white text-primary2">
      <section className="bg-primary2 pt-28 pb-16 md:pt-36 md:pb-20 text-white">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-7 text-sm text-white/70"><Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true"> / </span>India service locations</nav>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-primary">Local hospitality marketing</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">A marketing plan that understands your property and its location</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">Find the city or destination relevant to your hotel, resort or restaurant. Each page explains local guest journeys, practical campaign priorities and the services that support them.</p>
        </Container>
      </section>
      <section className="py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold">Cities and states we serve</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#55536E]">A city hotel and a destination resort need different content, offers and enquiry processes. Explore the relevant page, then share your property details so we can discuss a suitable scope.</p>
          <ul className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {LOCAL_AGENCY_PAGES.map((p) => <li key={p.slug} className="rounded-2xl border border-[#E4E3EC] p-6"><h3 className="text-xl font-semibold"><Link href={`/${p.slug}/`} className="underline decoration-orange-primary/50 underline-offset-4 hover:text-orange-primary">{p.navLabel}</Link></h3><p className="mt-3 text-sm leading-relaxed text-[#55536E]">{p.hero.lede}</p><Link href={`/${p.slug}/`} className="mt-5 inline-block font-semibold text-sapphireBlue">Explore {p.navLabel} services</Link></li>)}
          </ul>
        </Container>
      </section>
      <section className="bg-[#F5F5F9] py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold">Hotel marketing guides by market</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#55536E]">Practical reading for hotel owners and teams planning corporate stays, leisure packages, retreat groups or event enquiries.</p>
          <ul className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {INDIA_HOTEL_GUIDES.map((guide) => (
              <li key={guide.slug} className="rounded-2xl border border-[#E4E3EC] bg-white p-6">
                <p className="mb-3 text-sm font-semibold text-sapphireBlue">{guide.market}</p>
                <h3 className="text-xl font-semibold"><Link href={`/${guide.slug}/`} className="underline decoration-orange-primary/50 underline-offset-4 hover:text-orange-primary">{guide.title}</Link></h3>
                <p className="mt-3 text-sm leading-relaxed text-[#55536E]">{guide.description}</p>
                <Link href={`/${guide.slug}/`} className="mt-5 inline-block font-semibold text-sapphireBlue">Read the {guide.market} guide</Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="bg-[#F5F5F9] py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold">Work with the team behind the plan</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-[#55536E]">Fielmente serves properties across these locations. Our listed Gurugram office is the local office reference; these service-area pages do not represent a branch in every city. We agree meeting, content-production and campaign-delivery arrangements with each property.</p>
          <div className="mt-7 flex flex-wrap gap-4"><Link href="/contact-us/" className="rounded-full bg-orange-primary px-6 py-3 font-semibold text-white">Discuss your property</Link><Link href="/international-hotel-marketing-agency/" className="rounded-full border border-primary2 px-6 py-3 font-semibold">Explore international marketing</Link></div>
        </Container>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
