import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

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
      <div className="grid lg:grid-cols-7 gap-8 md:gap-14">
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
        <div className="md:col-span-5 grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ResultStatsCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ResultsSection;

export const ResultStatsCard: React.FC<
  ResultsSectionProps["stats"][0] & { index: number }
> = ({ label, value, description, index }) => {
  return (
    <div className="flex flex-col justify-between gap-2.5  px-5.75 py-7.5 text-white relative after:absolute after:inset-0 after:bg-[#191E31] after:z-[-2] overflow-hidden">
      <span
        className="text-[3.25rem] font-semibold"
        dangerouslySetInnerHTML={{ __html: value }}
      ></span>
      <span
        className={`absolute z-[-1] -top-9 span-color-5 ${index === 0 ? "-right-2" : index === 1 ? "-right-7" : "-right-22"} text-[90px] text-[#1B2A42]! w-fit font-semibold`}
        dangerouslySetInnerHTML={{ __html: value }}
      ></span>
      <div className="space-y-1">
        <h3 className="text-base font-semibold">{label}</h3>
        <p className="text-sm text-[#CECECE] pr-6">{description}</p>
      </div>
    </div>
  );
};
