// Industry page: /industries-we-serve/<industry>-marketing-agency/
import CaseStudyCardRich from "@/app/case-study/components/rich/CaseStudyCardRich";
import { getCaseStudy, portfolioStats, type CaseStudy } from "@/app/case-study/data/caseStudies";
import { productCards } from "@/app/products/components/ProductThumb";
import { getAgencyPage } from "@/app/(agency)/_data/pages";
import ClientLogos from "@/components/marketing/ClientLogos";
import ConsultButton from "@/components/marketing/ConsultButton";
import LeadFormSection from "@/components/marketing/LeadFormSection";
import { Icon } from "@/components/marketing/icons";
import {
  AUDIT_URL,
  Comparison,
  CtaBand,
  FaqLead,
  FaqSection,
  LinkCards,
  PageHero,
  SectionHead,
  Split,
  StatsBand,
  StepsBand,
  WhatsAppButton,
} from "@/components/marketing/Sections";
import { Container } from "@/components/sectionComponants";
import type { LogoSet } from "@/app/(agency)/_lib/types";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { industries, legacyIndustries, lodgingIndustries, type IndustryProfile } from "../../data/industries";
import { serviceHref, serviceTypes } from "../../data/services";

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
  "restaurant-marketing-agency": ["hospitality-marketing-agency-dubai", "hospitality-marketing-services/seo-agency", "hotel-ai-marketing-agency"],
  "homestay-villa-marketing-agency": ["hotel-direct-booking-marketing-agency", "boutique-hotel-marketing-agency", "luxury-resort-marketing-agency"],
  "travel-tourism-marketing-agency": ["international-hotel-marketing-agency", "hospitality-marketing-services/seo-agency", "hotel-ai-marketing-agency"],
};

/** Which client logos to show first on each industry's pages. */
export function logoSet(slug: string): LogoSet {
  if (slug.startsWith("restaurant")) return "restaurants";
  if (slug.startsWith("travel")) return "travel";
  if (slug.startsWith("resort") || slug.startsWith("homestay")) return "resorts";
  return "hotels";
}

/** Options for "What do you need help with?" on each industry's lead form. */
export function needsFor(slug: string): string[] {
  if (slug.startsWith("restaurant"))
    return ["More table bookings", "Google and local SEO", "Instagram and content", "Ads", "Website", "Reservations on WhatsApp", "Everything"];
  if (slug.startsWith("travel"))
    return ["More trip enquiries", "Google Ads", "SEO and content", "Social media", "Website", "Lead follow-up automation", "Everything"];
  return ["More direct bookings", "Google Ads", "SEO and AI search", "Social media and content", "Website and booking engine", "OTA and revenue", "Everything"];
}

