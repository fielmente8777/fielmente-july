import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { caseStudyPageData } from "./components/pageData";
import HowHotelScaling from "./components/HowHotelScaling";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Fielmente | Case Study",
  description:
    "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
    alternates: {
      canonical: "https://fielmente.com/case-study/",
      languages: {
        "en-US": "https://fielmente.com/case-study/",
      },
    },
    openGraph: {
      title: "Fielmente | Case Study",
      description:
        "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
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
      <TextBanner {...caseStudyPageData.bannerData} />
      <HowHotelScaling {...caseStudyPageData.casStudyClientSection} />
      <CtaSection {...caseStudyPageData.ctaData} />
    </main>
  );
}
