// Industry page: /industries-we-serve/<industry>-marketing-agency/
import type { LogoSet } from "@/@types/@agencyPageType";
import type { IndustryProfile } from "@/@types/@industryTemplateType";
import { getAgencyPage } from "@/app/(agency)/data";
import HowHotelScaling from "@/app/case-study/components/HowHotelScaling";
import PageHero from "@/components/banners/PageHero";
import ConsultButton from "@/components/buttons/ConsultButton";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import IconLinkCard from "@/components/cards/IconLinkCard";
import ClientLogosSection from "@/components/commonSections/ClientLogosSection";
import ComparisonSection from "@/components/commonSections/ComparisonSection";
import CtaBandSection from "@/components/commonSections/CtaBandSection";
import FaqListSection from "@/components/commonSections/FaqListSection";
import LeadFormSection from "@/components/commonSections/LeadFormSection";
import LinkCardsSection from "@/components/commonSections/LinkCardsSection";
import SplitSection from "@/components/commonSections/SplitSection";
import StatsSection from "@/components/commonSections/StatsSection";
import StepsSection from "@/components/commonSections/StepsSection";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PORTFOLIO_STATS } from "@/utils/agencyData";
import { caseStudyCards } from "@/utils/caseStudyCards";
import { productCards } from "@/utils/productCards";
import { Icon } from "@/utils/serviceIcons";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import {
  industries,
  legacyIndustries,
  lodgingIndustries,
} from "../../data/industries";
import { serviceHref, serviceTypes } from "../../data/services";

/** Free Google Ads audit (the paid-traffic landing page). */
const AUDIT_URL = "/google-ads-for-hotels/#audit";

/** Agency landing pages linked from each industry page. */
const SPECIALIST_PAGES: Record<string, string[]> = {
  "hotel-marketing-agency": [
    "industries-we-serve/hotel-marketing-agency/hotel-google-ads",
    "hotel-performance-marketing-agency",
    "hotel-direct-booking-marketing-agency",
    "hotel-revenue-marketing-agency",
    "boutique-hotel-marketing-agency",
    "hotel-ai-marketing-agency",
    "hospitality-marketing-services/seo-agency",
    "international-hotel-marketing-agency",
    "luxury-resort-marketing-agency",
  ],
  "restaurant-marketing-agency": [
    "hospitality-marketing-agency-dubai",
    "hospitality-marketing-services/seo-agency",
    "hotel-ai-marketing-agency",
  ],
  "homestay-villa-marketing-agency": [
    "hotel-direct-booking-marketing-agency",
    "boutique-hotel-marketing-agency",
    "luxury-resort-marketing-agency",
  ],
  "travel-tourism-marketing-agency": [
    "international-hotel-marketing-agency",
    "hospitality-marketing-services/seo-agency",
    "hotel-ai-marketing-agency",
  ],
};

/** Which client logos to show first on each industry's pages. */
export function logoSet(slug: string): LogoSet {
  if (slug.startsWith("restaurant")) return "restaurants";
  if (slug.startsWith("travel")) return "travel";
  if (slug.startsWith("resort") || slug.startsWith("homestay"))
    return "resorts";
  return "hotels";
}

/** Options for "What do you need help with?" on each industry's lead form. */
export function needsFor(slug: string): string[] {
  if (slug.startsWith("restaurant"))
    return [
      "More table bookings",
      "Google and local SEO",
      "Instagram and content",
      "Ads",
      "Website",
      "Reservations on WhatsApp",
      "Everything",
    ];
  if (slug.startsWith("travel"))
    return [
      "More trip enquiries",
      "Google Ads",
      "SEO and content",
      "Social media",
      "Website",
      "Lead follow-up automation",
      "Everything",
    ];
  return [
    "More direct bookings",
    "Google Ads",
    "SEO and AI search",
    "Social media and content",
    "Website and booking engine",
    "OTA and revenue",
    "Everything",
  ];
}

