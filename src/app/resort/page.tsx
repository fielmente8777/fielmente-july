import { Metadata } from "next";
import PageComponents from "../hospitality/components/PageComponents";

export const metadata: Metadata = {
  title: "Fielmente : Resort Marketing Agency in India",
  description:
    "Best marketing agency in India for Resorts, resorts and restaurant",
  keywords:
    "Resort Marketing Agency, Resort marketing service, Resort marketing consultant ,Resort solutions,Resort business services,Resort support, Resort growth,Resort marketing strategy,Resort marketing planning,Resort marketing plan,Resort marketing services,Resort marketing consultant,Resort marketing agency",
  alternates: {
    canonical: "https://fielmente.com/resort/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://fielmente.com/resort/" }],
  openGraph: {
    title: "Fielmente : Resort Marketing Agency in India",
    description:
      "Best marketing agency in India for Resorts, resorts and restaurant",
    url: "https://fielmente.com/resort/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
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
