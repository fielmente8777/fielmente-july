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
import HomeScrollReveal from "./components/HomeScrollReveal";

export default function Home() {
  return (
    <main className="mt-18">
      <Banner {...homePageData?.bannerData} />
      <HomeScrollReveal><BusinessPartners {...homePageData?.businessPartnersData} /></HomeScrollReveal>
      <HomeScrollReveal><HomeAbout {...homePageData?.aboutCompanyData} /></HomeScrollReveal>
      <HomeScrollReveal><IndustryWeServe {...homePageData?.servingHospitalityData} /></HomeScrollReveal>
      <HomeScrollReveal><ChooseFielmente {...homePageData?.chooseFielmenteData}/></HomeScrollReveal>
      <HomeScrollReveal><OurServices {...homePageData?.servicesData} /></HomeScrollReveal>
      <HomeScrollReveal><OurProducts {...homePageData?.productsData} /></HomeScrollReveal>
      <HomeScrollReveal><GetFreeDashboardAccess {...homePageData?.getFreeDashboardAccessData} /></HomeScrollReveal>
      <HomeScrollReveal><HowItWork {...homePageData?.howItWorksData} /></HomeScrollReveal>
      <HomeScrollReveal><ProvenResults {...homePageData?.provenResults} /></HomeScrollReveal>
      <HomeScrollReveal><WhyChooseUs {...homePageData?.whyChooseUsData} /></HomeScrollReveal>
      {/* <CountriesWeWorked {...homePageData?.countriesWeWorkedIn} /> */}
      <HomeScrollReveal><ResultsSection {...landingPageData[0]?.resultsSection} /></HomeScrollReveal>
      <HomeScrollReveal><CountriesWeWorked {...landingPageData[0]?.countriesSection} /></HomeScrollReveal>
      <HomeScrollReveal><SlidingTitle titles={homePageData?.servicesTitles} /></HomeScrollReveal>
      {/* <OurWork {...homePageData?.ourWorkData} /> */}
      <HomeScrollReveal><OtaCostsWithFielmente {...homePageData?.maximizeGrowthData} /></HomeScrollReveal>
      <HomeScrollReveal><SlidingTitle titles={homePageData?.servicesTitles} /></HomeScrollReveal>
      <HomeScrollReveal><MarketingExperts {...homePageData?.marketingExpertiseData} /></HomeScrollReveal>
      {/* <Blogs {...homePageData?.blogsData} /> */}
      <HomeScrollReveal><WorkWithIndiasHotel {...homePageData?.workWithHotel} /></HomeScrollReveal>
      <HomeScrollReveal><OurValuedClient {...homePageData?.ourValuedClient} /></HomeScrollReveal>
      {/* <Testimonials {...homePageData?.testimonialsData} /> */}
      <HomeScrollReveal><ElevateBrand {...homePageData?.ElevateBrand} /></HomeScrollReveal>
      <HomeScrollReveal><Faq {...homePageData?.faqsData} /></HomeScrollReveal>
      <HomeScrollReveal><ContactUsSection {...homePageData?.contactUsSection}/></HomeScrollReveal>
    </main>
  );
}
