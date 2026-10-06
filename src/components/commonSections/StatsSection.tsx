import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { ReactNode } from "react";

interface StatsSectionProps {
  title: string;
  eyebrow?: string;
  stats: { value: string; label: string }[];
  note?: ReactNode;
}

// Grey band with four headline numbers.
const StatsSection: React.FC<StatsSectionProps> = ({ title, eyebrow, stats, note }) => {
  return (
    <section className="bg-[#F5F5F9] py-14 md:py-20">
      <Container>
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <div key={s.label} className={`rounded-2xl p-5 md:p-7 flex flex-col gap-2 ${i === 0 ? "bg-primary2" : "bg-white"}`}>
              <span className={`text-[28px]/tight md:text-[40px]/tight font-bold ${i === 0 ? "text-orange-primary" : "text-primary2"}`}>
                {s.value}
              </span>
              <span className={`text-[13px] md:text-sm ${i === 0 ? "text-[#C9C7DD]" : "text-[#55536E]"}`}>{s.label}</span>
            </div>
          ))}
        </div>
        {note && <p className="mt-4 text-xs text-[#6B6886]">{note}</p>}
      </Container>
    </section>
  );
};

export default StatsSection;
