import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { caseStudyPageData } from "./components/pageData";
import HowHotelScaling from "./components/HowHotelScaling";
import { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";


export const metadata: Metadata = {
  title: "Hotel Marketing Case Studies & Results | Fielmente",
  description:
    "Explore Fielmente hotel SEO and advertising case studies, including enquiry growth, campaign set-up and the methods behind each result.",
    alternates: {
      canonical: "https://fielmente.com/case-study/",
    },
    openGraph: {
    url: "https://fielmente.com/case-study/",
    type: "website",
      title: "Hotel Marketing Case Studies & Results | Fielmente",
      description:
        "Explore Fielmente hotel SEO and advertising case studies, including enquiry growth, campaign set-up and the methods behind each result.",
        images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    }
}


export default function CaseStudy() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Case Studies", path: "/case-study/" }]} />
      <TextBanner {...caseStudyPageData.bannerData} />
      <HowHotelScaling {...caseStudyPageData.casStudyClientSection} />
      <CtaSection {...caseStudyPageData.ctaData} />
    </main>
  );
}
