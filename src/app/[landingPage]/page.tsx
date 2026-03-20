import SlidingTitle from "@/components/slider/SlidingTitle";
import BusinessPartners from "./components/BusinessPartners";
import { landingPageData } from "./components/pageData";
import OurClients from "./components/OurClients";
import CountriesWeWorked from "./components/CountriesWeWorked";
import GrowthSection from "./components/GrowthSection";
import OurProducts from "./components/OurProducts";
import ServicesSection from "./components/ServicesSection";
import IndustryWeServe from "./components/IndustryWeServe";
import AboutSection from "./components/AboutSection";
import ReadyToGrow from "./components/ReadyToGrow";
import Banner from "./components/Banner";
import ContactSection from "./components/ContactSection";
import ResultsSection from "./components/ResultsSection";

interface Params {
  params: {
    landingPage: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export async function generateStaticParams() {
  const posts = await landingPageData;

  return posts.map((post) => ({
    landingPage: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;

  const post = landingPageData.find((post) => post.slug === path.landingPage);
  return {
    title: post?.metaData.title,
    description: post?.metaData.description,
    alternate: {
      //   href: `https://fielmente.com/${post?.slug}/`,
      canonical: `https://fielmente.com/${post?.slug}/`,
    },
    openGraph: {
      title: post?.metaData.title,
      description: post?.metaData.description,
      url: `https://fielmente.com/${post?.slug}/`,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `https://fielmente.com/${post?.slug}-og.png`,
          width: 1200,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LandingPage({ params }: Params) {
  const path = await params;
  const page = landingPageData.find((pg) => pg.slug === path.landingPage);

  if (!page) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main>
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
