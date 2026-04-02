import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/components/restaurant-lp-components";
import { ukLandingPageData } from "@/utils/commonLandingPage";

const page = () => {
  return (
    <main className="bg-white poppins">
      <Banner {...ukLandingPageData.banner} />
      <ImageSection images={ukLandingPageData.images} />
      <OurServices {...ukLandingPageData.services} />
      <WhyChooseUs {...ukLandingPageData.whyChooseUs} />
      <OurClients {...ukLandingPageData.ourClients} />
      <Testimonial {...ukLandingPageData.testimonial} />
    </main>
  );
};

export default page;
