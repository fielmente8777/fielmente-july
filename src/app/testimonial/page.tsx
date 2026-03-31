import { CtaBtn } from "@/components/buttons/CtaBtn";
import FeaturedTestimonials from "./components/FeaturedTestimonials";
import { homePageData } from "@/app/(home)/homePageData";
import CtaSection from "@/components/common/CtaSection";
import Section from "@/components/sectionComponants/Section";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
export default function TestimonialPage() {
  const { testimonialsData } = homePageData;

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="relative bg-black py-28 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 300"
            className="w-full h-[260px]"
            preserveAspectRatio="none"
          >
            {/* BASE BLACK */}
            <path
              d="M0,0 L1440,0 L1440,110 C1000,70 400,70 0,110 Z"
              fill="#020617"
            />

            {/* VERY SUBTLE NAVY */}
            <path
              d="M0,0 L1440,0 L1440,160 C1000,120 400,120 0,160 Z"
              fill="#020c2b"
              opacity="0.5"
            />

            {/* FAINT BLUE HINT */}
            <path
              d="M0,0 L1440,0 L1440,210 C900,180 500,180 0,210 Z"
              fill="#0a1a3a"
              opacity="0.25"
            />
          </svg>
        </div>
        {/* CONTENT */}
        <div className="relative z-10">
          <div className="flex justify-center mb-4">
            <span className="px-4 py-1 text-sm rounded-full bg-white/10 text-gray-300 border border-white/20">
              Testimonials
            </span>
          </div>

          <h1 className="text-5xl font-bold">
            What Our <span className="text-blue-500">Customers</span> Say
          </h1>

          <p className="text-gray-400 mt-4">
            Hear directly from hoteliers who transformed their business
          </p>
        </div>
      </div>
      <div className="bg-gray-100 py-20 text-black">
        <SectionHeading
          title={testimonialsData.title}
          subTitle={testimonialsData.subTitle}
          subTitleClassName="span-color-2"
        />
        <FeaturedTestimonials cards={testimonialsData.cards} />
      </div>
      {/* ✅ CTA SECTION HERE */}
      <Section className="py-12">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <CtaSection
            title="Ready to grow your hotel business?"
            description="Join 120+ hotels already using Eazotel to increase bookings and streamline operations."
          >
            <CtaBtn
              label="Try Eazotel"
              type="button"
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            />
          </CtaSection>
        </div>
      </Section>
    </div>
  );
}
