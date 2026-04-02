import { SectionWithContainer } from "@/components";
import { industriesWeServePageData } from "./components/pageData";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import SectionCard from "./components/SectionCard";
import SectionHeading from "@/components/typography/SectionHeadingDesc";
import OurServiceSection from "./components/OurServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fielmente Marketing Agency - Industries We Serve | Contact Now",
  description:
    "Here's our expertise in the hospitality industries we serve: hotels, restaurants, cloud kitchens, and resorts. Get in touch with our experts!",
  alternates: {
    canonical: "https://fielmente.com/industries-we-serve/",
    languages: {
      "en-US": "https://fielmente.com/industries-we-serve/",
    },
  },
  openGraph: {
    title: "Fielmente Marketing Agency - Industries We Serve | Contact Now",
    description:
      "Here's our expertise in the hospitality industries we serve: hotels, restaurants, cloud kitchens, and resorts. Get in touch with our experts!",
  },
};
export default function IndustriesWeServe() {
  return (
    <main className="mt-18 bg-gradient">
      <SectionWithContainer>
        <h1 className="md:text-6xl text-primary font-semibold text-center">
          {industriesWeServePageData.title}
        </h1>
        <p className="text-center md:text-xl mt-6 font-medium">
          {industriesWeServePageData.subTitle}
        </p>
        <CtaBtn
          label={industriesWeServePageData.cta.label}
          type={industriesWeServePageData.cta.type}
          className="mx-auto bg-primary text-white mt-8 md:mt-12 md:text-lg rounded-2xl"
        />
      </SectionWithContainer>
      {industriesWeServePageData.sections.map((section, index) => (
        <SectionCard key={index} {...section} index={index} />
      ))}
      <SectionWithContainer>
        <SectionHeading
          subLevel={2}
          subTitle={industriesWeServePageData.WhyFielmente.title}
          textCenter
        />
        <p className="text-center md:text-lg text-secondary mt-6 ">
          {industriesWeServePageData.WhyFielmente.description}
        </p>
      </SectionWithContainer>
      <OurServiceSection {...industriesWeServePageData.ourService} />
    </main>
  );
}
