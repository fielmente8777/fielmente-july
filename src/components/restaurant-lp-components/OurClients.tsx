// "Trusted by" logo strip on the restaurant, Dubai restaurant and UK landing pages.
// Shows every client logo (src/utils/client.ts) in two scrolling rows, restaurants first.
import { Container, Section } from "@/components";
import LogoMarquee from "@/components/slider/LogoMarquee";
import { allClientLogos } from "@/utils/agencyData";

interface OurClientsProps {
  title: string;
  bold: string;
  /** Kept for the page data that still passes a short list; the strip now shows every client. */
  items?: { src: string; alt: string }[];
}

const OurClients: React.FC<OurClientsProps> = ({ title, bold }) => {
  const logos = allClientLogos("restaurants").map((l) => ({ src: l.src, alt: l.name, background: l.bg ?? "#FFFFFF" }));
  const half = Math.ceil(logos.length / 2);
  const perView = { base: 2.5, md: 4, lg: 6, xl: 7 };
  return (
    <Section>
      <Container>
        <h2 className="lg:text-3xl text-lg tracking-wider text-center text-primary2 helv">
          {title} <b className="text-orange-primary">{bold}</b>
        </h2>
      </Container>
      <div className="mt-8 space-y-3">
        <LogoMarquee items={logos.slice(0, half)} perView={perView} itemClassName="border border-[#EDECF3]" eagerCount={0} />
        <LogoMarquee items={logos.slice(half)} perView={perView} itemClassName="border border-[#EDECF3]" wrapperClassName="logo-marquee-reverse" eagerCount={0} />
      </div>
    </Section>
  );
};

export default OurClients;
