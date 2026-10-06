// Registry of the agency landing pages (location and specialty pages).
// Add a page: create its data file here, import it below, then add a route folder with a page.tsx.
import type { AgencyPageData } from "@/@types/@agencyPageType";
import boutiqueHotelMarketingAgency from "./boutique-hotel-marketing-agency";
import hospitalityMarketingAgencyDubai from "./hospitality-marketing-agency-dubai";
import hospitalitySeoAgency from "./hospitality-seo-agency";
import hotelAiMarketingAgency from "./hotel-ai-marketing-agency";
import hotelDirectBookingMarketingAgency from "./hotel-direct-booking-marketing-agency";
import hotelGoogleAdsAgency from "./hotel-google-ads-agency";
import hotelMarketingAgencyDubai from "./hotel-marketing-agency-dubai";
import hotelMarketingAgencyUae from "./hotel-marketing-agency-uae";
import hotelMarketingAgencyUk from "./hotel-marketing-agency-uk";
import hotelMarketingAgencyUsa from "./hotel-marketing-agency-usa";
import hotelPerformanceMarketingAgency from "./hotel-performance-marketing-agency";
import hotelRevenueMarketingAgency from "./hotel-revenue-marketing-agency";
import internationalHotelMarketingAgency from "./international-hotel-marketing-agency";
import luxuryResortMarketingAgency from "./luxury-resort-marketing-agency";
import resortMarketingAgency from "./resort-marketing-agency";

export const AGENCY_PAGES: AgencyPageData[] = [
  hotelMarketingAgencyDubai,
  hospitalityMarketingAgencyDubai,
  hotelMarketingAgencyUae,
  hotelMarketingAgencyUsa,
  hotelMarketingAgencyUk,
  internationalHotelMarketingAgency,
  resortMarketingAgency,
  luxuryResortMarketingAgency,
  hotelGoogleAdsAgency,
  hospitalitySeoAgency,
  hotelPerformanceMarketingAgency,
  hotelRevenueMarketingAgency,
  boutiqueHotelMarketingAgency,
  hotelDirectBookingMarketingAgency,
  hotelAiMarketingAgency,
];

export const getAgencyPage = (slug: string) => AGENCY_PAGES.find((p) => p.slug === slug);
