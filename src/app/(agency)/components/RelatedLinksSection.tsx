import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface RelatedLinksSectionProps {
  links: { title: string; body: string; href: string }[];
}

// "Related services and markets": internal links to other agency, industry, service and product pages.
const RelatedLinksSection: React.FC<RelatedLinksSectionProps> = ({ links }) => {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead eyebrow="Explore" title="Related services and markets" />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="group flex h-full flex-col gap-1.5 rounded-2xl border border-[#E4E3EC] p-5 hover:border-primary2/40 transition-colors">
                <span className="flex items-center justify-between gap-2 font-bold text-primary2">
                  {l.title}
                  <LuArrowRight className="shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="text-sm/relaxed text-[#55536E]">{l.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default RelatedLinksSection;
