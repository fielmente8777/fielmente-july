import { MarketingExpertiseDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const MarketingExperts: React.FC<MarketingExpertiseDataTypes> = ({
  title,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <SectionHeading subTitle={title} subLevel={2} textCenter />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 lg:mt-16">
        {cards.map((card, index) => (
          <MarketingCard key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default MarketingExperts;

export const MarketingCard: React.FC<
  MarketingExpertiseDataTypes["cards"][0]
> = ({ title, subtitle, icon }) => {
  return (
    <div className="px-10 py-11 border border-[#C6C9CE] rounded-2xl">
      <div>{icon}</div>
      <h3 className="text-[1.375rem] font-bold text-primary mt-4">{title}</h3>
      <p className="text-[#6B7280]">{subtitle}</p>
    </div>
  );
};
