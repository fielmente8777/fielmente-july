import Container from "@/components/sectionComponants/Container";
import { PARTNERS } from "@/lib/products";
import Image from "next/image";

interface PartnerStripSectionProps {
  title?: string;
}

// Partner and integration logos (same list as the product pages: PARTNERS in src/lib/products.ts).
const PartnerStripSection: React.FC<PartnerStripSectionProps> = ({ title = "Official partners and integrations" }) => {
  return (
    <section aria-label={title} className="border-b border-[#E4E3EC] py-8 md:py-10">
      <Container>
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6886]">{title}</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5 md:gap-x-12">
          {PARTNERS.map((p) => (
            <li key={p.src} className="relative h-8 w-24 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition">
              <Image src={p.src} alt={p.alt} fill sizes="96px" className="object-contain" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PartnerStripSection;
