import type { Metadata } from "next";
import Link from "next/link";
import TextBanner from "@/components/banners/TextBanner";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { SectionWithContainer } from "@/components";
import PlatformStripSection from "@/components/commonSections/PlatformStripSection";
import ContactUsSection from "@/components/sectionComponants/ContactUsSection";
import { buildSiteMenu, type MenuSection } from "@/components/navbars/menuData";
import { homePageData } from "../(home)/homePageData";
import { SITES } from "../our-work/sites";
import { ADS_TOTALS } from "../our-work/ads";
import { CLIENT_LOGOS } from "../our-work/LogoWall";

// The "All services" hub, linked from the header, footer and every agency page breadcrumb.
// The directory below is built from the same data as the header menu, so new industry, service and
// agency pages appear here automatically.

const SITE = "https://fielmente.com";
const URL = `${SITE}/hospitality-marketing-services/`;
const TITLE = "Hospitality Marketing Services | Fielmente";
const DESCRIPTION =
  "SEO, Google and Meta ads, OTA management, social media, websites and branding for hotels, resorts, restaurants and cloud kitchens, run by one team.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: "website", siteName: "Fielmente" },
};

const OUTCOMES = [
  {
    title: "Get found",
    text: "Website SEO, local SEO and Google Maps, and AI search optimisation, so guests find you when they search for a stay or a table.",
  },
  {
    title: "Get bookings",
    text: "Google, Meta, ChatGPT and Tripadvisor ads, OTA listing and management, Zomato and Swiggy, revenue management, weddings and events.",
  },
  {
    title: "Build the brand",
    text: "Branding, photography and content, social media, influencer marketing, PR and pre-opening campaigns.",
  },
  {
    title: "Convert and keep guests",
    text: "Websites that take direct bookings, Instagram and WhatsApp reservation automation, reputation management and marketing consultation.",
  },
];

const PROOF = [
  { title: "Our Work", text: "Every website we have built, with the ads, social, branding, SEO and photography behind them.", href: "/our-work/" },
  { title: "Case studies", text: "Before and after results from our clients' own ad and analytics accounts.", href: "/case-study/" },
  { title: "Testimonials", text: "What hotel owners and restaurant teams say about working with us.", href: "/testimonials/" },
];

/** Section intro: a small label, the heading and one line of context (same pattern as /our-work/). */
function Intro({ label, title, text }: { label: string; title: string; text: string }) {
  return (
    <div className="mb-10 max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-ink">{label}</p>
      <h2 className="text-3xl font-semibold leading-tight text-primary md:text-4xl">{title}</h2>
      <p className="text-secondary md:text-lg">{text}</p>
    </div>
  );
}

/** In-page anchor for an industry card, from its URL slug. */
const anchor = (s: MenuSection) => (s.href ?? s.label).split("/").filter(Boolean).pop() ?? "";

