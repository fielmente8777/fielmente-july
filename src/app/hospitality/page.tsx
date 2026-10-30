import { NOINDEX_ROBOTS } from "@/lib/noindex";
import type { Metadata } from "next";
import PageComponents from "./components/PageComponents";

export const metadata: Metadata = {
  title: "Hospitality Marketing Agency | Fielmente",

  description: "Marketing for hotels, resorts and restaurants worldwide. Grow direct bookings with SEO, social media, OTA management and performance marketing.",

  keywords:
    "Fielmente, Hotel Marketing Agency, Cloud Kitchen Marketing Agency, Resort Marketing Agency",
  alternates: {
    canonical: "https://fielmente.com/hospitality/",
  },
  robots: NOINDEX_ROBOTS,
  authors: [{ name: "Fielmente", url: "https://fielmente.com/hospitality/" }],
  openGraph: {
     title: "Hospitality Marketing Agency | Fielmente",

  description: "Marketing for hotels, resorts and restaurants worldwide. Grow direct bookings with SEO, social media, OTA management and performance marketing.",

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
