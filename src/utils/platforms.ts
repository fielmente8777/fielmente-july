// Official logos of the ad and listing platforms we run for clients, shown on service pages, ad pages,
// the menu and the platform strip. Files live in /public/platforms (SVG) and /public/partners (PNG wordmarks).
// Logos are used only to say which platform a service runs on; they belong to their owners.

export type PlatformKey =
  | "google-ads"
  | "google"
  | "google-hotels"
  | "google-hotel-center"
  | "google-maps"
  | "google-business-profile"
  | "google-analytics"
  | "google-search-console"
  | "gemini"
  | "chatgpt"
  | "perplexity"
  | "meta"
  | "facebook"
  | "instagram"
  | "whatsapp"
  | "youtube"
  | "tripadvisor"
  | "zomato"
  | "swiggy"
  | "booking"
  | "expedia"
  | "agoda"
  | "makemytrip"
  | "goibibo"
  | "airbnb"
  | "trivago"
  | "hotels-com";

export interface Platform {
  /** Brand name shown next to the logo ("ChatGPT", "Tripadvisor"). */
  name: string;
  /** What we run on it, used on platform cards ("ChatGPT Ads"). Defaults to the name. */
  service?: string;
  /** Logo file in /public. */
  logo: string;
  /** The file is a full wordmark (name included), so the name isn't repeated beside it. */
  wordmark?: boolean;
  /** Our page about running this platform, when there is one. */
  href?: string;
  /** One line used on platform cards. */
  line?: string;
}

export const PLATFORMS: Record<PlatformKey, Platform> = {
  "google-ads": { name: "Google Ads", logo: "/platforms/google-ads.svg", href: "/industries-we-serve/hotel-marketing-agency/hotel-google-ads/", line: "Search, Performance Max and YouTube" },
  google: { name: "Google", service: "Google SEO", logo: "/platforms/google-icon.svg", href: "/hospitality-marketing-services/seo-agency/", line: "Rank your own website above the OTAs" },
  "google-hotels": { name: "Google Hotels", service: "Google Hotel Ads", logo: "/platforms/google-icon.svg", href: "/google-hotel-ads-agency/", line: "Your direct rate in Google's price box" },
  "google-hotel-center": { name: "Hotel Center", service: "Google Hotel Center", logo: "/platforms/google-icon.svg", href: "/google-hotel-center/", line: "Free booking links on Search and Maps" },
  "google-maps": { name: "Google Maps", service: "Google Maps & local SEO", logo: "/platforms/google-maps.svg", href: "/industries-we-serve/hotel-marketing-agency/hotel-local-seo/", line: "Business Profile, reviews and map rankings" },
  "google-business-profile": { name: "Google Business Profile", logo: "/platforms/google-maps.svg", href: "/industries-we-serve/hotel-marketing-agency/hotel-local-seo/", line: "Ranking on Google Maps" },
  "google-analytics": { name: "Google Analytics", logo: "/platforms/google-analytics.svg" },
  "google-search-console": { name: "Search Console", logo: "/platforms/google-search-console.svg" },
  gemini: { name: "Gemini", logo: "/platforms/google-gemini.svg" },
  chatgpt: { name: "ChatGPT", service: "ChatGPT Ads", logo: "/platforms/chatgpt.svg", href: "/chatgpt-ads-agency/", line: "Sponsored placements in ChatGPT" },
  perplexity: { name: "Perplexity", logo: "/platforms/perplexity.svg" },
  meta: { name: "Meta", service: "Meta Ads", logo: "/platforms/meta-icon.svg", href: "/hospitality-meta-ads-agency/", line: "Facebook and Instagram campaigns" },
  facebook: { name: "Facebook", logo: "/platforms/facebook.svg", href: "/hospitality-meta-ads-agency/" },
  instagram: { name: "Instagram", logo: "/platforms/instagram.svg", href: "/hospitality-marketing-services/social-media-marketing-agency/", line: "Reels, content, ads and DMs" },
  whatsapp: { name: "WhatsApp", logo: "/platforms/whatsapp.svg", href: "/products/hotel-whatsapp-marketing/", line: "Enquiries, follow-ups and broadcasts" },
  youtube: { name: "YouTube", logo: "/platforms/youtube.svg" },
  tripadvisor: { name: "Tripadvisor", service: "Tripadvisor Ads", logo: "/platforms/tripadvisor.svg", href: "/tripadvisor-ads-agency/", line: "Sponsored Placements and restaurant ads" },
  zomato: { name: "Zomato", service: "Zomato Ads", logo: "/platforms/zomato.svg", href: "/zomato-swiggy-ads-agency/", line: "Sponsored listings, menu and ratings" },
  swiggy: { name: "Swiggy", service: "Swiggy Ads", logo: "/platforms/swiggy.svg", href: "/zomato-swiggy-ads-agency/", line: "In-app ads, listings and offers" },
  booking: { name: "Booking.com", logo: "/platforms/booking.svg", href: "/ota-ads-management/", line: "Sponsored listings and listing care" },
  expedia: { name: "Expedia", logo: "/platforms/expedia.svg", href: "/ota-ads-management/", line: "TravelAds sponsored listings" },
  agoda: { name: "Agoda", logo: "/partners/agoda-logo.png", wordmark: true, href: "/hotel-ota-management/", line: "Listing, rates and visibility" },
  makemytrip: { name: "MakeMyTrip", logo: "/partners/makemytrip-logo.png", wordmark: true, href: "/hotel-ota-management/", line: "Listing, rates and promotions" },
  goibibo: { name: "Goibibo", logo: "/partners/goibibo-logo.png", wordmark: true, href: "/hotel-ota-management/" },
  airbnb: { name: "Airbnb", logo: "/platforms/airbnb.svg", wordmark: true, href: "/industries-we-serve/homestay-villa-marketing-agency/", line: "Listings for villas and homestays" },
  trivago: { name: "trivago", logo: "/platforms/trivago.svg", href: "/hotel-metasearch-marketing-agency/", line: "Metasearch on cost per stay" },
  "hotels-com": { name: "Hotels.com", logo: "/platforms/hotels-com.svg" },
};

/** Platforms shown in the "Platforms we run" strip, in order. */
export const PLATFORM_STRIP: PlatformKey[] = [
  "google-ads",
  "google-hotels",
  "chatgpt",
  "meta",
  "instagram",
  "tripadvisor",
  "google-maps",
  "booking",
  "expedia",
  "zomato",
  "swiggy",
  "whatsapp",
];
