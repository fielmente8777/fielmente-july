import { LogoSet } from "@/@types/@agencyPageType";
import Container from "@/components/sectionComponants/Container";
import LogoMarquee from "@/components/slider/LogoMarquee";
import { COMPANY, allClientLogos } from "@/utils/agencyData";

interface ClientLogosSectionProps {
  /** Which client group to show first (hotels, resorts, restaurants, travel, international). */
  set?: LogoSet;
}

// Client logo strip: every client logo, in two scrolling rows, with the page's own group first.
// Logos and company facts live in src/utils/agencyData.ts and src/utils/client.ts.
const ClientLogosSection: React.FC<ClientLogosSectionProps> = ({ set = "hotels" }) => {
  const logos = allClientLogos(set).map((l) => ({ src: l.src, alt: l.name, background: l.bg ?? "#FFFFFF" }));
  const half = Math.ceil(logos.length / 2);
  const perView = { base: 3, md: 5, lg: 7, xl: 8 };
  return (
    <section aria-labelledby="client-logos-title" className="border-b border-[#E4E3EC] py-10 md:py-12">
      <Container>
        <p id="client-logos-title" className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6886]">
          {logos.length}+ hospitality brands we&apos;ve worked with
        </p>
      </Container>
      <div className="space-y-3">
        <LogoMarquee items={logos.slice(0, half)} perView={perView} itemClassName="border border-[#EDECF3]" />
        <LogoMarquee items={logos.slice(half)} perView={perView} itemClassName="border border-[#EDECF3]" wrapperClassName="logo-marquee-reverse" />
      </div>
      <Container>
        <p className="mt-6 text-center text-sm text-[#55536E]">
          {COMPANY.partners.join(" · ")} · Clients in {COMPANY.countries.slice(0, -1).join(", ")} and {COMPANY.countries.at(-1)}
        </p>
      </Container>
    </section>
  );
};

export default ClientLogosSection;
