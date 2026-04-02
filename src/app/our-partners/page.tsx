import TextBanner from "@/components/banners/TextBanner";
import CommonTowColGridLayoutSection from "@/components/commonSections/CommonTowColGridLayoutSection";
import GridCtaSection from "@/components/commonSections/GridCtaSection";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";
import { ourPartnersPageData } from "./components/pageData";

// export const metadata: Metadata = {
//   title: "Fielmente | Our Partners",
//   description:
//     "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
//   alternates: {
//     canonical: "https://fielmente.com/our-partners/",
//     languages: {
//       "en-US": "https://fielmente.com/our-partners/",
//     },
//   },
//   openGraph: {
//     title: "Fielmente | Our Partners",
//     description:
//       "Fielmente is the best Hotel marketing company in India. We are offering 360-degree hotel marketing consultancy from website designing to online marketing.",
//   },
// };
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
