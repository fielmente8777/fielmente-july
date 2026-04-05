
import { Metadata } from "next";
import AboutFounder from "../about-fielmente-best-hospitality-marketing-agency/components/AboutFounder";
import GridCard from "../about-fielmente-best-hospitality-marketing-agency/components/GridCard";
import Milestone from "../about-fielmente-best-hospitality-marketing-agency/components/Milestone";
import Unique from "../about-fielmente-best-hospitality-marketing-agency/components/Unique";
import GetStarted from "../about-fielmente-best-hospitality-marketing-agency/components/GetStarted";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import { aboutUsPageData } from "../about-fielmente-best-hospitality-marketing-agency/components/pageData";
import { homePageData } from "../(home)/homePageData";
import Banner from "../about-fielmente-best-hospitality-marketing-agency/components/Banner";

export const metadata: Metadata = {
  title: "Fielmente Agency | Best Hospitality Marketing Consultants in India",
  description:
    "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
  alternates: {
    canonical:
      "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
    languages: {
      "en-US":
        "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
    },
  },
  openGraph: {
    title: "Fielmente Agency | Best Hospitality Marketing Consultants in India",
    description:
      "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
      images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutFielmenteBestHospitalityMarketingAgency() {
  return (
    <main>
      <Banner {...aboutUsPageData.bannerData} />
      <AboutFounder {...aboutUsPageData.aboutSection} />
      <GridCard {...aboutUsPageData.ideasSection} />
      <GridCard {...aboutUsPageData.marketingSection} index={2} />
      <Milestone {...aboutUsPageData.statsData} />
      <Unique {...aboutUsPageData.uniqueSection} />
      {/* <GetStarted {...aboutUsPageData.collaborationSection} /> */}
      <ContactUsSection {...homePageData.contactUsSection} />
    </main>
  );
}
