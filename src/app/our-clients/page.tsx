import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { clientPageData } from "./components/pageData";
import ClientSection from "./components/ClientSection";
import CommonTowColGridLayoutSection from "@/components/commonSections/CommonTowColGridLayoutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fielmente | Our Clients",
  description:
    "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
  alternates: {
    canonical: "https://fielmente.com/our-clients/",
    languages: {
      "en-US": "https://fielmente.com/our-clients/",
    },
  },
  openGraph: {
    title: "Fielmente | Our Clients",
    description:
      "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
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
