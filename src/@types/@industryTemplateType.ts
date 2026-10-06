// Content model for the industry pages (/industries-we-serve/<industry>/) and their service pages.
// Data: src/app/industries-we-serve/data/. Templates: src/app/industries-we-serve/components/templates/.
import type { IconKey } from "@/utils/serviceIcons";

export interface IndustryProfile {
  slug: string; // industries-we-serve/<slug>/
  prefix: string; // service slug prefix
  name: string; // "Hotel"
  label: string; // "Hotel Marketing"
  noun: string; // "hotel"
  plural: string; // "hotels"
  guests: string; // "guests"
  audience: string;
  bookAction: string;
  goal: string;
  channels: string;
  reviewSites: string;
  searches: string[];
  peaks: string;
  showcase: string;
  icon: IconKey;
  heroImage: string;
  heroAlt: string;
  secondImage: string;
  secondAlt: string;
  heroTitle: string;
  heroLede: string;
  cardLine: string;
  without: string[];
  withList: string[];
  caseStudies: string[];
  products: string[];
  services: ServiceKey[];
  /** Service keys that already have a page — linked instead of rebuilt. A path under
   * /industries-we-serve/ ("hotel-marketing-agency/hotel-seo") or a full path ("/hotel-performance-marketing-agency/"). */
  existing?: Partial<Record<ServiceKey, string>>;
  faqs: { q: string; a: string }[];
  meta: { title: string; description: string };
}

export type ServiceKey =
  | "social-media-management"
  | "local-seo"
  | "website-seo"
  | "ai-search-optimization"
  | "preopening-marketing"
  | "ota-management"
  | "ota-listing"
  | "revenue-management"
  | "website-development"
  | "sales-marketing-automation"
  | "content-creation"
  | "branding"
  | "performance-marketing"
  | "sales-marketing-consultation"
  | "pr-communication"
  | "influencer-marketing"
  | "social-media-ai-automation"
  | "online-reputation-management"
  | "social-media-reservation-automation";

export interface ServiceContent {
  heroTitle: string;
  heroLede: string;
  without: string[];
  withList: string[];
  featuresLede: string;
  features: { icon: IconKey; title: string; body: string }[];
  steps: { title: string; body: string }[];
  measure: string[];
  faqs: { q: string; a: string }[];
}

export interface ServiceType {
  key: ServiceKey;
  label: string;
  icon: IconKey;
  image: string;
  /** Artwork is portrait/low-res: hero shows the industry photo instead, with a service card. */
  heroPhoto?: boolean;
  card: (I: IndustryProfile) => string;
  products: string[];
  build: (I: IndustryProfile) => ServiceContent;
}

export interface ServicePageRef {
  path: string; // "hotel-marketing-agency/hotel-local-seo"
  I: IndustryProfile;
  key: ServiceKey;
}
