import Link from "next/link";
import Container from "@/components/sectionComponants/Container";
import { INTERNATIONAL_EXPERIENCE, INTERNATIONAL_HUB, INTERNATIONAL_REFERENCES } from "@/lib/internationalMarkets";

export default function InternationalExperiencePreview({ compact = false }: { compact?: boolean }) {
  return (
    <section className="border-y border-[#E4E3EC] bg-white py-12 md:py-16">
      <Container>
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-primary">International hospitality experience</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold text-primary2 md:text-4xl">Hospitality work across borders</h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#55536E]">Our published international client references include hospitality businesses in Australia, Spain, Canada, France, Nepal and Sri Lanka. Explore the named references and the way we plan services for different destinations.</p>
        {!compact && <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{INTERNATIONAL_REFERENCES.map(r => <li key={r.name} className="rounded-xl border border-[#E4E3EC] p-5"><p className="text-xs font-semibold uppercase tracking-wide text-orange-primary">{r.country}</p><h3 className="mt-2 font-bold text-primary2">{r.name}</h3><p className="mt-2 text-sm text-[#55536E]">{r.location}</p></li>)}</ul>}
        <div className="mt-7 flex flex-wrap gap-4"><Link className="rounded-full bg-orange-primary px-6 py-3 font-semibold text-white hover:bg-glaucous-3" href={INTERNATIONAL_EXPERIENCE}>Explore our international experience</Link><Link className="rounded-full border border-primary2 px-6 py-3 font-semibold text-primary2 hover:text-orange-primary" href={INTERNATIONAL_HUB}>International marketing services</Link></div>
      </Container>
    </section>
  );
}
