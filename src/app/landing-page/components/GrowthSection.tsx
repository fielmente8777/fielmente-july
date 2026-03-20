import { GrowthSectionProps } from "@/@types/@landingPageType";
import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";
import { GrowthCard } from "./cards/GrowthCard";
import GrowthSlider from "./sliders/GrowthSlider";

const GrowthSection: React.FC<GrowthSectionProps> = ({
  title,
  subTitle,
  points,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="relative before:bg-white before:content-[''] before:inset-0 before:absolute before:z-[-2]"
      containerClassName="md:space-y-12 space-y-8 relative after:absolute after:-inset-4 after:rounded-2xl after:bg-[#F5F6F8] after:z-[-1] py-12"
    >
      <SectionHeading
        title={title}
        subTitle={subTitle}
        subTitleClassName="span-color max-md:px-8"
        textCenter
        iconClassName="lg:block hidden"
        wrapperClassName="max-w-4xl mx-auto gap-2 max-lg:px-4"
      />
      <div className="lg:grid hidden grid-cols-3 gap-10 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <GrowthCard {...point} key={index} />
        ))}
      </div>
      <GrowthSlider cards={points} />
    </SectionWithContainer>
  );
};

export default GrowthSection;
