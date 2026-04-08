import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/components/restaurant-lp-components";
import { ukLandingPageData } from "@/utils/commonLandingPage";

export const metadata = {
  title: "Restaurant Marketing Agency in UK | SEO, Ads & Growth Services",

  description:
    "Top restaurant marketing agency in the UK. Grow your restaurant with SEO, social media marketing, paid ads, and food aggregator optimization.",

  keywords: [
    "restaurant marketing agency UK",
    "restaurant SEO UK",
    "restaurant advertising UK",
    "food marketing agency London",
    "restaurant social media UK",
    "cloud kitchen marketing UK"
  ],

  alternates: {
    canonical: "https://fielmente.com/UK",
  },

  openGraph: {
    title: "Restaurant Marketing Agency in United Kingdom",
    description:
      "Boost restaurant sales with SEO, ads, and digital marketing services across the UK.",
    url: "https://fielmente.com/UK",
    siteName: "Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Marketing UK",
      },
    ],
  },
};

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
