import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import { homePageData } from "../(home)/homePageData";
import Banner from "./components/Banner";
import { aboutUsPageData } from "./components/pageData";
import AboutFounder from "./components/AboutFounder";
import GridCard from "./components/GridCard";
import Milestone from "./components/Milestone";
import Unique from "./components/Unique";
import GetStarted from "./components/GetStarted";

export default function AboutFielmenteBestHospitalityMarketingAgency() {
  return (
    <main>
      <Banner {...aboutUsPageData.bannerData} />
      <AboutFounder {...aboutUsPageData.aboutSection} />
      <GridCard {...aboutUsPageData.ideasSection}/>
      <GridCard {...aboutUsPageData.marketingSection} index={2}/>
      <Milestone {...aboutUsPageData.statsData} />
      <Unique {...aboutUsPageData.uniqueSection} />
      <GetStarted {...aboutUsPageData.collaborationSection} />
      <ContactUsSection {...homePageData.contactUsSection} />
    </main>
  );
}
