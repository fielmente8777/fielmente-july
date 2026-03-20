import { IndustryWeServeDataTypes } from "@/@types/@homeType";
import { Container, Section } from "@/components";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import IndustryWeServeSlider from "./sliders/IndustryWeServeSlider";

const IndustryWeServe: React.FC<IndustryWeServeDataTypes> = ({
  title,
  subTitle,
  description,
  cards,
}) => {
  return (
    <Section className="relative after:absolute after:inset-2 after:rounded-2xl after:bg-[#141414] before:content-[''] before:inset-0 before:absolute before:bg-black before:z-[-2] after:z-[-1]">
      <Container>
        <SectionHeading
          title={title}
          subTitle={subTitle}
          titleWrapperClassName="px-4 py-2 glassy-card rounded-full"
          subTitleClassName="span-color-2"
          titleColor="white"
          subTitleColor="white"
          textCenter
          wrapperClassName="max-w-md mx-auto max-lg:px-4 gap-4"
        />
        <p className="text-white md:text-lg md:max-w-xl md:mx-auto text-center mt-4">
          {description}
        </p>
      </Container>
      <IndustryWeServeSlider cards={cards} />
    </Section>
  );
};

export default IndustryWeServe;
