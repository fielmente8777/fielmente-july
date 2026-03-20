import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface GrowthSectionProps {
  title: string;
  subTitle: string;
  points: {
    title: string;
    description: string;
    src: string;
  }[];
}

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
        subTitleClassName="span-color"
        textCenter
        wrapperClassName="max-w-4xl mx-auto max-lg:px-4"
      />
      <div className="md:grid hidden grid-cols-3 gap-10 max-w-6xl mx-auto">
        {points.map((point, index) => (
          <GrowthCard {...point} key={index} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default GrowthSection;

export const GrowthCard = ({ title, description, src }: GrowthSectionProps["points"][0]) => {
  return (
    <div className="grid grid-rows-[auto_0.4fr_1fr] gap-3 p-8 bg-white rounded-2xl">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{description}</p>
      <div className="w-48 aspect-4/4 relative">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  );
};
