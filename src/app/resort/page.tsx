import { NOINDEX_ROBOTS } from "@/lib/noindex";
import { Metadata } from "next";
import PageComponents from "../hospitality/components/PageComponents";

export const metadata: Metadata = {
  title: "Resort Marketing Agency | Fielmente",
  description: "Grow resort visibility, direct bookings and revenue with SEO, Google Ads, social media and OTA management. Marketing for resort brands worldwide.",
  keywords:
    "Resort Marketing Agency, Resort marketing service, Resort marketing consultant ,Resort solutions,Resort business services,Resort support, Resort growth,Resort marketing strategy,Resort marketing planning,Resort marketing plan,Resort marketing services,Resort marketing consultant,Resort marketing agency",
  alternates: {
    canonical: "https://fielmente.com/resort/",
  },
  robots: NOINDEX_ROBOTS,
  authors: [{ name: "Fielmente", url: "https://fielmente.com/resort/" }],
  openGraph: {
    title: "Resort Marketing Agency | Fielmente",
    description: "Grow resort visibility, direct bookings and revenue with SEO, Google Ads, social media and OTA management. Marketing for resort brands worldwide.",
    url: "https://fielmente.com/resort/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    
  },
};
const page = () => {
  return (
    <>
      <PageComponents />
    </>
  );
};

export default page;
