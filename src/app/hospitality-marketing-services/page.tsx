import type { Metadata } from "next";
import Link from "next/link";
import { LuArrowRight, LuMinus } from "react-icons/lu";
import type { IndustryProfile, ServiceKey } from "@/@types/@industryTemplateType";
import { AGENCY_PAGES } from "@/app/(agency)/data";
import HowHotelScaling from "@/app/case-study/components/HowHotelScaling";
import PageHero from "@/components/banners/PageHero";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import ConsultButton from "@/components/buttons/ConsultButton";
import WhatsAppChatButton from "@/components/buttons/WhatsAppChatButton";
import CtaBandSection from "@/components/commonSections/CtaBandSection";
import FaqListSection from "@/components/commonSections/FaqListSection";
import PartnerStripSection from "@/components/commonSections/PartnerStripSection";
import PlatformStripSection from "@/components/commonSections/PlatformStripSection";
import StatsSection from "@/components/commonSections/StatsSection";
import Container from "@/components/sectionComponants/Container";
import SectionHead from "@/components/typography/SectionHead";
import { PORTFOLIO_STATS } from "@/utils/agencyData";
import { caseStudyCards } from "@/utils/caseStudyCards";
import { Icon } from "@/utils/serviceIcons";
import { industries } from "../industries-we-serve/data/industries";
import { serviceHref, serviceTypes } from "../industries-we-serve/data/services";

// The "All services" hub, linked from the header, footer and every agency page breadcrumb.
// Same layout and components as /industries-we-serve/ and the agency pages. Services, industries and
// agency pages all come from the shared data files, so new pages appear here automatically.

const URL = "https://fielmente.com/hospitality-marketing-services/";
const title = "Hospitality Marketing Services | Fielmente";
const description =
  "SEO, Google and Meta ads, OTA management, social media, websites and branding for hotels, resorts, restaurants and cloud kitchens, run by one team.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: URL },
  openGraph: {
    title,
    description,
    url: URL,
    siteName: "Fielmente",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/fielmente_logo.png", width: 1200, height: 630 }],
  },
};

/** Services grouped by what the owner wants from them (same groups as the header menu). */
const GROUPS: { eyebrow: string; title: string; lede: string; keys: ServiceKey[] }[] = [
  {
    eyebrow: "Get found",
    title: "Be found when guests search",
    lede: "On Google, Google Maps and the AI assistants guests now ask before they book.",
    keys: ["website-seo", "local-seo", "ai-search-optimization"],
  },
  {
    eyebrow: "Get bookings",
    title: "Turn searches into bookings",
    lede: "Paid channels, OTAs and delivery apps, planned and measured as one budget.",
    keys: [
      "google-ads",
      "chatgpt-ads",
      "tripadvisor-ads",
      "performance-marketing",
      "ota-management",
      "ota-listing",
      "zomato-swiggy-management",
      "revenue-management",
      "weddings-events-marketing",
      "social-media-reservation-automation",
    ],
  },
  {
    eyebrow: "Build the brand",
    title: "Give guests a reason to choose you",
    lede: "Identity, photography, content and the social channels guests check before they commit.",
    keys: ["branding", "content-creation", "social-media-management", "influencer-marketing", "pr-communication", "preopening-marketing"],
  },
  {
    eyebrow: "Convert and keep guests",
    title: "Win the booking and the next one",
    lede: "A website that converts, fast replies on every channel, and reviews that keep working for you.",
    keys: ["website-development", "sales-marketing-automation", "social-media-ai-automation", "online-reputation-management", "sales-marketing-consultation"],
  },
];

// Any service added later but missing from GROUPS still appears, in the last group.
const allServices = [...new Set(industries.flatMap((i) => i.services))] as ServiceKey[];
const grouped = new Set(GROUPS.flatMap((g) => g.keys));
const ungrouped = allServices.filter((k) => !grouped.has(k));
const groups = GROUPS.map((g, i) => (i === GROUPS.length - 1 ? { ...g, keys: [...g.keys, ...ungrouped] } : g));

/** The first industry (hotels first) that offers a service: the service card links to its page. */
const homeIndustry = (key: ServiceKey): IndustryProfile | undefined => industries.find((I) => I.services.includes(key));

const faqs = [
  {
    q: "Which service should we start with?",
    a: "Usually the one closest to bookings. For most hotels that is Google Ads with conversion tracking, plus fixing the website and Google Business Profile. We review your setup first and suggest one or two starting points.",
  },
  {
    q: "Can we take just one service?",
    a: "Yes. Many clients start with one, such as Google Ads or social media, and add others once they see results.",
  },
  {
    q: "Who runs the work?",
    a: "Our own team in Gurugram plans, runs and reports on every channel. You get one point of contact and one monthly report across all of them.",
  },
  {
    q: "Do you only work with hospitality businesses?",
    a: "Yes. Hotels, resorts, restaurants, homestays and villas, wellness retreats, wedding venues, travel companies and cloud kitchens are all we do.",
  },
];

