// fielmente.com pages that are ad landing pages. They get the call and WhatsApp buttons but no SalesIQ chat;
// every other page of the website gets SalesIQ too. NavBar.tsx and Footer.tsx give most of these pages a
// landing header and footer, so add a new landing page there as well.
// (The separate landing sites, such as lp.fielmente.com, live in their own repos and have no SalesIQ.)

export const LANDING_PAGE_PATHS = [
  "/landing-page/",
  "/USA/",
  "/UK/",
  "/resort/",
  "/hospitality/",
  "/restaurant/",
  "/dubai-restaurant/",
  "/google-ads-for-hotels/",
];

export const isLandingPage = (pathname: string | null) =>
  !!pathname && LANDING_PAGE_PATHS.some((p) => pathname === p || pathname === p.slice(0, -1));
