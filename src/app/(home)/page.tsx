import { Banner } from "@/components";
import { homePageData } from "./homePageData";
import {
  AboutCompany,
  AIPoweredServices,
  ChooseUs,
  CountriesWeWorkedIn,
  Faqs,
  HowItWorks,
  MarketingPartners,
  MaximizeGrowth,
  Milestone,
  OurValuedClients,
  OurWork,
  ServicesTitles,
  ServingHospitality,
  Testimonials,
} from "./components";
import { AddsCard } from "@/components/cards";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <MarketingPartners {...homePageData.marketingPartnersData} />
      <AboutCompany {...homePageData.aboutCompanyData} />
      <ServingHospitality {...homePageData.servingHospitalityData} />
      <AIPoweredServices {...homePageData.servicesData} />
      <HowItWorks {...homePageData.howItWorksData} />
      <Milestone milestone={homePageData.milestone} />
      <ChooseUs {...homePageData.chooseUsData} />
      <OurWork {...homePageData.ourWork} />
      <ServicesTitles title={homePageData.servicesTitles} />
      <CountriesWeWorkedIn {...homePageData.countriesWeWorkedIn} />
      <MaximizeGrowth {...homePageData.maximizeGrowthData} />
      <OurValuedClients {...homePageData.ourValuedClientsData} />
      <Testimonials {...homePageData.testimonialsData} />
      <AddsCard {...homePageData.addscardsData} />
      <ServicesTitles title={homePageData.servicesTitles} />
      <Faqs {...homePageData.faqsData} />
    </main>
  );
}
