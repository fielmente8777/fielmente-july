import type { ServiceKey } from "@/@types/@industryTemplateType";
import { AGENCY_PAGES } from "@/app/(agency)/data";
import HowHotelScaling from "@/app/case-study/components/HowHotelScaling";
import PageHero from "@/components/banners/PageHero";
import ConsultButton from "@/components/buttons/ConsultButton";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import CtaBandSection from "@/components/commonSections/CtaBandSection";
import FaqListSection from "@/components/commonSections/FaqListSection";
import PartnerStripSection from "@/components/commonSections/PartnerStripSection";
import StatsSection from "@/components/commonSections/StatsSection";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PORTFOLIO_STATS } from "@/utils/agencyData";
import { caseStudyCards } from "@/utils/caseStudyCards";
import { Icon } from "@/utils/serviceIcons";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight, LuMinus } from "react-icons/lu";
import { industries, legacyIndustries } from "./data/industries";
import { serviceHref, serviceTypes } from "./data/services";

const title = "Hospitality Marketing Agency | Industries We Serve | Fielmente";
const description =
  "Marketing and technology for hotels, restaurants, resorts, homestays and villas, travel companies and cloud kitchens — Google Ads, SEO, social media, websites and automation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://fielmente.com/industries-we-serve/",
    languages: { "en-US": "https://fielmente.com/industries-we-serve/" },
  },
  openGraph: {
    title,
    description,
    url: "https://fielmente.com/industries-we-serve/",
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/fielmente_logo.png", width: 1200, height: 630 }],
  },
};

// Every service offered in at least one industry, in the order they first appear.
const allServices = [...new Set(industries.flatMap((i) => i.services))] as ServiceKey[];

const faqs = [
  {
    q: "Do you only work with hospitality businesses?",
    a: "Yes. Hotels, resorts, restaurants, homestays and villas, travel companies and cloud kitchens are all we do, so we already know your channels, seasons and guests.",
  },
  {
    q: "Can you handle both marketing and technology?",
    a: "Yes. The same team runs your ads, SEO and social media, builds your website, and sets up Fielmente's booking engine, CRM and guest messaging tools.",
  },
  {
    q: "Where are your clients based?",
    a: "Mostly across India, from hill-station resorts in Uttarakhand to city hotels and restaurants, plus a few properties abroad.",
  }, // REVIEW: confirm regions
  {
    q: "How do we get started?",
    a: "Book a free consultation. We'll review your current marketing and suggest where to start, with no obligation.",
  },
];

