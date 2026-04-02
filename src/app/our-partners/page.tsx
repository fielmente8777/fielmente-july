import TextBanner from "@/components/banners/TextBanner";
import { ourPartnersPageData } from "./components/pageData";
import CommonTowColGridLayoutSection from "@/components/commonSections/CommonTowColGridLayoutSection";
import GridCtaSection from "@/components/commonSections/GridCtaSection";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";

export default function OurPartners() {
  return (
    <main>
      <TextBanner {...ourPartnersPageData.banner} />
      <CommonTowColGridLayoutSection
        {...ourPartnersPageData.builtPowerfulPartners}
      />
      <GridCtaSection {...ourPartnersPageData.ctaSection} />
      <div className="py-6">
        <BusinessPartnersSlider cards={ourPartnersPageData.partners} xlSlidesPerView={7}/>
      </div>
    </main>
  );
}
