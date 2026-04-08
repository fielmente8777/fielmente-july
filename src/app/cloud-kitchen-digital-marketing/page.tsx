import { Metadata } from "next";
import Banner2 from "../industries-we-serve/[...industry]/components/Banner2";
import Clients from "../industries-we-serve/[...industry]/components/Clients";
import EnquirySection from "../industries-we-serve/[...industry]/components/EnquirySection";
import MarketingStrategy from "../industries-we-serve/[...industry]/components/MarketingStrategy";
import Milestone from "../industries-we-serve/[...industry]/components/Milestone";
import WhyNeedWebsite from "../industries-we-serve/[...industry]/components/WhyNeedWebsite";
import WhyYouNeedGrid from "../industries-we-serve/[...industry]/components/WhyYouNeedGrid";
import { commonPageData } from "./component/commonpageData";

export const metadata: Metadata = {
  title: "Best Cloud Kitchen Marketing Agency in India- Fielmente",
  description:
    "Fielmente is a premier cloud kitchen marketing agency in India and skyrocket your cloud kitchen success digitally with our amazing marketing services.",
  alternates: {
    canonical: "https://fielmente.com/cloud-kitchen-digital-marketing/",
    languages: {
      "en-US": "https://fielmente.com/cloud-kitchen-digital-marketing/",
    },
  },
  openGraph: {
    title: "Best Cloud Kitchen Marketing Agency in India- Fielmente",
    description:
      "Fielmente is a premier cloud kitchen marketing agency in India and skyrocket your cloud kitchen success digitally with our amazing marketing services.",
      images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
   
  },
};

export default function CloudKitchenDigitalMarketing() {
  const industry = commonPageData.find(
    (ind) => ind.slug === "cloud-kitchen-digital-marketing"
  );
  return (
    <main>
      {industry?.banner2 && <Banner2 {...industry.banner2} />}
      {industry?.MarketingStrategy && (
        <MarketingStrategy {...industry.MarketingStrategy} />
      )}
      {industry?.stats && <Milestone stats={industry.stats} />}
      {industry?.whyNeedWebsite && (
        <WhyNeedWebsite {...industry.whyNeedWebsite} />
      )}
      {industry?.whyNeedSEO2 && (
        <WhyYouNeedGrid {...industry.whyNeedSEO2} index={1} />
      )}
      {industry?.whyNeedInfluencerMarketing && (
        <WhyYouNeedGrid {...industry.whyNeedInfluencerMarketing} />
      )}
      {industry?.powerOfSocialMedia && (
        <MarketingStrategy {...industry.powerOfSocialMedia} />
      )}

      {industry?.clients && <Clients {...industry.clients} />}
      {industry?.enquiry2 && <EnquirySection {...industry.enquiry2} />}
    </main>
  );
}