export default function IndustriesWeServe() {
  const featured = caseStudyCards(["naturoville-google-ads", "hotel-green-castle-google-ads", "naad-wellness-google-ads", "ebc-mussoorie-google-ads"]);
  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries we serve" }]}
        eyebrow="Industries we serve"
        title="Marketing and technology for hospitality businesses"
        lede="Hotels, resorts, restaurants, homestays and travel companies each win guests differently. We build the marketing, websites and automation that fit how your guests search, compare and book."
        actions={
          <>
            <ConsultButton />
            <WhatsAppChatButton />
          </>
        }
        image="/home/im8.webp"
        imageAlt="Hotel facade lit up at dusk"
        floating={
          <div className="flex items-center gap-4">
            <span className="text-[30px] font-bold leading-none text-orange-primary">{PORTFOLIO_STATS[1].value}</span>
            <span className="text-[13px]/snug text-[#55536E]">
              {PORTFOLIO_STATS[1].label}
              <span className="block font-semibold text-primary2">from Google Ads we manage</span>
            </span>
          </div>
        }
      />

      <PartnerStripSection />

      {/* Industries */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Choose your industry"
            title="Who we work with"
            lede="Pick your business type to see the services, results and tools built for it."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {industries.map((I) => (
              <li key={I.slug}>
                <Link
                  href={`/industries-we-serve/${I.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E3EC] bg-white hover:border-primary2/40 hover:shadow-[0_24px_60px_-30px_rgba(17,13,60,0.45)] transition-all"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image
                      src={I.heroImage}
                      alt={I.heroAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-primary">
                      <Icon name={I.icon} size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">{I.services.length} services</p>
                    <h2 className="text-xl md:text-2xl font-bold">{I.name}</h2>
                    <p className="text-[15px]/relaxed text-[#55536E]">{I.cardLine}</p>
                    <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-primary">
                      Explore {I.label.toLowerCase()} <LuArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            {legacyIndustries.map((L) => (
              <li key={L.slug}>
                <Link
                  href={`/industries-we-serve/${L.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#E4E3EC] bg-white hover:border-primary2/40 hover:shadow-[0_24px_60px_-30px_rgba(17,13,60,0.45)] transition-all"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <Image src={L.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-primary">
                      <Icon name="utensils" size={20} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5 md:p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sapphireBlue">Delivery brands</p>
                    <h2 className="text-xl md:text-2xl font-bold">{L.name}</h2>
                    <p className="text-[15px]/relaxed text-[#55536E]">{L.cardLine}</p>
                    <span className="mt-auto pt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-primary">
                      Explore cloud kitchen marketing <LuArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Markets and specialties (agency landing pages) */}
      <section className="py-14 md:py-22 border-t border-[#E4E3EC]">
        <Container>
          <SectionHead
            eyebrow="Markets and specialties"
            title="Hotel marketing by country and by speciality"
            lede="Full pages on how we work in each market we serve, and on each speciality hotels ask us about most."
          />
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { title: "By market", pages: AGENCY_PAGES.filter((p) => p.group === "location") },
              { title: "By speciality", pages: AGENCY_PAGES.filter((p) => p.group === "specialty") },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6B6886]">{col.title}</h3>
                <ul className="flex flex-col divide-y divide-[#E4E3EC] rounded-2xl border border-[#E4E3EC]">
                  {col.pages.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/${p.slug}/`} className="group flex items-start justify-between gap-4 px-5 py-4 hover:bg-[#F5F5F9] transition-colors">
                        <span className="flex flex-col gap-0.5">
                          <span className="font-bold text-primary2">{p.navLabel}</span>
                          <span className="text-sm/snug text-[#55536E]">{p.cardLine}</span>
                        </span>
                        <LuArrowRight className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service finder */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Service finder"
            title="Every service, by industry"
            lede="Find the service you need and open the page written for your type of business."
          />
          <div className="overflow-x-auto rounded-2xl border border-[#E4E3EC] bg-white">
            <table className="w-full min-w-190 border-collapse text-left text-sm">
              <caption className="sr-only">Services available for each industry</caption>
              <thead>
                <tr className="bg-primary2 text-white">
                  <th scope="col" className="sticky left-0 z-10 bg-primary2 px-4 py-3.5 font-semibold">
                    Service
                  </th>
                  {industries.map((I) => (
                    <th key={I.slug} scope="col" className="px-3 py-3.5 text-center font-semibold">
                      {I.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allServices.map((key, r) => (
                  <tr key={key} className={r % 2 ? "bg-[#FAFAFC]" : "bg-white"}>
                    <th scope="row" className={`sticky left-0 z-10 px-4 py-3 font-semibold text-primary2 ${r % 2 ? "bg-[#FAFAFC]" : "bg-white"}`}>
                      <span className="inline-flex items-center gap-2.5">
                        <span className="text-orange-primary">
                          <Icon name={serviceTypes[key].icon} size={16} />
                        </span>
                        {serviceTypes[key].label}
                      </span>
                    </th>
                    {industries.map((I) => (
                      <td key={I.slug} className="px-3 py-3 text-center">
                        {I.services.includes(key) ? (
                          <Link
                            href={serviceHref(I, key)}
                            className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-semibold text-sapphireBlue hover:bg-sapphireBlue/10"
                            aria-label={`${serviceTypes[key].label} for ${I.plural}`}
                          >
                            View <LuArrowRight size={14} aria-hidden="true" />
                          </Link>
                        ) : (
                          <LuMinus className="mx-auto text-[#C9C7DD]" aria-label="Not offered" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <StatsSection
        eyebrow="Results"
        title="What we manage for hospitality brands"
        stats={PORTFOLIO_STATS}
        note="Across 23 client Google Ads accounts, Sep 2023 – Sep 2026."
      />

      <HowHotelScaling title="Recent results" cards={featured} />

      <FaqListSection title="Working with Fielmente" faqs={faqs} />

      <CtaBandSection
        title="Not sure where to start?"
        body="Book a free consultation. We'll look at your marketing today and suggest the one or two changes that will make the biggest difference."
        actions={
          <>
            <ConsultButton />
            <WhatsAppChatButton />
          </>
        }
      />
    </main>
  );
}
