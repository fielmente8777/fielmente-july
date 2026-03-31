import { CtaBtnPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface WhyNeedWebsiteProps {
  title: string;
  description: string;
  cards: {
    icon: string;
    title: string;
  }[];
  cta: CtaBtnPropsType;
}

const WhyNeedWebsite: React.FC<WhyNeedWebsiteProps> = ({
  title,
  description,
  cards,
  cta,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
        <SectionHeading
          subTitle={title}
          subLevel={2}
          subTitleColor="primary2"
          subTitleClassName="span-color-4"
        />
        <p className="text-secondary md:text-lg">{description}</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <WhyNeedWebsiteCard key={index} {...card} />
        ))}
      </div>
      <CtaBtn
        label={cta.label}
        type={cta.type}
        className="bg-tertiary text-white w-fit mx-auto md:text-xl rounded-md"
      />
    </SectionWithContainer>
  );
};

export default WhyNeedWebsite;

export const WhyNeedWebsiteCard: React.FC<{
  icon: string;
  title: string;
}> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center border p-6 border-tertiary">
      <div className="w-[60px] relative aspect-square">
        <Image src={icon} alt={title} fill className="object-contain" />
      </div>
      <h3 className="font-medium text-lg text-primary2">{title}</h3>
    </div>
  );
};
