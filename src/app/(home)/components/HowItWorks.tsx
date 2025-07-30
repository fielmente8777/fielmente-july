import { howItWorksPropsType } from "@/@types/@types";
import { SectionHeadingDesc, SectionWithContainer } from "@/components";
import { HowItWorksCard } from "@/components/cards";

const HowItWorks: React.FC<howItWorksPropsType> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="relative after:content-[''] after:inset-0 after:absolute after:bg-[#f5f5f5] after:z-[-1]">
      <div className="md:space-y-14 space-y-8">
        <div className="max-w-3xl mx-auto w-full">
          <SectionHeadingDesc
            title={title}
            subTitle={subTitle}
            description={description[0]}
            subTitleColor="secondary"
            textcenter
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <HowItWorksCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default HowItWorks;
