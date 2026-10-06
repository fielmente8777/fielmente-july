import { CtaBtnPropsType } from "@/@types/@types";
import { SectionWithContainer } from "@/components";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface WhyToJoinProps {
  title: string;
  description: string;
  cta: CtaBtnPropsType;
}

const WhyToJoin: React.FC<WhyToJoinProps> = ({ title, description, cta }) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#000000] text-white">
      <div className="grid md:grid-cols-[2fr_auto] items-center gap-10 md:max-w-4xl mx-auto">
        <div className="flex flex-col gap-6">
          <SectionHeading
            subTitle={title}
            subLevel={2}
            subTitleClassName="span-color-4"
            subTitleColor="white"
          />
          <p className="md:max-w-xl md:text-lg">{description}</p>
        </div>

        <CtaBtn
          label={cta.label}
          type={cta.type}
          className="w-fit border-none rounded-xl text-white bg-[#2CBCA5]"
        />
      </div>
    </SectionWithContainer>
  );
};

export default WhyToJoin;
