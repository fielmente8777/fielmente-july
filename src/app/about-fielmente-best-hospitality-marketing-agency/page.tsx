import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import { Metadata } from "next";
import { homePageData } from "../(home)/homePageData";
import AboutFounder from "./components/AboutFounder";
import Banner from "./components/Banner";
import GridCard from "./components/GridCard";
import Milestone from "./components/Milestone";
import { aboutUsPageData } from "./components/pageData";
import Unique from "./components/Unique";

export const metadata: Metadata = {
  title: "About Fielmente | Hospitality Marketing Consultants India",
  description:
    "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",
  alternates: {
    canonical:
      "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
  },
  openGraph: {
    url: "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
    type: "website",
    title: "About Fielmente | Hospitality Marketing Consultants India",
    description:
      "About Fielmente, the expert F&amp;B and hospitality marketing consultant. Unveil our transformative expertise &amp; experience in your businesses",

      images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function AboutFielmenteBestHospitalityMarketingAgency() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Fielmente",
            url: "https://fielmente.com/about-fielmente-best-hospitality-marketing-agency/",
            about: { "@id": "https://fielmente.com/#organization" },
          }),
        }}
      />
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
