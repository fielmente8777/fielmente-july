// Menu content for the header and mobile nav, built on the server from the same data as the pages,
// so every industry, service and product page appears in the menu automatically.
// Only labels and links are passed to the client components.
import type { IndustryProfile, ServiceKey } from "@/@types/@industryTemplateType";
import { AGENCY_PAGES } from "@/app/(agency)/data";
import { LOCAL_AGENCY_PAGES, LOCAL_PAGE_SLUGS } from "@/app/(agency)/data/india-locations";
import { industries, serviceOnlyIndustries } from "@/app/industries-we-serve/data/industries";
import { serviceHref, serviceTypes } from "@/app/industries-we-serve/data/services";
import { PRODUCTS, productPath } from "@/lib/products";
import { PLATFORMS } from "@/utils/platforms";

/**
 * `context` is read by screen readers and search engines but not shown (the panel heading already says
 * it). Every industry has links like "Website SEO", so without it the header repeated the same link text
 * up to eight times on every page; with it each link is unique ("Resort Website SEO").
 */
/** `icon`: an official platform logo shown before the label (advertising platform pages). */
export type MenuLink = { label: string; href: string; context?: string; icon?: string };
export type MenuGroup = { title: string; links: MenuLink[] };
export type MenuSection = { label: string; href?: string; cardLine?: string; groups: MenuGroup[] };
export type SiteMenu = { industries: MenuSection[]; products: MenuGroup[] };

/** Services grouped by what the owner wants from them. Every ServiceKey belongs to exactly one group. */
const SERVICE_GROUPS: { title: string; keys: ServiceKey[] }[] = [
  { title: "Get found", keys: ["website-seo", "local-seo", "ai-search-optimization"] },
  {
    title: "Get bookings",
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
    title: "Build the brand",
    keys: ["branding", "content-creation", "social-media-management", "influencer-marketing", "pr-communication", "preopening-marketing"],
  },
  {
    title: "Convert and keep guests",
    keys: ["website-development", "sales-marketing-automation", "social-media-ai-automation", "online-reputation-management", "sales-marketing-consultation"],
  },
];

/** Shorter menu labels where the page title is long. */
const SHORT_LABEL: Partial<Record<ServiceKey, string>> = {
  "social-media-reservation-automation": "Instagram & WhatsApp Reservations",
  "sales-marketing-consultation": "Marketing Consultation",
  "online-reputation-management": "Reputation Management",
  "zomato-swiggy-management": "Zomato & Swiggy",
  "weddings-events-marketing": "Weddings & Events",
  "chatgpt-ads": "ChatGPT Ads",
  "tripadvisor-ads": "Tripadvisor Ads",
  "social-media-management": "Social Media",
};

function serviceLabel(I: IndustryProfile, key: ServiceKey) {
  if (I.prefix === "homestay-villa" && key === "ota-management") return "Airbnb & OTA Management";
  if (I.prefix === "homestay-villa" && key === "ota-listing") return "Airbnb & OTA Listing";
  return SHORT_LABEL[key] ?? serviceTypes[key].label;
}

function industrySection(I: IndustryProfile): MenuSection {
  const groups = SERVICE_GROUPS.map((g) => ({
    title: g.title,
    links: g.keys
      .filter((k) => I.services.includes(k))
      .map((k) => ({ label: serviceLabel(I, k), href: serviceHref(I, k), context: I.label.replace(/ Marketing$/, "") })),
  })).filter((g) => g.links.length > 0);
  return { label: I.label, href: `/industries-we-serve/${I.slug}/`, cardLine: I.cardLine, groups };
}

/** Order shown in the menu. */
const INDUSTRY_ORDER = [
  "hotel-marketing-agency",
  "resort-marketing-agency",
  "restaurant-marketing-agency",
  "homestay-villa-marketing-agency",
  "wellness-retreat-marketing-agency",
  "wedding-venue-marketing-agency",
  "travel-tourism-marketing-agency",
  "cloud-kitchen-marketing-agency",
];

/** Country and region sites (separate Vercel project, *.fielmente.com). */
const REGION_SITES: MenuLink[] = [
  { label: "Europe", href: "https://europe.fielmente.com/" },
  { label: "Middle East & North Africa", href: "https://middle-east.fielmente.com/" },
  { label: "Asia", href: "https://asia.fielmente.com/" },
  { label: "Africa & Indian Ocean", href: "https://africa.fielmente.com/" },
  { label: "The Americas", href: "https://americas.fielmente.com/" },
  { label: "Australia & New Zealand", href: "https://oceania.fielmente.com/" },
];

