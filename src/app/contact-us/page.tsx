import { Container, Section } from "@/components";
import LandingPgForm from "@/components/forms/LandingPgForm";
import ClientSection from "@/components/slider/ClientSection";
import Image from "next/image";
import { contactUsPageData } from "./components/pageData";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";

export default function ContactUsPage() {
  return (
    <main>
      <Section defaultPadding={false} className="pb-36">
        <div className="w-full relative aspect-[4/1.8]">
          <Image
            src="/contact-us-banner.png"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 md:top-40 z-10">
            <Container>
              <div className="grid md:grid-cols-[1.8fr_1fr] grid-cols-1 text-white">
                <div className="flex flex-col gap-4">
                  <h1 className="md:text-5xl text-2xl font-semibold">
                    Contact Us
                  </h1>
                  <p className="md:text-lg">We’d love to hear from you!</p>
                </div>
                <div className="">
                  <LandingPgForm
                    btnBgColor="bg-color4"
                    bgColor="bg-white shadow-xl"
                    textColor="text-black"
                    subTextColor="text-secondary"
                    inputBgColor="bg-[#F5F6F8]"
                    placeholderColor="placeholder:text-[#6B7280]"
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Section>
      <ClientSection {...contactUsPageData.clients} />
      <Section>
        <BusinessPartnersSlider
          cards={contactUsPageData.businessPartners}
          wrapperClassName="lg:col-span-4"
          xlSlidesPerView={8}
        />
      </Section>
    </main>
  );
}
