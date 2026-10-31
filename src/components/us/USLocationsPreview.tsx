import Link from "next/link";
import Container from "@/components/sectionComponants/Container";
import { US_CITIES, US_DIRECTORY, US_PRIORITY_CITIES, usPath } from "@/lib/usMarkets";

export default function USLocationsPreview() {
  const markets = US_PRIORITY_CITIES.map((name) => US_CITIES.find((m) => m.name === name)!);
  return (
    <section className="bg-white py-14 md:py-20" aria-labelledby="us-locations-title">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">USA service locations</p>
        <h2 id="us-locations-title" className="mt-4 max-w-3xl text-3xl font-bold md:text-4xl">A local plan for your US property</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#55536E]">Explore all 50 state guides and dedicated pages for 32 city markets. Each explains the guest journeys, practical campaign choices and enquiry process relevant to a hotel, resort or restaurant in that location.</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((m) => <li key={m.slug}><Link className="flex h-full items-center justify-between gap-3 rounded-xl border border-[#E4E3EC] p-5 font-semibold text-primary2 hover:border-orange-primary hover:text-orange-primary" href={usPath(m)}>{m.name}<span aria-hidden="true">↗</span></Link></li>)}
        </ul>
        <Link href={US_DIRECTORY} className="mt-8 inline-flex rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-glaucous-3">Explore all US states and cities</Link>
      </Container>
    </section>
  );
}
