import type { Metadata } from "next";
import TextBanner from "@/components/banners/TextBanner";
import CtaSection from "@/components/commonSections/CtaSection";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { SectionWithContainer } from "@/components";
import WorkGrid from "./WorkGrid";
import AdsResults, { AdsTotals } from "./AdsResults";
import SocialGrids from "./SocialGrids";
import { EarlierBrands, MetaAdsFeature, PrCoverage, SeoResults } from "./MoreWork";
import { BrandProjects, LogoDesigns, MenuDesigns } from "./BrandingWork";
import { OtaWork, ServicesWork } from "./ServicesWork";
import LogoWall, { CLIENT_LOGOS } from "./LogoWall";
import { SITES } from "./sites";
import { ADS_RESULTS, ADS_TOTALS } from "./ads";
import { SOCIAL_BRANDS } from "./social";

const SITE = "https://fielmente.com";
const URL = `${SITE}/our-work/`;
const websites = SITES.filter((s) => s.type === "Website").length;
const landingPages = SITES.length - websites;

const TITLE = "Our Work: Hotel Websites, Ads, Branding & Social | Fielmente";
const DESCRIPTION = `${websites} websites, ${landingPages} landing pages, Google Ads results from ${ADS_TOTALS.accounts} accounts, branding, social media, SEO, OTA and PR work for ${CLIENT_LOGOS.length}+ hospitality brands.`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    type: "website",
    siteName: "Fielmente",
    images: [{ url: `${SITE}/our-work/sites/${SITES[0].slug}.webp`, width: 1200, height: 750, alt: `${SITES[0].name} website by Fielmente` }],
  },
};

/** The sites we built, for search engines. */
const itemListLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Fielmente: Our Work",
  url: URL,
  description: DESCRIPTION,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: SITES.length,
    itemListElement: SITES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "WebSite", name: s.name, url: s.url },
    })),
  },
};

const SECTIONS = [
  { id: "services", label: "All services" },
  { id: "websites", label: "Websites & landing pages" },
  { id: "google-ads", label: "Google Ads" },
  { id: "social-media", label: "Social media" },
  { id: "meta-ads", label: "Meta ads" },
  { id: "branding", label: "Branding & print" },
  { id: "seo", label: "SEO" },
  { id: "ota", label: "OTA listings" },
  { id: "pr", label: "PR" },
  { id: "clients", label: "All clients" },
];

/** Section intro: a small label, the section heading and one line of context. */
function Intro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-ink">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">{title}</h2>
      <p className="text-secondary md:text-lg">{text}</p>
    </div>
  );
}

export default function OurWorkPage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Our Work", path: "/our-work/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <TextBanner
        title="Our Work"
        subTitle="Websites, Ads & Content That Bring Bookings"
        description="Every website and landing page we have built, the Google Ads results behind them, and our branding, social media, SEO, OTA and PR work for hotels, resorts and restaurants."
      />

      {/* Headline numbers and jump links */}
      <SectionWithContainer defaultPadding={false} sectionClassName="border-b border-main-border bg-white" containerClassName="py-8 md:py-10">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: `${websites}`, label: "Websites built" },
            { value: `${landingPages}`, label: "Landing pages built" },
            { value: ADS_TOTALS.stats[2].value, label: "Tracked enquiries from Google Ads" },
            { value: ADS_TOTALS.stats[3].value, label: "Cost per enquiry, 2024 to 2026" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-secondary">{s.label}</dt>
              <dd className="text-3xl font-bold text-primary2 md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-main-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-color4 hover:text-color4"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </SectionWithContainer>

      <SectionWithContainer sectionId="services" sectionClassName="scroll-mt-24 bg-[#F5F7FB]">
        <Intro
          label="Services"
          title="Every Service, and the Clients We Did It For"
          text="From the logo on the gate to the ad that fills the rooms: each service we offer, with the hotels, resorts and restaurants we have delivered it for."
        />
        <ServicesWork />
      </SectionWithContainer>

      <SectionWithContainer sectionId="websites" sectionClassName="scroll-mt-24">
        <Intro
          label="Websites & landing pages"
          title="Sites We Have Designed and Built"
          text={`${websites} websites and ${landingPages} landing pages, live today. Each one is shown on desktop and phone; open any card to visit the live site.`}
        />
        <WorkGrid items={SITES} />
      </SectionWithContainer>

      <SectionWithContainer sectionId="google-ads" sectionClassName="scroll-mt-24 bg-[#F5F7FB]">
        <Intro
          label="Google Ads & performance marketing"
          title="More Enquiries at a Lower Cost, Every Year"
          text={`Results from our clients' own ad accounts. Across ${ADS_TOTALS.accounts} Google Ads accounts, cost per enquiry has fallen 70% since 2024 while enquiries grew almost sixfold.`}
        />
        <div className="space-y-6">
          <AdsTotals />
          <AdsResults results={ADS_RESULTS} />
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionId="social-media" sectionClassName="scroll-mt-24">
        <Intro
          label="Social media"
          title="Instagram Grids We Design and Run"
          text="Monthly content for resorts, retreats, villas, events and travel brands: planned as a grid, designed in-house and posted for the client."
        />
        <SocialGrids brands={SOCIAL_BRANDS} />
        <div id="meta-ads" className="mt-14 scroll-mt-24">
          <MetaAdsFeature />
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionId="branding" sectionClassName="scroll-mt-24 bg-[#F5F7FB]">
        <Intro
          label="Branding, menus & print"
          title="Brand Identities We Have Designed"
          text="Logos, brand books and every guest touchpoint: signage, key tags, stationery, amenities, vehicles, menus and billboards, designed in-house."
        />
        <BrandProjects />
        <div className="mt-16 space-y-16">
          <LogoDesigns />
          <MenuDesigns />
        </div>
      </SectionWithContainer>

      <SectionWithContainer sectionId="seo" sectionClassName="scroll-mt-24">
        <Intro
          label="SEO"
          title="Rankings That Bring Direct Bookings"
          text="Search work that moved properties onto page one for the searches their guests actually type."
        />
        <SeoResults />
      </SectionWithContainer>

      <SectionWithContainer sectionId="ota" sectionClassName="scroll-mt-24 bg-[#F5F7FB]">
        <Intro
          label="OTA listing & management"
          title="Listed and Managed on the Major OTAs"
          text="Our OTA team sets up, optimises and manages listings so properties sell on the booking sites guests already use."
        />
        <OtaWork />
      </SectionWithContainer>

      <SectionWithContainer sectionId="pr" sectionClassName="scroll-mt-24">
        <Intro label="PR & media" title="Coverage in Travel and Business Media" text="Press placements that build trust before a guest ever reaches the booking page." />
        <PrCoverage />
      </SectionWithContainer>

      <SectionWithContainer sectionId="clients" sectionClassName="scroll-mt-24 bg-[#F5F7FB]">
        <Intro
          label="Our clients"
          title={`${CLIENT_LOGOS.length}+ Brands We Have Worked With`}
          text="Hotels, resorts, palaces, glamps, restaurants, cloud kitchens and travel brands in India, the UAE, Oman, the UK, the USA, Canada, Nepal, Sri Lanka, Australia and Switzerland."
        />
        <LogoWall />
        <p id="more-brands" className="mb-5 mt-14 scroll-mt-24 text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
          More of what we did for them
        </p>
        <EarlierBrands />
      </SectionWithContainer>

      <CtaSection
        title="Want Results Like These?"
        description="Tell us about your property and we'll show you what a faster website, sharper ads and better content can do for your direct bookings."
        cta={{ label: "Book a Free Consultation", href: "" }}
      />
    </main>
  );
}
