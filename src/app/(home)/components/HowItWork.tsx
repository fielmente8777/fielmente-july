import { HowItWorksDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const HowItWork: React.FC<HowItWorksDataTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-2 gap-6">
        <SectionHeading title={title} subTitle={subTitle} />
        <div className="space-y-6 relative">
          {cards.map((card, index) => (
            <HowItWorkCard key={index} {...card} />
          ))}
          <div className="md:h-[150px] h-[180px]  w-px border-l border-dashed border-[#0D54EB] absolute md:top-20 top-26 left-6 scale-y-200  z-[-1]"></div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default HowItWork;

export const HowItWorkCard: React.FC<HowItWorksDataTypes["cards"][0]> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex  gap-6">
      <div>
        <div className="bg-[#E9F5FF] border-2 border-[#B8CDF9] w-12 aspect-square flex items-center justify-center rounded-full text-[#0D54EB]">
          {icon}
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-[1.75rem] font-semibold text-primary">{title}</h3>
        <p className="text-sm text-secondary">{description}</p>
      </div>
    </div>
  );
};
