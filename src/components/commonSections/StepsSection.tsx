import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";

interface StepsSectionProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** `when` (e.g. "Weeks 1–2") replaces the step number when given. */
  steps: { title: string; body: string; when?: string }[];
}

// Dark band with numbered steps ("How we work").
const StepsSection: React.FC<StepsSectionProps> = ({ eyebrow, title, lede, steps }) => {
  return (
    <section className="bg-primary2 py-14 md:py-22">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} lede={lede} light />
        <ol className={`grid sm:grid-cols-2 ${steps.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
          {steps.map((s, i) => (
            <li key={s.title} className="flex flex-col gap-3 pt-5 border-t-2 border-orange-primary">
              {s.when ? (
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-primary">{s.when}</span>
              ) : (
                <span className="text-lg font-bold text-orange-primary">{String(i + 1).padStart(2, "0")}</span>
              )}
              <h3 className="text-lg md:text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm/relaxed md:text-[15px]/relaxed text-[#C9C7DD]">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default StepsSection;
