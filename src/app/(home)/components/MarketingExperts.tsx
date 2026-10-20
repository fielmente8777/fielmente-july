"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { MarketingExpertiseDataTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import { MarketingCard } from "@/components/cards/MarketingCard";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const MarketingExperts: React.FC<MarketingExpertiseDataTypes> = ({
  title,
  cards,
}) => {
  return (
    <Section className="relative after:absolute after:inset-2 after:rounded-2xl after:bg-white before:content-[''] before:inset-0 before:absolute before:bg-[#F9FAFB] before:z-[-2] after:z-[-1]">
      <Container>
        <SectionHeading subTitle={title} subLevel={2} textCenter />
        {/* One set of cards: a grid on tablets and desktops, a swipeable row on phones (no duplicate slider copy). */}
        <div className="snap-row md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10 lg:mt-16">
          {cards.map((card, index) => (
            <MarketingCard key={index} {...card} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default MarketingExperts;
