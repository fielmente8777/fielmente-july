import Banner2 from "./component/Banner2";
import { newPagedata } from "./newPageData";
import {
  ChooseUs,
  ContactCard,
  CountiesWeWorked,
  OtaAdd,
  Revenue,
  RevenueManagementServices,
} from "./component";
import OurClients from "./component/OurClients";

export const metadata = {
  title: "Fielmente | Hotel Revenue Management & Hospitality Marketing Agency",
  description:
    "Fielmente is a leading hospitality marketing and revenue management agency with 15+ years of expertise. We help hotels, resorts, and restaurants maximize OTA bookings, revenue, and growth with AI-driven strategies.",
  
  keywords: [
    "hotel revenue management company",
    "hospitality marketing agency India",
    "OTA management services",
    "hotel marketing services",
    "resort marketing agency",
    "dynamic pricing hotel",
    "hotel SEO services",
    "channel management hotel",
    "AI hotel marketing",
    "Fielmente"
  ],


  alternates: {
    canonical: "https://fielmente.com/hotel-ota-management/",
  },

  openGraph: {
    title: "Fielmente | AI-Driven Hotel Revenue Growth Partner",
    description:
      "Boost your hotel revenue with Fielmente's expert OTA management, dynamic pricing, and data-driven marketing strategies.",
    url: "https://fielmente.com/hotel-ota-management/",
    siteName: "Fielmente",
    images: [
      {
        url: "https://fielmente.com/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fielmente | Hotel Revenue Management Experts",
    description:
      "AI-driven hospitality marketing & revenue management solutions for hotels, resorts & restaurants.",
  },

 
};

const page = () => {
  return (
    <main className="overflow-x-clip mt-22 border-t border-main-border">
      <Banner2 {...newPagedata.bannerData} />
      <Revenue {...newPagedata.revenue} />
      <RevenueManagementServices {...newPagedata.revenueManagementServices} />
      <ChooseUs {...newPagedata.chooseUs} />
      <ContactCard {...newPagedata.contactCard} />
      <CountiesWeWorked {...newPagedata.countriesWeWorkedWith} />
      <OurClients {...newPagedata.ourClients} />
      <OtaAdd {...newPagedata.otaAdd} />
    </main>
  );
};

export default page;
