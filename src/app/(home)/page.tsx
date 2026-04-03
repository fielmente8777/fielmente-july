import { Banner } from "@/components";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import Blogs from "./components/Blogs";
import BusinessPartners from "./components/BusinessPartners";
import ChooseFielmente from "./components/ChooseFielmente";
import CountriesWeWorked from "./components/CountriesWeWorked";
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
import OurWork from "./components/OurWork";
import ProvenResults from "./components/ProvenResults";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import WorkWithIndiasHotel from "./components/WorkWithIndiasHotel";
import { homePageData } from "./homePageData";
import SlidingTitle from "@/components/slider/SlidingTitle";

export default function Home() {
  return (
    <main className="mt-18">
      <Banner {...homePageData.bannerData} />
      <BusinessPartners {...homePageData.businessPartnersData} />
      <HomeAbout {...homePageData.aboutCompanyData} />
      <IndustryWeServe {...homePageData.servingHospitalityData} />
      <ChooseFielmente {...homePageData.chooseFielmenteData}/>
      <OurServices {...homePageData.servicesData} />
      <OurProducts {...homePageData.productsData} />
      <HowItWork {...homePageData.howItWorksData} />
      <ProvenResults {...homePageData.provenResults} />
      <WhyChooseUs {...homePageData.whyChooseUsData} />
      <CountriesWeWorked {...homePageData.countriesWeWorkedIn} />
      <SlidingTitle titles={homePageData.servicesTitles} />
      {/* <OurWork {...homePageData.ourWorkData} /> */}
      <OtaCostsWithFielmente {...homePageData.maximizeGrowthData} />
      <SlidingTitle titles={homePageData.servicesTitles} />
      <MarketingExperts {...homePageData.marketingExpertiseData} />
      <Blogs {...homePageData.blogsData} />
      <WorkWithIndiasHotel {...homePageData.workWithHotel} />
      <OurValuedClient {...homePageData.ourValuedClient} />
      <Testimonials {...homePageData.testimonialsData} />
      <ElevateBrand {...homePageData.ElevateBrand} />
      <Faq {...homePageData.faqsData} />
      <ContactUsSection {...homePageData.contactUsSection}/>
    </main>
  );
}