/** Products grouped by job. Products missing from a group are added to the last one, so none are hidden. */
const PRODUCT_GROUPS: { title: string; slugs: string[] }[] = [
  { title: "Website and bookings", slugs: ["hotel-website-builder", "hotel-cms", "hotel-booking-engine", "hotel-payment-gateway", "hotel-channel-manager"] },
  { title: "AI agents", slugs: ["hotel-ai-chatbot", "hotel-ai-concierge", "hotel-ai-reservation-desk", "hotel-ai-front-desk", "hotel-ai-voice-agent"] },
  {
    title: "Marketing",
    slugs: ["hotel-email-marketing", "hotel-whatsapp-marketing", "hotel-campaigns-management", "hotel-social-media-management-tool", "hotel-local-seo"],
  },
  {
    title: "Guests and operations",
    slugs: ["hotel-crm", "hotel-guest-request-management", "hotel-call-management-system", "hotel-conversational-tool", "hotel-communication-suite", "hotel-insights-analytics"],
  },
];

const PRODUCT_LABEL: Record<string, string> = {
  "hotel-crm": "CRM & Lead Management",
  "hotel-cms": "Hotel CMS",
  "hotel-social-media-management-tool": "Social Media Tool",
  "hotel-local-seo": "Local SEO Tool",
};

export function buildSiteMenu(): SiteMenu {
  const all = [...industries, ...serviceOnlyIndustries];
  const industrySections = INDUSTRY_ORDER.map((slug) => all.find((I) => I.slug === slug))
    .filter((I): I is IndustryProfile => Boolean(I))
    .map(industrySection);
  // Any industry added later but not in INDUSTRY_ORDER still appears.
  all.filter((I) => !INDUSTRY_ORDER.includes(I.slug)).forEach((I) => industrySections.push(industrySection(I)));

  const agency = (group: "location" | "specialty" | "ads") =>
    AGENCY_PAGES.filter((p) => p.group === group && !LOCAL_PAGE_SLUGS.has(p.slug) && !p.slug.startsWith("industries-we-serve/")).map((p) => ({
      label: p.navLabel,
      href: `/${p.slug}/`,
      ...(group === "ads" && p.platforms?.[0] ? { icon: PLATFORMS[p.platforms[0]].logo } : {}),
    }));

  industrySections.push({
    label: "India Service Locations",
    href: "/hospitality-marketing-locations/",
    cardLine: "Local hospitality marketing for city and destination properties",
    groups: [{ title: "Cities and states we serve", links: LOCAL_AGENCY_PAGES.map((p) => ({ label: p.navLabel, href: `/${p.slug}/` })) }],
  });
  industrySections.push({
    label: "International Hotel Marketing",
    href: "/international-hotel-marketing-agency/",
    cardLine: "Hotel and restaurant marketing for properties outside India",
    groups: [
      { title: "Agency pages by market", links: agency("location") },
      { title: "Country and region sites", links: [...REGION_SITES, { label: "United States", href: "https://usa.fielmente.com/" }] },
    ],
  });
  industrySections.push({
    label: "Specialist Services",
    href: "/industries-we-serve/",
    cardLine: "Focused pages for the questions hotels ask most",
    groups: [
      { title: "Specialist pages", links: agency("specialty") },
      { title: "Advertising platforms", links: agency("ads") },
      {
        title: "Across hospitality",
        links: [
          { label: "Hospitality Social Media", href: "/hospitality-marketing-services/social-media-marketing-agency/" },
          { label: "Hospitality Google Ads", href: "/hospitality-marketing-services/google-ads-agency/" },
          { label: "Food & Beverage Marketing", href: "/food-and-beverage-marketing-solutions/" },
          { label: "All services", href: "/hospitality-marketing-services/" },
        ],
      },
    ],
  });

  const used = new Set(PRODUCT_GROUPS.flatMap((g) => g.slugs));
  const productGroups = PRODUCT_GROUPS.map((g, i) => {
    const slugs = i === PRODUCT_GROUPS.length - 1 ? [...g.slugs, ...PRODUCTS.map((p) => p.slug).filter((s) => !used.has(s))] : g.slugs;
    return {
      title: g.title,
      links: slugs
        .map((s) => PRODUCTS.find((p) => p.slug === s))
        .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p))
        .map((p) => ({ label: PRODUCT_LABEL[p.slug] ?? p.name, href: productPath(p.slug), context: "Eazotel" })),
    };
  });

  return { industries: industrySections, products: productGroups };
}
