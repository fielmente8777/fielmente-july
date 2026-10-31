import Link from "next/link";
import Container from "@/components/sectionComponants/Container";
import { US_CITIES, US_DIRECTORY, US_HUB, US_REGIONS, US_STATES, usCitiesFor, usPath } from "@/lib/usMarkets";

const SITE = "https://fielmente.com";
export const US_DIRECTORY_TITLE = "USA Hotel Marketing Locations: States & Cities | Fielmente";
export const US_DIRECTORY_DESCRIPTION = "Explore hotel and restaurant marketing across all 50 US states and 32 city markets, with local campaign priorities, relevant services and direct enquiry forms.";

export default function USLocationDirectory() {
  const dc = US_CITIES.find((m) => m.slug === "washington-dc")!;
  const schema = {
    "@context": "https://schema.org", "@type": "CollectionPage", name: US_DIRECTORY_TITLE, url: `${SITE}${US_DIRECTORY}`, inLanguage: "en-US",
    mainEntity: { "@type": "ItemList", itemListElement: [...US_STATES, dc].map((m, i) => ({ "@type": "ListItem", position: i + 1, name: m.name, url: `${SITE}${usPath(m)}` })) },
  };
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "USA hotel marketing", item: SITE + US_HUB },
    { "@type": "ListItem", position: 3, name: "US states and cities", item: SITE + US_DIRECTORY },
  ] };
  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <section className="bg-primary2 pt-28 pb-16 text-white md:pt-36 md:pb-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-white/75"><Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span><Link href={US_HUB} className="underline underline-offset-4">USA hotel marketing</Link><span aria-hidden="true">/</span><span aria-current="page">States and cities</span></nav>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">Hospitality marketing · United States</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">A marketing plan for the place your guests choose</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">A city hotel, a coastal resort and a mountain lodge need different reasons to book. Find your state or city for practical guest journeys, campaign priorities and an enquiry route suited to your property.</p>
          <dl className="mt-9 flex flex-wrap gap-x-12 gap-y-6"><div><dt className="text-sm text-white/70">State guides</dt><dd className="mt-1 text-4xl font-bold">50</dd></div><div><dt className="text-sm text-white/70">Dedicated city pages</dt><dd className="mt-1 text-4xl font-bold">32</dd></div><div><dt className="text-sm text-white/70">Property focus</dt><dd className="mt-2 text-lg font-semibold">Hotels · Resorts · Restaurants</dd></div></dl>
        </Container>
      </section>
      <section className="border-b border-[#E4E3EC] py-7">
        <Container><nav aria-label="Browse US regions" className="flex flex-wrap items-center gap-3"><span className="mr-2 font-semibold">Find your state</span>{US_REGIONS.map((r) => <a href={`#${r.toLowerCase()}`} key={r} className="rounded-full border border-[#CFCDDC] px-4 py-2 text-sm font-medium hover:border-orange-primary hover:text-orange-primary">{r}</a>)}<Link href={usPath(dc)} className="rounded-full border border-[#CFCDDC] px-4 py-2 text-sm font-medium hover:border-orange-primary hover:text-orange-primary">Washington, DC</Link></nav></Container>
      </section>
      {US_REGIONS.map((region, index) => (
        <section key={region} id={region.toLowerCase()} className={`scroll-mt-28 py-14 md:py-20 ${index % 2 ? "bg-[#F5F5F9]" : "bg-white"}`}>
          <Container>
            <h2 className="text-3xl font-bold">{region}</h2>
            <ul className="mt-8 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
              {US_STATES.filter((m) => m.region === region).map((m) => (
                <li key={m.slug} className="h-full rounded-2xl border border-[#E4E3EC] bg-white p-6">
                  <h3 className="text-xl font-bold"><Link href={usPath(m)} className="underline decoration-orange-primary/60 underline-offset-4 hover:text-orange-primary">{m.name}</Link></h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#55536E]">{m.description}</p>
                  {usCitiesFor(m).length > 0 && <div className="mt-5"><p className="text-xs font-semibold uppercase tracking-wide text-[#55536E]">City pages</p><ul className="mt-2 flex flex-wrap gap-x-4 gap-y-2">{usCitiesFor(m).map((c) => <li key={c.slug}><Link href={usPath(c)} className="text-sm font-semibold text-sapphireBlue underline underline-offset-4 hover:text-orange-primary">{c.name}</Link></li>)}</ul></div>}
                  <Link href={usPath(m)} className="mt-5 inline-block text-sm font-semibold text-sapphireBlue hover:text-orange-primary">Explore {m.name} marketing <span aria-hidden="true">↗</span></Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}
      <section className="bg-primary2 py-14 text-white md:py-20"><Container><h2 className="text-3xl font-bold">The District of Columbia</h2><p className="mt-5 max-w-3xl leading-relaxed text-white/80">Washington, DC is listed separately from the 50 states. Its guide explains city stays, meetings and accurate metro-area positioning.</p><Link href={usPath(dc)} className="mt-6 inline-flex rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-glaucous-3">Explore Washington, DC</Link></Container></section>
      <section className="py-14 md:py-20"><Container><h2 className="text-3xl font-bold">Start with your property, then choose the channels</h2><p className="mt-5 max-w-3xl leading-relaxed text-[#55536E]">We serve US properties through an international team. These pages describe service coverage; our published office is in Gurugram, India. Share your property, location and booking goals so we can agree the right services, communication hours and delivery arrangements.</p><div className="mt-7 flex flex-wrap gap-4"><Link href={US_HUB + "#plan"} className="rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-glaucous-3">Discuss your US property</Link><Link href="/case-study/" className="rounded-full border border-primary2 px-6 py-3 font-semibold hover:text-orange-primary">See published case studies</Link></div></Container></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, crumbs]).replace(/</g, "\\u003c") }} />
    </main>
  );
}
