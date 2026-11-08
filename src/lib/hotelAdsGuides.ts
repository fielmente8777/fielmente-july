import { hotelAdsGuideBatch1 } from "./hotelAdsGuidesBatch1";
import { hotelAdsGuideBatch2 } from "./hotelAdsGuidesBatch2";
import { hotelAdsGuideBatch3 } from "./hotelAdsGuidesBatch3";
import { hotelAdsGuideBatch4 } from "./hotelAdsGuidesBatch4";
import { hotelAdsGuideBatch5 } from "./hotelAdsGuidesBatch5";

export type HotelAdsGuide = {
  slug: string;
  title: string;
  description: string;
  category: "Connectivity" | "Campaigns" | "Direct Bookings";
  primary: string;
  intro: string[];
  flow: string[];
  sections: { heading: string; body: string[]; checklist: string[] }[];
  mistakes: string[];
  faqs: { q: string; a: string }[];
  sources: string[];
};

export const hotelAdsGuides: HotelAdsGuide[] = [
  ...hotelAdsGuideBatch1,
  ...hotelAdsGuideBatch2,
  ...hotelAdsGuideBatch3,
  ...hotelAdsGuideBatch4,
  ...hotelAdsGuideBatch5,
];
export const hotelAdsGuideBySlug = new Map(hotelAdsGuides.map((guide) => [guide.slug, guide]));
export const HOTEL_ADS_GUIDE_HUB = "https://fielmente.com/google-hotel-ads-guides/";