/** One industry (or specialist area) with its services grouped by outcome. */
function DirectoryCard({ section, id }: { section: MenuSection; id?: string }) {
  return (
    <li id={id} className="flex scroll-mt-24 flex-col rounded-2xl border border-main-border bg-white p-6">
      {section.href ? (
        <Link href={section.href} className="group inline-flex items-center gap-2 text-xl font-semibold text-primary hover:text-color4">
          {section.label}
          <span aria-hidden className="text-color4 transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ) : (
        <p className="text-xl font-semibold text-primary">{section.label}</p>
      )}
      {section.cardLine && <p className="mt-1 text-sm text-secondary">{section.cardLine}</p>}
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        {section.groups.map((g) => (
          <div key={g.title}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-secondary">{g.title}</p>
            <ul className="space-y-1.5">
              {g.links.map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-primary underline-offset-4 hover:text-color4 hover:underline"
                      {...(external ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      {l.label}
                      {l.context && <span className="sr-only"> ({l.context})</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </li>
  );
}

export default function ServicesPage() {
  const menu = buildSiteMenu();
  const industryLinks = menu.industries.filter((s) => s.href?.startsWith("/industries-we-serve/") && s.label !== "Specialist Services");
  // Drop the menu's "All services" link: it points back to this page.
  const specialist = menu.industries
    .filter((s) => !industryLinks.includes(s))
    .map((s) => ({ ...s, groups: s.groups.map((g) => ({ ...g, links: g.links.filter((l) => l.href !== "/hospitality-marketing-services/") })) }));
  const websites = SITES.filter((s) => s.type === "Website").length;

  const stats = [
    { value: `${CLIENT_LOGOS.length}+`, label: "Hospitality brands worked with" },
    { value: `${websites}`, label: "Websites built" },
    { value: ADS_TOTALS.stats[2].value, label: "Tracked enquiries from Google Ads" },
    { value: ADS_TOTALS.stats[3].value, label: "Cost per enquiry, 2024 to 2026" },
  ];

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Fielmente hospitality marketing services",
    url: URL,
    description: DESCRIPTION,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...industryLinks, ...specialist]
        .filter((s) => s.href && !s.href.startsWith("http"))
        .map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.label, url: `${SITE}${s.href}` })),
    },
  };

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }, { name: "Services", path: "/hospitality-marketing-services/" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <TextBanner
        title="Services"
        subTitle="Hospitality Marketing Services"
        description="SEO, ads, OTAs, social media, websites, branding and photography for hotels, resorts, restaurants and cloud kitchens, planned and run by one team."
      />

      {/* Headline numbers and jump links */}
      <SectionWithContainer defaultPadding={false} sectionClassName="border-b border-main-border bg-white" containerClassName="py-8 md:py-10">
        <dl className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1">
              <dt className="text-sm text-secondary">{s.label}</dt>
              <dd className="text-3xl font-bold text-primary2 md:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <nav aria-label="Services by industry" className="mt-8 flex flex-wrap gap-2">
          {industryLinks.map((s) => (
            <a
              key={s.label}
              href={`#${anchor(s)}`}
              className="rounded-full border border-main-border px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-color4 hover:text-color4"
            >
              {s.label.replace(/ Marketing$/, "")}
            </a>
          ))}
        </nav>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F5F7FB]">
        <Intro
          label="What we do"
          title="Four Jobs, One Team"
          text="Every service we offer does one of four things for a hotel, resort or restaurant. Most clients start with one and add the rest as results come in."
        />
        <ol className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <li key={o.title} className="rounded-2xl bg-white p-6 shadow-[0_1px_0_#E3E5E8]">
              <p className="text-sm font-semibold text-orange-ink">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-xl font-semibold text-primary">{o.title}</h3>
              <p className="mt-2 text-secondary">{o.text}</p>
            </li>
          ))}
        </ol>
      </SectionWithContainer>

      <SectionWithContainer>
        <Intro
          label="By industry"
          title="Services for Your Type of Property"
          text="Each industry has its own page and a page for every service, written for how its guests search and book."
        />
        <ul className="grid gap-5 lg:grid-cols-2">
          {industryLinks.map((s) => (
            <DirectoryCard key={s.label} section={s} id={anchor(s)} />
          ))}
        </ul>
      </SectionWithContainer>

      <SectionWithContainer sectionClassName="bg-[#F5F7FB]">
        <Intro
          label="Specialist & international"
          title="Specialist Services and Markets"
          text="Focused pages for single platforms and questions, and for hotels and restaurants outside India."
        />
        <ul className="grid gap-5 lg:grid-cols-2">
          {specialist.map((s) => (
            <DirectoryCard key={s.label} section={s} />
          ))}
        </ul>
      </SectionWithContainer>

      <PlatformStripSection />

      <SectionWithContainer sectionClassName="bg-[#F5F7FB]">
        <Intro label="Proof" title="See the Work Behind the Services" text="Results, websites and client feedback, all from real accounts." />
        <ul className="grid gap-4 md:grid-cols-3">
          {PROOF.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-2xl border border-main-border bg-white p-6 transition-colors hover:border-color4"
              >
                <span className="text-xl font-semibold text-primary group-hover:text-color4">{p.title} →</span>
                <span className="mt-2 text-secondary">{p.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </SectionWithContainer>

      <ContactUsSection {...homePageData?.contactUsSection} />
    </main>
  );
}
