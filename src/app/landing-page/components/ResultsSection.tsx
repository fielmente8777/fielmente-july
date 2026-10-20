"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { ResultsSectionProps } from "@/@types/@landingPageType";
import { SectionWithContainer } from "@/components";
import CustomWhatsAppButton from "@/components/buttons/CustomWhatsAppButton";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { ResultStatsCard } from "./cards/ResultStatsCard";



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
          <CustomWhatsAppButton
            label={cta.label}
            className="mt-8 w-full justify-between! bg-color4 border-color4 text-white rounded-full"
            icon="arrow"
          />
        </div>
        {/* stats cards */}
        {/* One set of cards: a grid from tablet up, a swipeable row on phones (no duplicate slider copy). */}
        <div className="md:col-span-5 snap-row md:grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <ResultStatsCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ResultsSection;


