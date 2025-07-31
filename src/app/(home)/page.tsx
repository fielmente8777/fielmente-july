import { Banner, Section } from "@/components";
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
      <Section defaultPadding={false} className="relative after:absolute after:bg-[url('/home/bgred.png')] after:bg-cover after:bg-repeat after:opacity-20 after:w-full after:h-full after:-top-[18%] after:right-0 after:z-[-2]">
        <OurValuedClients {...homePageData.ourValuedClientsData} />
        <Testimonials {...homePageData.testimonialsData} />
      </Section>
      <AddsCard {...homePageData.addscardsData} />
      <ServicesTitles title={homePageData.servicesTitles} />
      <Faqs {...homePageData.faqsData} />
    </main>
  );
}
