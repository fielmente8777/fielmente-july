import { WhyNeedProps } from "@/@types/@industryPageType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import WhyNeedCard from "./cards/WhyNeedCard";
import { CtaBtn } from "@/components/buttons/CtaBtn";

const WhyNeed: React.FC<WhyNeedProps> = ({
  title,
  description,
  cards,
  cta,
}) => {
  return (
    <SectionWithContainer>
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          subTitle={title}
          subLevel={2}
          textCenter
          subTitleColor="primary2"
          subTitleClassName="span-color-4"
        />
        <p className="text-secondary md:text-lg text-center mt-4 mb-10">
          {description}
        </p>
        <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-10 mt-10">
          {cards.map((card, index) => (
            <WhyNeedCard key={index} {...card} />
          ))}
        </div>
        <CtaBtn label={cta.label} type={cta.type} href={cta.href} className="mx-auto mt-10 md:mt-16 text-white bg-primary2 rounded-xl md:text-xl" />
      </div>
    </SectionWithContainer>
  );
};

export default WhyNeed;
