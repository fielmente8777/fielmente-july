import TextBanner from "@/components/banners/TextBanner";
import { testimonialsData } from "./components/pageData";
import CtaSection from "@/components/commonSections/CtaSection";
import MoreStories from "./components/MoreStories";
import FeaturedTestimonials from "./components/FeaturedTestimonials";
export default function TestimonialPage() {
  // const { testimonialsData } = homePageData;
  return (
    <main>
      <TextBanner {...testimonialsData.bannerData} />
      <FeaturedTestimonials {...testimonialsData.testimonialSection} />
      <MoreStories {...testimonialsData.testimonialSection2} />  
      <CtaSection {...testimonialsData.ctaData} />
    </main>
  );
}
