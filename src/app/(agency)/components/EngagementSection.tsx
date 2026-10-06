import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { COMPANY, ENGAGEMENTS } from "@/utils/agencyData";
import { LuArrowRight } from "react-icons/lu";

// "Three ways to start" — how engagements are sold (no prices). Edit ENGAGEMENTS in src/utils/agencyData.ts.
const EngagementSection: React.FC = () => {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead eyebrow="Working together" title="Three ways to start" lede={COMPANY.founderLine} />
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {ENGAGEMENTS.map((e, i) => (
            <div key={e.title} className={`flex flex-col gap-3 rounded-2xl p-6 md:p-7 ${i === 0 ? "bg-primary2 text-white" : "border border-[#E4E3EC]"}`}>
              <h3 className="text-lg font-bold">{e.title}</h3>
              <p className={`text-sm/relaxed md:text-[15px]/relaxed ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{e.body}</p>
              {i === 0 && (
                <a href="#plan" className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-orange-primary">
                  Request your plan <LuArrowRight aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EngagementSection;
