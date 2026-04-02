import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import { caseStudyPageData } from "./components/pageData";
import HowHotelScaling from "./components/HowHotelScaling";

export default function CaseStudy() {
  return (
    <main>
      <TextBanner {...caseStudyPageData.bannerData} />
      <HowHotelScaling {...caseStudyPageData.casStudyClientSection} />
      <CtaSection {...caseStudyPageData.ctaData} />
    </main>
  );
}
