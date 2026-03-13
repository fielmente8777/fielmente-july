import { TestimonialsDataTypes } from "@/@types/@homeType";
import { SectionWithContainer } from "@/components";
import TestimonialsSlider from "@/components/slider/TestimonialsSlider";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

const Testimonials: React.FC<TestimonialsDataTypes> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-10">
      <div>
        <SectionHeading title={title} subTitle={subTitle} subTitleClassName="span-color-2" />
      </div>
      <TestimonialsSlider cards={cards} />
    </SectionWithContainer>
  );
};

export default Testimonials;
