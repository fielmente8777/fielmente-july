// Page-specific copy for industry service pages, by industry prefix (see types.ts).
import type { ServiceKey } from "@/@types/@industryTemplateType";
import { homestayAngles } from "./homestay";
import { hotelAngles } from "./hotel";
import { resortAngles } from "./resort";
import { cloudKitchenAngles, restaurantAngles } from "./restaurant";
import type { AngleSet, ServiceAngle } from "./types";
import { travelAngles, weddingVenueAngles } from "./venue-travel";
import { wellnessAngles } from "./wellness";

export type { ServiceAngle } from "./types";

const ANGLES: Record<string, AngleSet> = {
  hotel: hotelAngles,
  resort: resortAngles,
  "homestay-villa": homestayAngles,
  "wellness-retreat": wellnessAngles,
  restaurant: restaurantAngles,
  "cloud-kitchen": cloudKitchenAngles,
  "wedding-venue": weddingVenueAngles,
  travel: travelAngles,
};

export const serviceAngle = (prefix: string, key: ServiceKey): ServiceAngle | undefined => ANGLES[prefix]?.[key];