export default function IndustryTemplate({ I }: { I: IndustryProfile }) {
  const studies = I.caseStudies.map(getCaseStudy).filter((c): c is CaseStudy => Boolean(c));
  const lead = studies[0];
  const products = productCards(I.products);
  const others = [
    ...industries.filter((x) => x.slug !== I.slug).map((x) => ({ slug: x.slug, name: x.name, image: x.heroImage })),
    ...legacyIndustries.map((x) => ({ slug: x.slug, name: x.name, image: x.image })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${I.label} Agency`,
    serviceType: I.label,
    description: I.meta.description,
    areaServed: "IN",
    url: `https://fielmente.com/industries-we-serve/${I.slug}/`,
    provider: { "@type": "Organization", name: "Fielmente", url: "https://fielmente.com/" },
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
            <WhatsAppButton label="Chat on WhatsApp" />
          </>
        }
        image={I.heroImage}
        imageAlt={I.heroAlt}
        floating={
          lead ? (
            <div className="flex items-center gap-4">
              <span className="text-[30px] font-bold leading-none text-orange-primary">{lead.cardStat.value}</span>
              <span className="text-[13px]/snug text-[#55536E]">
                {lead.cardStat.label}
                <span className="block font-semibold text-primary2">{lead.client}</span>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                <Icon name={I.icon} />
              </span>
              <span className="text-[13px]/snug text-[#55536E]">
                <span className="block text-base font-bold text-primary2">{I.services.length} services, one team</span>
                Marketing, websites and automation for {I.plural}
              </span>
            </div>
          )
        }
      />

      <ClientLogos set={logoSet(I.slug)} />

      <Comparison title={`What changes when your ${I.noun} works with Fielmente`} without={I.without} withList={I.withList} />

      {/* Services */}
      <section className="bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Services"
            title={`${I.name} marketing services`}
            lede={`Start with one or combine several. Every service is run by a team that works only with hospitality businesses.`}
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {I.services.map((key) => {
              const st = serviceTypes[key];
              return (
                <li key={key}>
                  <Link
                    href={serviceHref(I, key)}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-transparent bg-white p-5 hover:border-primary2/30 hover:shadow-[0_20px_50px_-30px_rgba(17,13,60,0.45)] transition-all"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDE8DF] text-orange-primary">
                      <Icon name={st.icon} size={20} />
                    </span>
                    <span className="flex flex-1 flex-col gap-1">
                      <span className="font-bold text-primary2">{st.label}</span>
                      <span className="text-sm/snug text-[#55536E]">{st.card(I)}</span>
                    </span>
                    <LuArrowRight className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
            {I.services.length % 3 !== 0 && (
              <li className={`${I.services.length % 2 ? "sm:col-span-1" : "sm:col-span-2"} ${I.services.length % 3 === 1 ? "lg:col-span-2" : "lg:col-span-1"}`}>
                <div className="flex h-full flex-col justify-center gap-3 rounded-2xl bg-primary2 p-5">
                  <span className="font-bold text-white">Not sure where to start?</span>
                  <span className="text-sm/snug text-[#C9C7DD]">Tell us about your {I.noun} and we&apos;ll suggest the one or two services that will make the biggest difference.</span>
                  <div className="pt-1">
                    <ConsultButton>Get a free consultation</ConsultButton>
                  </div>
                </div>
              </li>
            )}
          </ul>
          {lodgingIndustries.has(I.slug) && (
            <p className="mt-6 text-sm text-[#55536E]">
              Already running Google Ads?{" "}
              <Link href={AUDIT_URL} className="font-semibold text-sapphireBlue hover:underline">
                Get a free Google Ads audit
              </Link>
            </p>
          )}
        </Container>
      </section>

      <Split
        eyebrow="Why Fielmente"
        title={`Marketing built around how ${I.guests} choose`}
        body={
          <>
            <p>
              Most {I.guests} start with a search like “{I.searches[0]}” and compare you with what they see on {I.channels}. We make sure
              you&apos;re found, look like the right choice, and make it easy to {I.bookAction} directly.
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
          <section className="py-14 md:py-22 border-t border-[#E4E3EC]">
            <Container>
              <SectionHead
                eyebrow="Case studies"
                title={`Results for ${I.plural} like yours`}
                lede="Real Google Ads accounts we manage, with numbers taken straight from the ad platforms."
              />
              <div className={`grid gap-5 ${studies.length === 1 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                {studies.map((cs) => (
                  <CaseStudyCardRich key={cs.slug} cs={cs} />
                ))}
              </div>
              <p className="mt-6">
                <Link href="/case-study/" className="inline-flex items-center gap-2 text-sm font-semibold text-sapphireBlue hover:underline">
                  See all case studies <LuArrowRight aria-hidden="true" />
                </Link>
              </p>
            </Container>
          </section>
          <StatsBand
            eyebrow="Across our portfolio"
            title="What we manage for hospitality brands"
            stats={portfolioStats}
            note="Across 23 client Google Ads accounts, Sep 2023 – Sep 2026."
          />
        </>
      )}

      <StepsBand
        eyebrow="How we work"
        title={`How we work with ${I.plural}`}
        steps={[
          { title: "Free audit", body: "We review your website, Google profile, social media and ads against nearby competitors." },
          { title: "A plan for your goals", body: `A 90-day plan focused on ${I.goal}, with clear monthly targets.` },
          { title: "Launch and manage", body: "One team runs the work. You approve anything before it goes live." },
          { title: "Report and improve", body: "Monthly reports in plain language, and a plan for the month ahead." },
        ]}
      />

      {products.length > 0 && (
        <LinkCards
          eyebrow="Technology"
          title="Software that works with your marketing"
          lede="Fielmente products run on Eazotel and plug straight into the campaigns we run, so every enquiry lands in one place."
          items={products}
        />
      )}

      {(SPECIALIST_PAGES[I.slug] ?? []).length > 0 && (
        <LinkCards
          eyebrow="Specialist services"
          title={`In-depth pages for ${I.plural}`}
          lede="Each of these has its own page, with how we work, what we measure, proof and FAQs."
          items={(SPECIALIST_PAGES[I.slug] ?? [])
            .map(getAgencyPage)
            .filter((p): p is NonNullable<typeof p> => Boolean(p))
            .map((p) => ({ title: p.navLabel, body: p.cardLine, href: `/${p.slug}/`, icon: "sparkles" as const }))}
          tint
        />
      )}

      <FaqSection title={`${I.name} marketing FAQs`} faqs={I.faqs} lead={<FaqLead />} />

      {/* Other industries */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHead eyebrow="Industries" title="Other industries we serve" />
          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/industries-we-serve/${o.slug}/`} className="group block overflow-hidden rounded-2xl border border-[#E4E3EC]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5F5F9]">
                    <Image src={o.image} alt="" fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.05]" />
                  </div>
                  <span className="flex items-center justify-between gap-2 p-4 text-sm md:text-base font-bold text-primary2">
                    {o.name}
                    <LuArrowRight className="shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1" aria-hidden="true" />
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

      <CtaBand
        title={`Ready to grow your ${I.noun}?`}
        body={`Book a free consultation. We'll review your marketing and show you where more ${I.goal} can come from.`}
        actions={
          <>
            <ConsultButton />
            <WhatsAppButton label="Chat on WhatsApp" />
          </>
        }
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}
