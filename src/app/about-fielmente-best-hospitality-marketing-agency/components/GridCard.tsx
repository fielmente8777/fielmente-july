import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface GridCardProps {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  index?: number;
}
const GridCard: React.FC<GridCardProps> = ({
  title,
  subtitle,
  description,
  images,
  index,
}) => {
  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName={!index && !index ? "pt-10" : ""}
      containerClassName="grid md:grid-cols-2 gap-16 max-w-7xl! py-6"
    >
      <div
        className={`space-y-8 md:space-y-12 ${index && index % 2 === 0 ? "md:order-2" : ""}`}
      >
        <SectionHeading
          title={title}
          subTitle={subtitle}
          icon
          wrapperClassName="gap-4"
          subTitleClassName="md:text-3xl!"
        />
        <div className="w-full md:hidden relative aspect-4/2.25 rounded-2xl overflow-hidden border-2 border-[#F7F7F7]">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {description.map((item, index) => (
          <p
            key={index}
            className="text-secondary text-lg"
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div className="w-full relative aspect-4/2.25 rounded-2xl overflow-hidden border-2 border-[#F7F7F7]">
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default GridCard;
