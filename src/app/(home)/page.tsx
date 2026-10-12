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
import type { Metadata } from "next";
import { contacts } from "../../../contact";

const SITE = "https://fielmente.com";
const TITLE = "Hotel & Hospitality Marketing Agency in India | Fielmente";
const DESCRIPTION =
  "Fielmente is a hotel and hospitality marketing agency for hotels, resorts and restaurants: Google Ads, SEO, social media and OTA management for direct bookings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/`,
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/fielmente_logo.png", width: 1200, height: 630, alt: "Fielmente" }],
  },
};

const stripTags = (html: string) => html.replace(/<[^>]+>/g, "");

/** Organization, local business and website details for search engines and AI answers. */
const homeLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "Fielmente",
    url: `${SITE}/`,
    logo: `${SITE}/fielmente_logo.png`,
    email: contacts.email_1,
    telephone: contacts.phone_1,
    description: DESCRIPTION,
    sameAs: Object.values(contacts.socialContacts),
    contactPoint: [{ "@type": "ContactPoint", telephone: contacts.phone_1, email: contacts.email_1, contactType: "sales", areaServed: ["IN", "AE", "GB", "US"], availableLanguage: ["en", "hi"] }],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/#gurugram`,
    name: "Fielmente Hospitality Marketing",
    url: `${SITE}/`,
    image: `${SITE}/fielmente_logo.png`,
    telephone: contacts.phone_1,
    email: contacts.email_1,
    parentOrganization: { "@id": `${SITE}/#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suncity Success Tower, Golf Course Ext Rd, Sector 65",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122005",
      addressCountry: "IN",
    },
    hasMap: contacts.addressesInIndia[0]?.mapUrl,
    areaServed: ["India", "United Arab Emirates", "United Kingdom", "United States"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "Fielmente",
    url: `${SITE}/`,
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-IN",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (homePageData?.faqsData?.faqs ?? []).map((f: { question: string; answer: string }) => ({
      "@type": "Question",
      name: stripTags(f.question),
      acceptedAnswer: { "@type": "Answer", text: stripTags(f.answer) },
    })),
  },
];

export default function Home() {
  return (
    <main className="mt-18">
      {homeLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
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
