import { MarketingExpertiseDataTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import { MarketingCard } from "@/components/cards/MarketingCard";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import MarketingExpertsSlider from "./slider/MarketingExpertsSlider";

const MarketingExperts: React.FC<MarketingExpertiseDataTypes> = ({
  title,
  cards,
}) => {
  return (
    <Section className="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <Container>
        <SectionHeading subTitle={title} subLevel={2} textCenter />
        <div className="md:grid hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 lg:mt-16">
          {cards.map((card, index) => (
            <MarketingCard key={index} {...card} />
          ))}
        </div>
      </Container>
      <MarketingExpertsSlider cards={cards} />
    </Section>
  );
};

export default MarketingExperts;
