import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { caseStudyPageData } from "./components/pageData";
import HowHotelScaling from "./components/HowHotelScaling";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hotel Marketing Case Studies | SEO & Growth Results | Fielmente",
  description:
    "See how hotels achieved higher rankings, bookings, and ROI with Fielmente. Real case studies from resorts using SEO and digital marketing strategies.",
    alternates: {
      canonical: "https://fielmente.com/case-study/",
      languages: {
        "en-US": "https://fielmente.com/case-study/",
      },
    },
    openGraph: {
      title: "Hotel Marketing Case Studies | SEO & Growth Results | Fielmente",
      description:
        "See how hotels achieved higher rankings, bookings, and ROI with Fielmente. Real case studies from resorts using SEO and digital marketing strategies.",
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
