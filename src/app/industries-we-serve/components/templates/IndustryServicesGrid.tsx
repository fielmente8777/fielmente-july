// Grid of every service page for one industry. Used on industry pages that render with the
// agency landing template (e.g. /industries-we-serve/resort-marketing-agency/).
import IconLinkCard from "@/components/cards/IconLinkCard";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { getIndustry } from "../../data/industries";
import { serviceHref, serviceTypes } from "../../data/services";

export default function IndustryServicesGrid({ slug }: { slug: string }) {
  const I = getIndustry(slug);
  if (!I) return null;
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead
          eyebrow="Every service"
          title={`All ${I.services.length} ${I.name.toLowerCase()} marketing services`}
          lede={`Each one has its own page, written for ${I.plural}. Start with one, or let one team run the whole plan.`}
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {I.services.map((key) => (
            <li key={key}>
              <IconLinkCard
                icon={serviceTypes[key].icon}
                title={serviceTypes[key].label}
                body={serviceTypes[key].card(I)}
                href={serviceHref(I, key)}
                bordered
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