export default function IndustryTemplate({ I }: { I: IndustryProfile }) {
  const studies = caseStudyCards(I.caseStudies);
  const products = productCards(I.products);
  const others = [
    ...industries
      .filter((x) => x.slug !== I.slug)
      .map((x) => ({ slug: x.slug, name: x.name, image: x.heroImage })),
    ...legacyIndustries.map((x) => ({
      slug: x.slug,
      name: x.name,
      image: x.image,
    })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${I.label} Agency`,
    serviceType: I.label,
    description: I.meta.description,
    areaServed: "IN",
    url: `https://fielmente.com/industries-we-serve/${I.slug}/`,
    provider: {
      "@type": "Organization",
      name: "Fielmente",
      url: "https://fielmente.com/",
    },
  };

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <PageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries we serve", href: "/industries-we-serve/" },
          { label: I.label },
        ]}
        eyebrow={`${I.label} agency`}
        title={I.heroTitle}
        lede={I.heroLede}
        actions={
          <>
            <ConsultButton />
            <WhatsAppChatButton />
          </>
        }
        image={I.heroImage}
        imageAlt={I.heroAlt}
        floating={
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
              <Icon name={I.icon} />
            </span>
            <span className="text-[13px]/snug text-[#55536E]">
              <span className="block text-base font-bold text-primary2">
                {I.services.length} services, one team
              </span>
              Marketing, websites and automation for {I.plural}
            </span>
          </div>
        }
      />

      <ClientLogosSection set={logoSet(I.slug)} />

      <ComparisonSection
        title={`What changes when your ${I.noun} works with Fielmente`}
        without={I.without}
        withList={I.withList}
      />

      {/* Services */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Services"
            title={`${I.name} marketing services`}
            lede={`Start with one or combine several. Every service is run by a team that works only with hospitality businesses.`}
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {I.services.map((key) => (
              <li key={key}>
                <IconLinkCard
                  icon={serviceTypes[key].icon}
                  title={serviceTypes[key].label}
                  body={serviceTypes[key].card(I)}
                  href={serviceHref(I, key)}
                />
              </li>
            ))}
            {I.services.length % 3 !== 0 && (
              <li
                className={`${I.services.length % 2 ? "sm:col-span-1" : "sm:col-span-2"} ${I.services.length % 3 === 1 ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-primary2 p-5">
                  <span className="font-bold text-white">
                    Not sure where to start?
                  </span>
                  <span className="text-sm/snug text-[#C9C7DD]">
                    Tell us about your {I.noun} and we&apos;ll suggest the one
                    or two services that will make the biggest difference.
                  </span>
                  <div className="pt-1">
                    <ConsultButton />
                  </div>
                </div>
              </li>
            )}
          </ul>
          {lodgingIndustries.has(I.slug) && (
            <p className="mt-6 text-sm text-[#55536E]">
              Already running Google Ads?{" "}
              <Link
                href={AUDIT_URL}
                className="font-semibold text-sapphireBlue hover:underline"
              >
                Get a free Google Ads audit
              </Link>
            </p>
          )}
        </Container>
      </section>

      <SplitSection
        eyebrow="Why Fielmente"
        title={`Marketing built around how ${I.guests} choose`}
        body={
          <>
            <p>
              Most {I.guests} start with a search like “{I.searches[0]}” and
              compare you with what they see on {I.channels}. We make sure
              you&apos;re found, look like the right choice, and make it easy to{" "}
              {I.bookAction} directly.
            </p>
          </>
        }
        bullets={[
          `Campaigns planned around ${I.peaks}`,
          `Content that shows off your ${I.showcase}`,
          `Reviews managed across ${I.reviewSites}`,
          `Reporting on ${I.goal}, not vanity metrics`,
        ]}
        image={I.secondImage}
        imageAlt={I.secondAlt}
      />

      {studies.length > 0 && (
        <>
          <div className="border-t border-[#E4E3EC]">
            <HowHotelScaling
              title={`Results for ${I.plural} like yours`}
              cards={studies}
            />
          </div>
          <StatsSection
            eyebrow="Across our portfolio"
            title="What we manage for hospitality brands"
            stats={PORTFOLIO_STATS}
            note="Across 23 client Google Ads accounts, Sep 2023 – Sep 2026."
          />
        </>
      )}

      <StepsSection
        eyebrow="How we work"
        title={`How we work with ${I.plural}`}
        steps={[
          {
            title: "Free audit",
            body: "We review your website, Google profile, social media and ads against nearby competitors.",
          },
          {
            title: "A plan for your goals",
            body: `A 90-day plan focused on ${I.goal}, with clear monthly targets.`,
          },
          {
            title: "Launch and manage",
            body: "One team runs the work. You approve anything before it goes live.",
          },
          {
            title: "Report and improve",
            body: "Monthly reports in plain language, and a plan for the month ahead.",
          },
        ]}
      />

      {products.length > 0 && (
        <LinkCardsSection
          eyebrow="Technology"
          title="Software that works with your marketing"
          lede="Fielmente products run on Eazotel and plug straight into the campaigns we run, so every enquiry lands in one place."
          items={products}
        />
      )}

      {(SPECIALIST_PAGES[I.slug] ?? []).length > 0 && (
        <LinkCardsSection
          eyebrow="Specialist services"
          title={`In-depth pages for ${I.plural}`}
          lede="Each of these has its own page, with how we work, what we measure, proof and FAQs."
          items={(SPECIALIST_PAGES[I.slug] ?? [])
            .map(getAgencyPage)
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map((p) => ({
              title: p.navLabel,
              body: p.cardLine,
              href: `/${p.slug}/`,
              icon: "sparkles" as const,
            }))}
          tint
        />
      )}

      <FaqListSection title={`${I.name} marketing FAQs`} faqs={I.faqs} />

      {/* Other industries */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHead eyebrow="Industries" title="Other industries we serve" />
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/industries-we-serve/${o.slug}/`}
                  className="group block overflow-hidden rounded-2xl border border-[#E4E3EC]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F9]">
                    <Image
                      src={o.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <span className="flex items-center justify-between gap-2 p-4 text-sm md:text-base font-bold text-primary2">
                    {o.name}
                    <LuArrowRight
                      className="shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <LeadFormSection
        pageKeyword={`${I.label} (industry page)`}
        title={`Get a free growth plan for your ${I.noun}`}
        body={`Tell us where you are today. Within a few working days we'll send a written plan with priorities for ${I.goal}, the channels to use and a realistic target.`}
        points={[
          "A review of your website, Google profile, ads and listings",
          "The two or three changes that will make the biggest difference",
          "No cost and no obligation",
        ]}
        needs={needsFor(I.slug)}
      />

      <CtaBandSection
        title={`Ready to grow your ${I.noun}?`}
        body={`Book a free consultation. We'll review your marketing and show you where more ${I.goal} can come from.`}
        actions={
          <>
            <ConsultButton />
            <WhatsAppChatButton />
          </>
        }
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
