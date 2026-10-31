import { Banner } from "@/components";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import SlidingTitle from "@/components/slider/SlidingTitle";
import CountriesWeWorked from "../landing-page/components/CountriesWeWorked";
import { landingPageData } from "../landing-page/components/pageData";
import ResultsSection from "../landing-page/components/ResultsSection";
import BusinessPartners from "./components/BusinessPartners";
import PlatformStripSection from "@/components/commonSections/PlatformStripSection";
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
import type { Metadata } from "next";
import { COUNTRY_HREFLANG } from "@/lib/hreflang";
import { contacts } from "../../../contact";
import InternationalExperiencePreview from "@/components/international/InternationalExperiencePreview";

const SITE = "https://fielmente.com";
const TITLE = "Hospitality Marketing Agency in India | Fielmente";
// Kept under ~150 characters so Google (and SEO checkers, max ~1000px) show it in full.
const DESCRIPTION =
  "Grow direct bookings with a hospitality marketing agency for hotels, resorts and restaurants. Explore SEO, Google Ads, AI and measurable client results.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // The country sites name fielmente.com as their x-default, so the home page must return the set.
  alternates: { canonical: `${SITE}/`, languages: COUNTRY_HREFLANG },
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
    areaServed: ["India", "Australia", "Spain", "Canada", "France", "Nepal", "Sri Lanka", "United Kingdom", "United Arab Emirates", "United States", "Oman"],
    subjectOf: { "@type": "AboutPage", url: `${SITE}/international-hospitality-marketing-experience/` },
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
      <HomeScrollReveal><BusinessPartners {...homePageData?.businessPartnersData} /></HomeScrollReveal>
      <HomeScrollReveal><PlatformStripSection /></HomeScrollReveal>
      <HomeScrollReveal><HomeAbout {...homePageData?.aboutCompanyData} /></HomeScrollReveal>
      <InternationalExperiencePreview compact />
      <HomeScrollReveal><IndustryWeServe {...homePageData?.servingHospitalityData} /></HomeScrollReveal>
      <HomeScrollReveal><ChooseFielmente {...homePageData?.chooseFielmenteData}/></HomeScrollReveal>
      <HomeScrollReveal><OurServices {...homePageData?.servicesData} /></HomeScrollReveal>
      <HomeScrollReveal><OurProducts {...homePageData?.productsData} /></HomeScrollReveal>
      <HomeScrollReveal><GetFreeDashboardAccess {...homePageData?.getFreeDashboardAccessData} /></HomeScrollReveal>
      <HomeScrollReveal><HowItWork {...homePageData?.howItWorksData} /></HomeScrollReveal>
      <HomeScrollReveal><ProvenResults {...homePageData?.provenResults} /></HomeScrollReveal>
      <HomeScrollReveal><WhyChooseUs {...homePageData?.whyChooseUsData} /></HomeScrollReveal>
      {/* <CountriesWeWorked {...homePageData?.countriesWeWorkedIn} /> */}
      {/* Same block as the landing page, with its own heading and button text here: the home page already
          has a "Proven Results" section and a "Contact Us" link, and SEO checks flag repeated headings and link text. */}
      <HomeScrollReveal>
        <ResultsSection
          {...landingPageData[0]?.resultsSection}
          title="Our Track Record"
          heading="The Numbers Behind Our Hospitality Clients"
          cta={{ ...landingPageData[0]?.resultsSection?.cta, label: "Talk to Our Team on WhatsApp" }}
        />
      </HomeScrollReveal>
      <HomeScrollReveal><CountriesWeWorked {...landingPageData[0]?.countriesSection} /></HomeScrollReveal>
      <HomeScrollReveal><SlidingTitle titles={homePageData?.servicesTitles} /></HomeScrollReveal>
      {/* <OurWork {...homePageData?.ourWorkData} /> */}
      <HomeScrollReveal><OtaCostsWithFielmente {...homePageData?.maximizeGrowthData} /></HomeScrollReveal>
      <HomeScrollReveal><SlidingTitle titles={homePageData?.moreServicesTitles} /></HomeScrollReveal>
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
