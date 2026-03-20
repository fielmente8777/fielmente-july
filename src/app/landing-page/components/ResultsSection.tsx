import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import ResultsSlider from "./sliders/ResultsSlider";
import { ResultStatsCard } from "./cards/ResultStatsCard";

interface ResultsSectionProps {
  title: string;
  heading: string;
  stats: {
    value: string;
    label: string;
    description: string;
  }[];
  cta: {
    label: string;
    type: string;
  };
}

const ResultsSection: React.FC<ResultsSectionProps> = ({
  title,
  heading,
  stats,
  cta,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-0 after:bg-background-black1 after:z-[-3] ">
      <div className="grid xl:grid-cols-7 gap-8 md:gap-14">
        <div className="md:col-span-2 space-y-6">
          <SectionHeading
            title={title}
            subTitle={heading}
            titleColor="white"
            subTitleColor="white"
          />
          <CtaBtn
            type="button"
            label={cta.label}
            className="mt-8 w-full justify-between! bg-color4 border-color4 text-white rounded-full"
            icon="arrow"
          />
        </div>
        {/* stats cards */}
        <div className="md:col-span-5 md:grid hidden grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ResultStatsCard key={index} {...stat} index={index} />
          ))}
        </div>
        <ResultsSlider cards={stats} />
      </div>
    </SectionWithContainer>
  );
};

export default ResultsSection;


