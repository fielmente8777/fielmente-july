import { Container, Section } from "@/components";
import GridCtaSection from "@/components/commonSections/GridCtaSection";
import LandingPgForm from "@/components/forms/LandingPgForm";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";
import ClientSection from "@/components/slider/ClientSection";
import { Metadata } from "next";
import Image from "next/image";
import { contactUsPageData } from "./components/pageData";

export const metadata: Metadata = {
  title:
    "Contact | Fielmente - hotel marketing, SEO, and revenue management services",
  description:
    "Get in touch with Fielmente for hotel marketing, SEO, and revenue management services. Book a consultation and grow your hotel bookings with expert strategies.",
  alternates: {
    canonical: "https://fielmente.com/contact-us/",
  },
  openGraph: {
    title:
      "Contact | Fielmente - hotel Marketing, SEO, and Revenue Management Services",
    description:
      "Get in touch with Fielmente for hotel marketing, SEO, and revenue management services. Book a consultation and grow your hotel bookings with expert strategies.",
    url: "https://fielmente.com/contact-us/",
    images: [
      {
        url: "/fielmente_logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactUsPage() {
  return (
    <main>
      <Section defaultPadding={false} className="pb-36">
        <div className="w-full relative xl:aspect-[4/1.8] md:aspect-4/3.75 aspect-4/9.5">
          <Image
            src="/contact-us-banner.png"
            alt="Contact Us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 md:top-40 top-21 z-10">
            <Container>
              <div className="grid xl:grid-cols-[1.8fr_1fr] grid-cols-1 max-xl:gap-8 text-white">
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
      <GridCtaSection {...contactUsPageData.ctaSection} />

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
