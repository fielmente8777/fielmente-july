import {
  AboutUs,
  Banner,
  GrowthCard,
  OurClients,
  OurOTAPartners,
} from "./components";
import { OurServices } from "./components";
import { BannerProps, DataType, GrowthCardProps } from "./types";

export const metadata = {
  title: "Hotel Marketing Company in USA | SEO, OTA & Revenue Growth",

  description:
    "Top hotel marketing company in the USA offering SEO, OTA management, social media, and revenue strategies to increase bookings and visibility.",

  keywords: [
    "hotel marketing company USA",
    "hotel SEO USA",
    "hospitality marketing USA",
    "OTA management USA",
    "hotel digital marketing agency USA",
    "hotel revenue management USA"
  ],

  alternates: {
    canonical: "https://fielmente.com/USA",
  },

  openGraph: {
    title: "Hotel Marketing Company in the USA",
    description:
      "Grow your hotel bookings with expert marketing and revenue management services.",
    url: "https://fielmente.com/USA",
    siteName: "Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
        alt: "Hotel Marketing USA",
      },
    ],
  },
};

const page = () => {
  const bannerData: BannerProps = {
    img: "/images/usa_flag.webp",
    title: "Leading Hotel Marketing Company",
    heading: `Boost hotel <strong>bookings</strong> and brand visibility with a top Hotel Marketing Company in the <strong>USA.</strong>`,
    link: true,
  };
  const growthcardData: GrowthCardProps = {
    img: "/images/growth_card.png",
    title: "YOUR GROWTH STARTS HERE.",
    description:
      "Book an intro call to see how Fielmente can take your business to the next level. We would love to chat.",
    link: true,
  };

  const aboutUsData: DataType = {
    title: "We are the Best Hotel Marketing Company in the",
    span: "USA",
    description:
      "Welcome to Fielmente – Your Top Choice for Revenue Management and Hotel Digital Marketing in the USA. Elevate your hotel business with our expert services. As a leading Revenue Management company globally, Fielmente specializes in tailored Hotel Digital Marketing solutions designed for success in the dynamic US market.",
    img: "/images/usa.webp",
    description2: [
      "Our certified experts, recognized as a premier digital marketing agency in the USA, bring extensive experience to ensure your hotel thrives in the competitive landscape. Benefit from meticulous OTA management, advanced Channel Manager services for hotels, and comprehensive Digital Marketing strategies covering SEO, SEM, and Online Reputation Management. We also offer captivating website development and detailed digital audits to give you a competitive edge.",
      "Elevate your hotel's success – Choose Fielmente today, your trusted partner as a hotel marketing agency and among the top hotel marketing companies in the US specializing in revenue management for hotels.",
    ],
  };
  return (
    <main className="bg-white">
      <Banner {...bannerData} />
      <AboutUs {...aboutUsData} />
      <OurServices />
      <OurClients SHeading />
      <GrowthCard {...growthcardData} />
      <OurOTAPartners />
    </main>
  );
};

export default page;
