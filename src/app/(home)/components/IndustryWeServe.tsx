"use client";
// Client component: the page data then carries only this section's content, not a second copy of its
// markup (Next.js inlines that data in the HTML, which made the home page HTML very large).
import { IndustryWeServeDataTypes } from "@/@types/@homeType";
import { Section } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import IndustryWeServeSlider from "./slider/IndustryWeServeSlider";

const IndustryWeServe: React.FC<IndustryWeServeDataTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <Section>
      <SectionHeading
        title={title}
        subTitle={subTitle}
        subTitleClassName="span-color"
        textCenter
        wrapperClassName="max-w-2xl mx-auto max-lg:px-4"
      />
      <IndustryWeServeSlider cards={cards} />
    </Section>
  );
};

export default IndustryWeServe;
