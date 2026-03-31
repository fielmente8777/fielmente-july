import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-6 md:mt-10">
        <div className="flex flex-col gap-4">
          <SectionHeading
            subTitle={card.title}
            subTitleColor="white"
            subTitleClassName="md:text-4xl!"
          />
          {card.description.map((desc, index) => (
            <p key={index} className="md:text-lg">
              {desc}
            </p>
          ))}
        </div>
        <div className=""></div>
      </div>
    </SectionWithContainer>
  );
};

export default OurServiceSection;
