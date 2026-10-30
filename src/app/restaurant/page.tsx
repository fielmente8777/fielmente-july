import { NOINDEX_ROBOTS } from "@/lib/noindex";
import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/components/restaurant-lp-components";
import { restaurantLandingPageData } from "@/utils/commonLandingPage";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Restaurant Marketing Agency | Fielmente",
  description: "Restaurant marketing for cafes, bars, cloud kitchens and restaurant groups. Grow enquiries and sales with SEO, Google Ads, social media and brand strategy.",

  keywords: [
    "restaurant marketing agency",
    "restaurant marketing India",
    "restaurant SEO services",
    "restaurant digital marketing",
    "cloud kitchen marketing",
    "food business marketing",
    "restaurant growth agency",
    "Google My Business restaurant",
    "restaurant social media marketing",
    "restaurant advertising agency India",
  ],

  authors: [{ name: "Fielmente" }],
  creator: "Fielmente",
  publisher: "Fielmente",

  openGraph: {
    title: "Restaurant Marketing Agency | Fielmente",
    description: "Restaurant marketing for cafes, bars, cloud kitchens and restaurant groups. Grow enquiries and sales with SEO, Google Ads, social media and brand strategy.",
    url: "https://fielmente.com/restaurant/",
    siteName: "Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Restaurant Marketing Agency | Fielmente",
    description: "Restaurant marketing for cafes, bars, cloud kitchens and restaurant groups. Grow enquiries and sales with SEO, Google Ads, social media and brand strategy.",
  },

  

  alternates: {
    canonical: "https://fielmente.com/restaurant/",
  },
  robots: NOINDEX_ROBOTS,

};
const page = () => {
  return (
    <main className="bg-white poppins">
      <Banner {...restaurantLandingPageData.banner} />
      <ImageSection images={restaurantLandingPageData.images} />
      <OurServices {...restaurantLandingPageData.services} />
      <WhyChooseUs {...restaurantLandingPageData.whyChooseUs} />
      <OurClients {...restaurantLandingPageData.ourClients} />
      <Testimonial {...restaurantLandingPageData.testimonial} />
    </main>
  );
};

export default page;
