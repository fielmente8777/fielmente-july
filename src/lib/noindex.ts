// Paid-ads landing pages: kept live for campaigns, kept out of Google's index (near-duplicates of each other).
// One list drives both signals so they can never disagree:
//  - next.config.ts sends `X-Robots-Tag: noindex, follow` for these paths
//  - each page sets `robots: NOINDEX_ROBOTS` so its <meta name="robots"> says the same
// Next.js merges metadata shallowly, so a page that sets no `robots` inherits the root layout's
// `index: true` (that mismatch is what SEO checkers flag). Add a path here AND use NOINDEX_ROBOTS on the page.
import type { Metadata } from "next";

export const NOINDEX_PATHS = ["/landing-page/", "/resort/", "/restaurant/", "/hospitality/", "/dubai-restaurant/", "/UK/", "/USA/"];

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: { index: false, follow: true },
};
