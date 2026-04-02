import { SectionWithContainer } from "@/components";
import FeaturedTestimonialsSlider from "./FeaturedTestimonialsSlider";
import SectionHeading from "@/components/typography/SectionHeadingDesc";

interface FeaturedTestimonialsPropsType {
  title: string;
  subtle: string;
  description: string;
  testimonials: {
    title: string;
    description: string;
  }[];
}
const FeaturedTestimonials: React.FC<FeaturedTestimonialsPropsType> = ({
  title,
  subtle,
  description,
  testimonials,
}) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} subTitle={subtle} textCenter subTitleClassName="span-color-3 md:text-3xl!" wrapperClassName="gap-4" titleWrapperClassName="px-4 py-2 rounded-full border border-main-border" />
      <p className="text-center text-lg mt-2 text-secondary">
        {description}
      </p>
      <FeaturedTestimonialsSlider cards={testimonials} />
    </SectionWithContainer>
  );
};

export default FeaturedTestimonials;
