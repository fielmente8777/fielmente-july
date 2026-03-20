import SlidingTitle from "@/components/slider/SlidingTitle";
import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import BusinessPartners from "./components/BusinessPartners";
import ContactSection from "./components/ContactSection";
import CountriesWeWorked from "./components/CountriesWeWorked";
import GrowthSection from "./components/GrowthSection";
import IndustryWeServe from "./components/IndustryWeServe";
import OurClients from "./components/OurClients";
import OurProducts from "./components/OurProducts";
import { landingPageData } from "./components/pageData";
import ReadyToGrow from "./components/ReadyToGrow";
import ResultsSection from "./components/ResultsSection";
import ServicesSection from "./components/ServicesSection";

export default function LandingPage() {
  const page = landingPageData.find((pg) => pg.slug === "landing-page");
  if (!page) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main className="overflow-x-clip">
      {page.heroSection && <Banner {...page.heroSection} />}
      {page.businessPartnersData && (
        <BusinessPartners {...page.businessPartnersData} />
      )}
      {page.aboutSection && <AboutSection {...page.aboutSection} />}
      {page.industriesSection && (
        <IndustryWeServe {...page.industriesSection} />
      )}
      {page.readyToGrowSection && <ReadyToGrow {...page.readyToGrowSection} />}
      {page.servicesSection && <ServicesSection {...page.servicesSection} />}
      {page.productsData && <OurProducts {...page.productsData} />}
      {page.resultsSection && <ResultsSection {...page.resultsSection} />}
      {page.growthSection && <GrowthSection {...page.growthSection} />}
      {page.countriesSection && (
        <CountriesWeWorked {...page.countriesSection} />
      )}
      {page.servicesTitles && <SlidingTitle titles={page.servicesTitles} />}
      {page.ourClient && <OurClients {...page.ourClient} />}
      {page.contactSection && <ContactSection {...page.contactSection} />}
    </main>
  );
}
