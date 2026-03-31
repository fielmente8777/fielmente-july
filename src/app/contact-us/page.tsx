import { Container, Section } from "@/components";
import LandingPgForm from "@/components/forms/LandingPgForm";
import ClientSection from "@/components/slider/ClientSection";
import Image from "next/image";
import { contactUsPageData } from "./components/pageData";
import BusinessPartnersSlider from "@/components/slider/BusinessPartnersSlider";
import CtaSection from "@/components/common/CtaSection";
import { CtaBtn } from "@/components/buttons/CtaBtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Fielmente - Fielmente",
  description:
    "Contact usWe're here just for you.We are always ready to lend an ear, offer advice and get your project over the line.We are always ready to lend an ear, offer advice and get your project over the line. Connect with UsHow can we help you right now?In order to make sure your website is user friendly and optimized for Google’s algorithm, our on-site optimization experts clean up the code and copy. What is digital marketing? Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth. What is SEO? SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website’s chances of being found by users searching for relevant information or products. How does SEO affect your sales? SEO can positively impact sales by:SEO drives sales by boosting visibility through higher rankings,SEO helps attracts potential customers actively seeking products/services.It helps in Higher Ranking. Top ranks establish credibilitySEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits. What do you need to start your marketing? To begin marketing effectively,You need to have a clear understanding of your target audience,You need defined goals,You should also have a well-designed marketing strategy,The major thing you should need is compelling content and suitable channels (like social media, website),You must have knowledge about Analytics tools to track performance.You should adapt and refine your approach based on data and audience response. How does SEO work? SEO works byOptimizing website elements (keywords, content, meta tags) to match user search intent.Search engines crawl and index these optimized pages, After that, it ranks them based on relevance and authority.Higher rankings lead to increased visibility and organic traffic. How to start SEO Campaign? Identify relevant keywords your audience searches for.Optimize your On-Page (webpage content, titles, and meta descriptions) with chosen keywords.Ensure site structure, speed, and mobile-friendliness, that is to optimize your Technical Sites.Create valuable, engaging, and shareable content.Secure high-quality backlinks from reputable websites.Make the best Analytics setup. Install tools to track performance and make data-driven adjustments. Fielmente",
  alternates: {
    canonical: "https://fielmente.com/contact/",
    languages: {
      "en-US": "https://fielmente.com/en/contact/",
    },
  },
  openGraph: {
    title: "Contact Fielmente - Fielmente",
    description:
      "Contact us We're here just for you.We are always ready to lend an ear, offer advice and get your project over the line.We are always ready to lend an ear, offer advice and get your project over the line. Connect with UsHow can we help you right now?In order to make sure your website is user friendly and optimized for Google’s algorithm, our on-site optimization experts clean up the code and copy. What is digital marketing? Digital marketing is all about promoting products, services, or brands using online platforms, strategies, and tools. It surrounds various channels like social media, email, search engines, and websites to reach and engage target audiences. Its main aim is to increase awareness, conversions, and business growth. What is SEO? SEO (Search Engine Optimization) is the practice of optimizing website content, structure, and various other factors to improve its visibility in search engine results. This helps increase organic traffic(non-paid traffic) and enhances a website’s chances of being found by users searching for relevant information or products. How does SEO affect your sales? SEO can positively impact sales by:SEO drives sales by boosting visibility through higher rankings,SEO helps attracts potential customers actively seeking products/services.It helps in Higher Ranking. Top ranks establish credibilitySEO also helps faster loading and mobile-friendliness improve user experience, raising engagement.A successful strategy ensures lasting traffic and sales growth, yielding sustained benefits. What do you need to start your marketing? To begin marketing effectively,You need to have a clear understanding of your target audience,You need defined goals,You should also have a well-designed marketing strategy,The major thing you should need is compelling content and suitable channels (like social media, website),You must have knowledge about Analytics tools to track performance.You should adapt and refine your approach based on data and audience response. How does SEO work? SEO works byOptimizing website elements (keywords, content, meta tags) to match user search intent.Search engines crawl and index these optimized pages, After that, it ranks them based on relevance and authority.Higher rankings lead to increased visibility and organic traffic. How to start SEO Campaign? Identify relevant keywords your audience searches for.Optimize your On-Page (webpage content, titles, and meta descriptions) with chosen keywords.Ensure site structure, speed, and mobile-friendliness, that is to optimize your Technical Sites.Create valuable, engaging, and shareable content.Secure high-quality backlinks from reputable websites.Make the best Analytics setup. Install tools to track performance and make data-driven adjustments. Fielmente",
  },
};

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
      <section className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#020617] via-[#020c2b] to-[#0a1a3a] rounded-2xl px-8 py-10 md:px-10 md:py-10 text-white">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* LEFT */}
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                  Start growing with <br /> Eazotel
                </h2>

                <div className="flex gap-4 mt-4 flex-wrap">
                  <CtaBtn
                    label="Try Eazotel"
                    type="button"
                    className="bg-white text-blue-600 border-transparent rounded-md"
                  />
                  <CtaBtn
                    label="Book a demo"
                    type="button"
                    icon="arrow"
                    className="border-white/30 text-white rounded-md"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Run your hotel operations effortlessly with our free plan.
                  Upgrade anytime to unlock advanced automation, integrations,
                  and revenue tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
