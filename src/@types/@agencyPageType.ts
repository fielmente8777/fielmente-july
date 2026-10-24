// Content model for the agency landing pages (location and specialty pages).
// Each page is one data file in src/app/(agency)/data/. The template is src/app/(agency)/components/AgencyPage.tsx.
import type { IconKey } from "@/utils/serviceIcons";
import type { PlatformKey } from "@/utils/platforms";

/** A market or industry fact with its source. Cite it in any text with [[ID]]. */
export interface SourceRef {
  id: string; // e.g. "AE1"
  label: string; // publisher and title, e.g. "Dubai Media Office (DET), Feb 2026"
  url: string;
}

/** An image in /public, or a free Unsplash photo:
 * "https://images.unsplash.com/photo-<id>?w=1920&q=80&fm=jpg&fit=max" (unsplash.com/license, no credit required). */
export interface ImageRef {
  src: string;
  /** Kept from earlier drafts; not used for rendering. */
  fallback?: string;
  alt: string;
}

export interface Stat {
  value: string;
  label: string;
  /** Source id from the page's `sources`. */
  source?: string;
}

export type TestimonialKey = "donald-wingell" | "atinder-bajwa" | "unnati-stayinn" | "siddhi-vinayak" | "tino-frangline";

/** Which client logos to show first. */
export type LogoSet = "international" | "resorts" | "hotels" | "restaurants" | "travel" | "all";

export type Block =
  | {
      kind: "split";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      bullets?: string[];
      image: ImageRef;
      reverse?: boolean;
    }
  | {
      kind: "table";
      eyebrow?: string;
      title: string;
      lede?: string;
      columns: string[];
      rows: string[][];
      note?: string;
    }
  | {
      kind: "cards";
      eyebrow?: string;
      title: string;
      lede?: string;
      items: { icon: IconKey; title: string; body: string }[];
    };

export interface AgencyPageData {
  /** URL path without slashes at the ends. Usually a root slug ("hotel-marketing-agency-dubai"), or the
   * path of an existing page this one replaces ("industries-we-serve/hotel-marketing-agency/hotel-google-ads"). */
  slug: string;
  /** Breadcrumb trail between Home and this page. Defaults to the International or Services hub. */
  crumbs?: { label: string; href: string }[];
  /** The search phrase this page owns. No other page should target it. */
  keyword: string;
  secondaryKeywords: string[];
  /** location = a market, specialty = a hotel speciality, ads = an advertising platform we run. */
  group: "location" | "specialty" | "ads";
  /** Official logos of the platforms this page is about, shown in the hero. */
  platforms?: PlatformKey[];
  /** Short name used in links between pages, e.g. "Hotel marketing in Dubai". */
  navLabel: string;
  /** One line used on cards that link to this page. */
  cardLine: string;
  /** schema.org areaServed, e.g. "Dubai, United Arab Emirates" or "Worldwide". */
  areaServed: string;
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    /** 3 short proof points shown under the lede. */
    chips: string[];
  };
  form: {
    title: string;
    body: string;
    /** Phone country code selected by default, e.g. "+971". Must exist in src/utils/countryCode.tsx. */
    defaultCountryCode: string;
    /** Options for "What do you need help with?" */
    needs: string[];
  };
  logos: LogoSet;
  context: {
    eyebrow: string;
    title: string;
    intro: string[];
    stats: Stat[];
    image: ImageRef;
    points: { title: string; body: string }[];
  };
  comparison: { title: string; without: string[]; withList: string[] };
  services: {
    title: string;
    lede: string;
    /** `platform`: show that platform's official logo instead of the icon. */
    items: { icon: IconKey; title: string; body: string; href: string; platform?: PlatformKey }[];
  };
  proof: {
    title: string;
    lede: string;
    /** Slugs from src/app/case-study/[story]/components/caseData.tsx */
    caseStudies: string[];
    testimonials: TestimonialKey[];
    /** One honest sentence about where the results come from. */
    honestNote: string;
  };
  process: {
    title: string;
    lede: string;
    steps: { when: string; title: string; body: string }[];
  };
  /** 2–3 deep-dive sections specific to this page. */
  blocks: Block[];
  faqs: { q: string; a: string }[];
  /** Slugs of other agency pages to link to. */
  related: string[];
  /** Links to industry pages, service pages, products and case studies. */
  extraLinks: { title: string; body: string; href: string }[];
  cta: { title: string; body: string };
  sources: SourceRef[];
}
