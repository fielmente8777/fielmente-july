// Grid of every service page for one industry. Used on industry pages that render with the
// agency landing template (e.g. /industries-we-serve/resort-marketing-agency/).
import { Icon } from "@/components/marketing/icons";
import { SectionHead } from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
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
          {I.services.map((key) => {
            const st = serviceTypes[key];
            return (
              <li key={key}>
                <Link
                  href={serviceHref(I, key)}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-[#E4E3EC] bg-white p-5 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                    <Icon name={st.icon} size={20} />
                  </span>
                  <span className="flex flex-1 flex-col gap-1">
                    <span className="font-bold text-primary2">{st.label}</span>
                    <span className="text-sm/snug text-[#55536E]">{st.card(I)}</span>
                  </span>
                  <LuArrowRight className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
