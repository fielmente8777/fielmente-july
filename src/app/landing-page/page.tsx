import SlidingTitle from "@/components/slider/SlidingTitle";
import { Metadata } from "next";
import Banner from "./components/Banner";
import BusinessPartners from "./components/BusinessPartners";
import ContactSection from "./components/ContactSection";
import CountriesWeWorked from "./components/CountriesWeWorked";
import IndustryWeServe from "./components/IndustryWeServe";
import OurClients from "./components/OurClients";
import OurProducts from "./components/OurProducts";
import { landingPageData } from "./components/pageData";
import ReadyToGrow from "./components/ReadyToGrow";
import ResultsSection from "./components/ResultsSection";
import ServicesSection from "./components/ServicesSection";

export const metadata: Metadata = {
  title: "Fielmente : Hospitality Marketing Agency in India",
  description:
    "Best marketing agency in India for Hospitality, resorts and Hospitality",
  keywords:
    "Hospitality Marketing Agency, Hospitality marketing service, Hospitality marketing consultant ,Hospitality solutions,Hospitality business services,Hospitality support, hospitality growth,Hospitality marketing strategy,Hospitality marketing planning,Hospitality marketing plan,Hospitality marketing services,Hospitality marketing consultant,Hospitality marketing agency",
  alternates: {
    canonical: "https://fielmente.com/landing-page/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://fielmente.com/hospitality/" }],
  openGraph: {
    title: "Fielmente : Hotel Marketing Agency in India",
    description:
      "Best marketing agency in India for hotels, resorts and restaurant",
    url: "https://fielmente.com/hospitality/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://fielmente.com/hospitality/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

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
      {/* {page.aboutSection && <AboutSection {...page.aboutSection} />} */}
      {page.industriesSection && (
        <IndustryWeServe {...page.industriesSection} />
      )}
      {page.readyToGrowSection && <ReadyToGrow {...page.readyToGrowSection} />}
      {page.servicesSection && <ServicesSection {...page.servicesSection} />}
      {page.productsData && <OurProducts {...page.productsData} />}
      {page.resultsSection && <ResultsSection {...page.resultsSection} />}
      {/* {page.growthSection && <GrowthSection {...page.growthSection} />} */}
      {page.countriesSection && (
        <CountriesWeWorked {...page.countriesSection} />
      )}
      {page.servicesTitles && <SlidingTitle titles={page.servicesTitles} />}
      {page.ourClient && <OurClients {...page.ourClient} />}
      {page.contactSection && <ContactSection {...page.contactSection} />}
    </main>
  );
}
