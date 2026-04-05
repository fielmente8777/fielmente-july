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
  title: "India’s #1 Restaurant Marketing Agency | Fielmente",
  description:
    "Fielmente is India’s top-rated restaurant marketing agency helping restaurants, cafes, bars & cloud kitchens grow faster. Get more customers, increase sales & boost online presence with SEO, performance marketing & social media.",

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
    title: "India’s #1 Rated Restaurant Marketing Agency | Fielmente",
    description:
      "Outsmart the competition with best-in-class restaurant marketing services. Acquire more customers & increase your sales with Fielmente.",
    url: "https://fielmente.com/restaurant/",
    siteName: "Fielmente",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "India’s #1 Restaurant Marketing Agency | Fielmente",
    description:
      "Grow your restaurant with SEO, performance marketing & social media. Trusted by leading restaurants across India.",
  },

  

  alternates: {
    canonical: "https://fielmente.com/restaurant/",
  },

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
