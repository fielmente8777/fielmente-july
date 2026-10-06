import { Section, SectionWithContainer } from "@/components";
import FormOption from "@/components/forms/FormOption";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface EnquirySectionProps {
  title: string;
  description: string;
}

const EnquirySection: React.FC<EnquirySectionProps> = ({
  title,
  description,
}) => {
  return (
    <Section className="lg:py-50!">
      <SectionWithContainer
        sectionClassName="bg-primary2"
        containerClassName="grid lg:grid-cols-[2fr_1fr] grid-cols-1"
      >
        <div className="max-w-2xl">
          <SectionHeading
            subTitle={title}
            subLevel={2}
            subTitleColor="white"
            subTitleClassName="span-color-4 font-normal! md:text-4xl text-2xl"
          />
          <p className="md:text-lg text-white mt-4">{description}</p>
        </div>
        <div className="lg:relative w-full">
          <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full">
            <FormOption />
          </div>
        </div>
      </SectionWithContainer>
    </Section>
  );
};

export default EnquirySection;
