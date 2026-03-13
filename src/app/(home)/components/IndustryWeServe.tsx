import { IndustryWeServeDataTypes } from "@/@types/@homeType";
import { Section } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const IndustryWeServe: React.FC<IndustryWeServeDataTypes> = ({
  title,
  description,
  cards,
}) => {
  return (
    <Section>
      <SectionHeading
        title={title}
        subTitle={description}
        textCenter
        wrapperClassName="max-w-2xl mx-auto max-lg:px-4"
      />
    </Section>
  );
};

export default IndustryWeServe;
