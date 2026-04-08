import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/components/restaurant-lp-components";
import { dubaiRestaurantLandingPageData } from "@/utils/commonLandingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency in Dubai | SEO, Ads & Growth",

  description:
    "Top restaurant marketing agency in Dubai. Boost your sales with SEO, social media, ads, and food aggregator optimization. Get a free consultation today.",

  keywords: [
    "restaurant marketing agency Dubai",
    "restaurant SEO Dubai",
    "food marketing UAE",
    "restaurant social media marketing",
    "Dubai restaurant advertising agency",
    "cloud kitchen marketing Dubai",
    "food delivery app optimization UAE",
  ],

  alternates: {
    canonical: "https://fielmente.com/dubai-restaurant",
  },

  openGraph: {
    title: "Dubai’s #1 Restaurant Marketing Agency",
    description:
      "Grow your restaurant with SEO, ads, and social media marketing services in Dubai.",
    url: "https://fielmente.com/dubai-restaurant",
    siteName: "Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
        alt: "Restaurant Marketing Dubai",
      },
    ],
  },
};
const page = () => {
  return (
    <main className="bg-white poppins">
      <Banner {...dubaiRestaurantLandingPageData.banner} />
      <ImageSection images={dubaiRestaurantLandingPageData.images} />
      <OurServices {...dubaiRestaurantLandingPageData.services} />
      <WhyChooseUs {...dubaiRestaurantLandingPageData.whyChooseUs} />
      <OurClients {...dubaiRestaurantLandingPageData.ourClients} />
      <Testimonial {...dubaiRestaurantLandingPageData.testimonial} />
    </main>
  );
};

export default page;
