import { SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import CasStudyCard from "./CasStudyCard";

interface HowHotelScalingProps {
  title: string;
  cards: {
    src: string;
    title: string;
    description: string;
    slug: string;
  }[];
}

const HowHotelScaling: React.FC<HowHotelScalingProps> = ({ title, cards }) => {
  return (
    <SectionWithContainer>
      <div className="">
        <SectionHeading subTitle={title} subLevel={2} textCenter />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-8 md:mt-12 mt-10">
          {cards.map((card, index) => (
            <CasStudyCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default HowHotelScaling;
