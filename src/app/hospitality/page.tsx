import type { Metadata } from "next";
import PageComponents from "./components/PageComponents";

export const metadata: Metadata = {
  title:
    "Hospitality Marketing Agency in India | Hotel, Resort & Restaurant Marketing",

  description:
    "Fielmente is a leading hospitality marketing agency in India offering SEO, social media, OTA optimization, and performance marketing for hotels, resorts, and restaurants.",

  keywords:
    "Fielmente, Hotel Marketing Agency, Cloud Kitchen Marketing Agency, Resort Marketing Agency",
  alternates: {
    canonical: "https://fielmente.com/hospitality/",
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
  authors: [{ name: "Fielmente", url: "https://fielmente.com/hospitality/" }],
  openGraph: {
     title: "Hospitality Marketing Agency in India | Hotel, Resort & Restaurant Marketing",

  description:
    "Fielmente is a leading hospitality marketing agency in India offering SEO, social media, OTA optimization, and performance marketing for hotels, resorts, and restaurants.",

    url: "https://fielmente.com/hospitality/",
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

export default function Home() {
  return (
    <>
      <PageComponents />
    </>
  );
}
