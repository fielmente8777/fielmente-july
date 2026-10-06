import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import Image from "next/image";

interface OurServiceSectionProps {
  title: string;
  description: string;
  card: {
    title: string;
    image: string;
    description: string[];
    stats: {
      label: string;
      value: string;
    }[];
  };
}
const OurServiceSection: React.FC<OurServiceSectionProps> = ({
  title,
  description,
  card,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-black text-white">
      <SectionHeading
        subTitle={title}
        subLevel={2}
        textCenter
        subTitleColor="white"
      />
      <p className="text-center md:text-lg  mt-6 ">{description}</p>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6 mt-6 md:mt-10">
        <div className="flex flex-col gap-4 md:max-w-xl md:gap-6">
          <SectionHeading
            subTitle={card.title}
            subTitleColor="white"
            subTitleClassName="md:text-4xl!"
          />
          {card.description.map((desc, index) => (
            <p key={index} className="md:text-lg text-light">
              {desc}
            </p>
          ))}
          <div className="grid mt-4 grid-cols-2 gap-6 justify-center">
            {card.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <p className="md:text-4xl text-2xl text-[#e9d175] font-semibold">{stat.value}</p>
                <p className="md:text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full relative aspect-4/2.5">
          <Image
            src={card.image}
            alt={card.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurServiceSection;
