import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { LuCircleCheck, LuCircleX } from "react-icons/lu";

interface ComparisonSectionProps {
  title: string;
  withoutLabel?: string;
  withLabel?: string;
  without: string[];
  withList: string[];
}

// Two-column "without / with Fielmente" comparison.
const ComparisonSection: React.FC<ComparisonSectionProps> = ({
  title,
  withoutLabel = "Without it",
  withLabel = "With Fielmente",
  without,
  withList,
}) => {
  return (
    <section className="py-14 md:py-22">
      <Container>
        <SectionHead title={title} />
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="rounded-2xl border border-[#E4E3EC] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#6B6886] mb-5">{withoutLabel}</p>
            <ul className="flex flex-col gap-4">
              {without.map((b) => (
                <li key={b} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                  <LuCircleX className="mt-0.5 h-5 w-5 shrink-0 text-[#A5A2BF]" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-primary2 p-6 md:p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-primary mb-5">{withLabel}</p>
            <ul className="flex flex-col gap-4">
              {withList.map((a) => (
                <li key={a} className="flex gap-3 text-[15px]/relaxed md:text-base/relaxed">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-primary" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ComparisonSection;
