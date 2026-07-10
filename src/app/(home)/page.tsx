import { Banner } from "@/components";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import SlidingTitle from "@/components/slider/SlidingTitle";
import CountriesWeWorked from "../landing-page/components/CountriesWeWorked";
import { landingPageData } from "../landing-page/components/pageData";
import ResultsSection from "../landing-page/components/ResultsSection";
import BusinessPartners from "./components/BusinessPartners";
import ChooseFielmente from "./components/ChooseFielmente";
import ElevateBrand from "./components/ElevateBrand";
import Faq from "./components/Faq";
import HomeAbout from "./components/HomeAbout";
import HowItWork from "./components/HowItWork";
import IndustryWeServe from "./components/IndustryWeServe";
import MarketingExperts from "./components/MarketingExperts";
import OtaCostsWithFielmente from "./components/OtaCostsWithFielmente";
import OurProducts from "./components/OurProducts";
import OurServices from "./components/OurServices";
import OurValuedClient from "./components/OurValuedClient";
import ProvenResults from "./components/ProvenResults";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkWithIndiasHotel from "./components/WorkWithIndiasHotel";
import { homePageData } from "./homePageData";
import GetFreeDashboardAccess from "./components/GetFreeDashboardAccess";

export default function Home() {
  return (
    <main className="mt-18">
      <Banner {...homePageData?.bannerData} />
      <BusinessPartners {...homePageData?.businessPartnersData} />
      <HomeAbout {...homePageData?.aboutCompanyData} />
      <IndustryWeServe {...homePageData?.servingHospitalityData} />
      <ChooseFielmente {...homePageData?.chooseFielmenteData}/>
      <OurServices {...homePageData?.servicesData} />
      <OurProducts {...homePageData?.productsData} />
      <GetFreeDashboardAccess {...homePageData?.getFreeDashboardAccessData} />
      <HowItWork {...homePageData?.howItWorksData} />
      <ProvenResults {...homePageData?.provenResults} />
      <WhyChooseUs {...homePageData?.whyChooseUsData} />
      {/* <CountriesWeWorked {...homePageData?.countriesWeWorkedIn} /> */}
      <ResultsSection {...landingPageData[0]?.resultsSection} />
      <CountriesWeWorked {...landingPageData[0]?.countriesSection} />
      <SlidingTitle titles={homePageData?.servicesTitles} />
      {/* <OurWork {...homePageData?.ourWorkData} /> */}
      <OtaCostsWithFielmente {...homePageData?.maximizeGrowthData} />
      <SlidingTitle titles={homePageData?.servicesTitles} />
      <MarketingExperts {...homePageData?.marketingExpertiseData} />
      {/* <Blogs {...homePageData?.blogsData} /> */}
      <WorkWithIndiasHotel {...homePageData?.workWithHotel} />
      <OurValuedClient {...homePageData?.ourValuedClient} />
      {/* <Testimonials {...homePageData?.testimonialsData} /> */}
      <ElevateBrand {...homePageData?.ElevateBrand} />
      <Faq {...homePageData?.faqsData} />
      <ContactUsSection {...homePageData?.contactUsSection}/>
    </main>
  );
}
