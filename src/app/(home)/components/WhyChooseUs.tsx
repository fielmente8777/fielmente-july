"use client";
// A client component so the page data carries this section's text once, not its full markup again
// (Next.js puts that data in the HTML; it was a large part of the home page size).
import SvgIcon from "@/components/SvgIcon";
import { WhyChooseUsDataTypes } from "@/@types/@homeType";
import { Container, SectionWithContainer } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import { ChooseCard1 } from "./cards/ChooseCard1";
import { ChooseCard2 } from "./cards/ChooseCard2";

const WhyChooseUs: React.FC<WhyChooseUsDataTypes> = ({
  title,
  subTitle,
  description,
  cardsData,
}) => {
  return (
    <>
      <SectionWithContainer containerClassName="space-y-8">
        <SectionHeading title={title} subTitle={subTitle} textCenter />
        <div className="space-y-6 max-w-6xl mx-auto">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-secondary text-lg text-center"
              dangerouslySetInnerHTML={{ __html: item || "" }}
            ></p>
          ))}
        </div>
      </SectionWithContainer>
      {cardsData.slice(0, 4).map((card, index) => (
        <ChooseCard1 key={index} {...card} index={index - 1} />
      ))}
      <Container className="grid lg:grid-cols-3 gap-6 mb-18">
        {cardsData.slice(4).map((card, index) => (
          <ChooseCard2 key={index} {...card} index={index} />
        ))}
      </Container>
    </>
  );
};

export default WhyChooseUs;

// Blue tick before list items. A static file (used ~20 times on the home page) instead of inline SVG.
export const TickIcon = () => <SvgIcon src="/icons/tick.svg" width={24} height={24} />;
