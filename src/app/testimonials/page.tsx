import TextBanner from "@/components/banners/TextBanner";
import { testimonialsData } from "./components/pageData";
import CtaSection from "@/components/commonSections/CtaSection";
import MoreStories from "./components/MoreStories";
import FeaturedTestimonials from "./components/FeaturedTestimonials";


export const metadata = {
  title: "Fielmente Reviews & Testimonials | Hotel Success Stories",
  
  description:
    "Read real testimonials from 500+ hotels and hospitality brands using Fielmente. Discover how our OTA management, SEO, and revenue strategies drive growth and bookings.",
  
  keywords: [
    "Fielmente reviews",
    "hotel marketing testimonials",
    "hospitality success stories",
    "OTA management reviews",
    "hotel SEO results",
    "Eazotel reviews",
    "hotel revenue growth case studies",
    "client testimonials hotel marketing"
  ],


  alternates: {
    canonical: "https://fielmente.com/testimonials/",
  },

  openGraph: {
    title: "Fielmente Reviews | Real Hotel Growth Stories",
    description:
      "Hear from hoteliers who transformed their business with Fielmente’s marketing and revenue solutions.",
    url: "https://fielmente.com/testimonials/",
    siteName: "Fielmente",
   images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fielmente Client Testimonials",
    description:
      "Real feedback from hotels using Fielmente’s services.",
  },

  
};
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
