import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { clientPageData } from "./components/pageData";
import ClientSection from "./components/ClientSection";
import CommonTowColGridLayoutSection from "@/components/commonSections/CommonTowColGridLayoutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients | Hospitality Brands That Trust Fielmente",

  description:
    "Explore hospitality brands, hotels, and restaurants that trust Fielmente for marketing, SEO, and revenue growth solutions across India and globally.",

  alternates: {
    canonical: "https://fielmente.com/our-clients/",
    languages: {
      "en-US": "https://fielmente.com/our-clients/",
    },
  },
  openGraph: {
    title: "Our Clients | Hospitality Brands That Trust Fielmente",

    description:
      "Explore hospitality brands, hotels, and restaurants that trust Fielmente for marketing, SEO, and revenue growth solutions across India and globally.",

    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function OurClientsPage() {
  return (
    <main>
      <TextBanner {...clientPageData.bannerData} />

      <CommonTowColGridLayoutSection
        {...clientPageData.clientSection}
        cards={clientPageData.clientSection.clients.slice(0, 16)}
      />
      <ClientSection {...clientPageData.brandsScaledWithUs} />
      <CtaSection {...clientPageData.ctaSection} />
    </main>
  );
}
