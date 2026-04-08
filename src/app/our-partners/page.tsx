import TextBanner from "@/components/banners/TextBanner";
import CommonTowColGridLayoutSection from "@/components/commonSections/CommonTowColGridLayoutSection";
import GridCtaSection from "@/components/commonSections/GridCtaSection";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";
import { ourPartnersPageData } from "./components/pageData";

export const metadata = {
  title: "Partner with Fielmente | Hotel Growth Platform & OTA Integrations",
  
  description:
    "Partner with Fielmente to scale your hotel business using powerful tools, seamless OTA integrations, and trusted platforms like Google, AWS, Booking.com, and Airbnb.",
  
  keywords: [
    "hotel growth platform",
    "OTA integration hotel",
    "hotel automation tools",
    "hotel booking platforms integration",
    "hospitality technology partner",
    "hotel SaaS platform India",
    "Fielmente partners",
    "hotel revenue tools",
    "hotel business automation",
    "channel manager integrations"
  ],


  alternates: {
    canonical: "https://fielmente.com/our-partners", 

  },

  openGraph: {
    title: "Partner with Fielmente | Scale Your Hotel Business",
    description:
      "Boost hotel revenue with Fielmente’s powerful integrations with Google, Meta, AWS, Booking.com, Airbnb & more.",
    url: "https://fielmente.com/our-partners",
    siteName: "Fielmente",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fielmente Partner Ecosystem",
    description:
      "Seamless integrations with top hotel booking & marketing platforms.",
  },

  
};
export default function OurPartners() {
  return (
    <main>
      <TextBanner {...ourPartnersPageData.banner} />
      <CommonTowColGridLayoutSection
        {...ourPartnersPageData.builtPowerfulPartners}
      />
      <GridCtaSection {...ourPartnersPageData.ctaSection} />
      <div className="py-6">
        <BusinessPartnersSlider
          cards={ourPartnersPageData.partners}
          xlSlidesPerView={7}
        />
      </div>
    </main>
  );
}