export default function ServicesPage() {
  const featured = caseStudyCards(["naturoville-google-ads", "hotel-green-castle-google-ads", "naad-wellness-google-ads"]);

  return (
    <main className="overflow-x-clip bg-white text-primary2">
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/hospitality-marketing-services/" }]} />
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Hospitality marketing services"
        title="Every channel that brings guests, run by one team"
        lede="SEO, ads, OTAs, social media, websites, branding and photography for hotels, resorts, restaurants and cloud kitchens. Start with one service or hand us all of them."
        actions={
          <>
            <ConsultButton />
            <WhatsAppChatButton />
          </>
        }
        image="/our-work/photography/stonehedge-1.webp"
        imageAlt="Private dinner for two on the Nubra sand dunes at sunset, photographed by Fielmente"
        floating={
          <div className="flex items-center gap-4">
            <span className="text-[30px] font-bold leading-none text-orange-primary">{allServices.length}</span>
            <span className="text-[13px]/snug text-[#55536E]">
              services
              <span className="block font-semibold text-primary2">for {industries.length} types of hospitality business</span>
            </span>
          </div>
        }
      />

      <PartnerStripSection />

      {/* Services, grouped by outcome */}
      {groups.map((g, gi) => (
        <section
          key={g.eyebrow}
          id={g.eyebrow.toLowerCase().replace(/[^a-z]+/g, "-")}
          className={`scroll-mt-24 py-14 md:py-22 ${gi % 2 ? "bg-[#F5F5F9]" : ""}`}
        >
          <Container>
            <SectionHead eyebrow={g.eyebrow} title={g.title} lede={g.lede} />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.keys.map((key) => {
                const S = serviceTypes[key];
                const I = homeIndustry(key);
                if (!S || !I) return null;
                return (
                  <li key={key}>
                    <Link
                      href={serviceHref(I, key)}
                      className="group flex h-full items-start gap-4 rounded-2xl border border-[#E4E3EC] bg-white p-5 transition-all hover:border-primary2/40 hover:shadow-[0_24px_60px_-30px_rgba(17,13,60,0.45)]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-primary/10 text-orange-primary">
                        <Icon name={S.icon} size={18} />
                      </span>
                      <span className="flex flex-1 flex-col gap-1">
                        <span className="font-bold text-primary2">{S.label}</span>
                        <span className="text-sm/snug text-[#55536E]">{S.card(I)}</span>
                      </span>
                      <LuArrowRight
                        className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Container>
        </section>
      ))}

      <PlatformStripSection tint />

      {/* Service finder */}
      <section className="py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Service finder"
            title="Every service, by industry"
            lede="Each service has a page written for your type of business. Find yours below."
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
                      <Link href={`/industries-we-serve/${I.slug}/`} className="hover:underline">
                        {I.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups
                  .flatMap((g) => g.keys)
                  .filter((key) => allServices.includes(key))
                  .map((key, r) => (
                    <tr key={key} className={r % 2 ? "bg-[#FAFAFC]" : "bg-white"}>
                      <th
                        scope="row"
                        className={`sticky left-0 z-10 px-4 py-3 font-semibold text-primary2 ${r % 2 ? "bg-[#FAFAFC]" : "bg-white"}`}
                      >
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

      {/* Specialist pages (agency landing pages) */}
      <section className="border-t border-[#E4E3EC] bg-[#F5F5F9] py-14 md:py-22">
        <Container>
          <SectionHead
            eyebrow="Specialist services"
            title="By platform, speciality and market"
            lede="Full pages on single advertising platforms, the specialities hotels ask us about most, and the markets we serve outside India."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: "By advertising platform", pages: AGENCY_PAGES.filter((p) => p.group === "ads") },
              { title: "By speciality", pages: AGENCY_PAGES.filter((p) => p.group === "specialty") },
              { title: "By market", pages: AGENCY_PAGES.filter((p) => p.group === "location") },
            ].map((col) => (
              <div key={col.title}>
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#6B6886]">{col.title}</h3>
                <ul className="flex flex-col divide-y divide-[#E4E3EC] rounded-2xl border border-[#E4E3EC] bg-white">
                  {col.pages.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/${p.slug}/`}
                        className="group flex items-start justify-between gap-4 px-5 py-4 transition-colors hover:bg-[#F5F5F9]"
                      >
                        <span className="flex flex-col gap-0.5">
                          <span className="font-bold text-primary2">{p.navLabel}</span>
                          <span className="text-sm/snug text-[#55536E]">{p.cardLine}</span>
                        </span>
                        <LuArrowRight
                          className="mt-1 shrink-0 text-sapphireBlue transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
        title="Not sure which service you need?"
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
