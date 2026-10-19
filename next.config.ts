import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,

  // Off: source maps published the full source code to anyone. Turn on only for debugging.
  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 2678400,

    dangerouslyAllowSVG: true,

    contentDispositionType: "attachment",

    remotePatterns: [
      {
        protocol: "https",
        hostname: "eazotel-client-webp-image.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
  },

  experimental: {
    // Prefer ESM builds where available
    esmExternals: true,

    // Optimize package imports to reduce bundle size
    optimizePackageImports: [
      "lodash",
      "date-fns",
      "react-icons",
      "axios",
      "swiper",
    ],

    // CSS optimization
    optimizeCss: true,

    // Server React optimization
    optimizeServerReact: true,
    scrollRestoration: true,
  },

  compiler: { removeConsole: { exclude: ["error"] } },

  async redirects() {
    const to = (source: string, destination: string) => ({ source, destination, permanent: true });
    return [
      // Duplicate copies of main pages (SEO audit, Oct 2026): one URL per page.
      to("/services/", "/hospitality-marketing-services/"),
      to("/services/google-ads-agency/", "/hospitality-marketing-services/google-ads-agency/"),
      to("/services/seo-agency/", "/hospitality-marketing-services/seo-agency/"),
      to("/services/social-media-marketing-agency/", "/hospitality-marketing-services/social-media-marketing-agency/"),
      to("/hospitality-marketing/", "/hospitality-marketing-services/"),
      to("/hospitality-marketing/google-ads-agency/", "/hospitality-marketing-services/google-ads-agency/"),
      to("/hospitality-marketing/seo-agency/", "/hospitality-marketing-services/seo-agency/"),
      to("/hospitality-marketing/social-media-marketing-agency/", "/hospitality-marketing-services/social-media-marketing-agency/"),
      to("/industries-we-serves/", "/industries-we-serve/"),
      to("/industries-we-serves/:path*/", "/industries-we-serve/:path*/"),
      to("/search-engine-optimization/", "/hospitality-marketing-services/seo-agency/"),
      to("/search-engine-marketing/", "/hospitality-marketing-services/seo-agency/"),
      to("/social-media-marketing/", "/hospitality-marketing-services/social-media-marketing-agency/"),
      to("/hotel-marketing-solutions/", "/industries-we-serve/hotel-marketing-agency/"),
      to("/cloud-kitchen-digital-marketing/", "/industries-we-serve/cloud-kitchen-marketing-agency/"),
      to("/about-us/", "/about-fielmente-best-hospitality-marketing-agency/"),
      // Template copies of topics that already have an established page (Oct 2026): keep the older page.
      to("/industries-we-serve/hotel-marketing-agency/hotel-ota-management/", "/hotel-ota-management/"),
      to("/industries-we-serve/hotel-marketing-agency/hotel-performance-marketing/", "/hotel-performance-marketing-agency/"),

      // Near-duplicate blog posts merged into the main post on the same topic (Oct 2026).
      to("/5-reasons-hotels-lose-direct-bookings-on-whatsapp/", "/how-to-stop-losing-hotel-enquiries-on-whatsapp/"),
      to("/ai-whatsapp-for-destination-wedding-resorts/", "/ai-whatsapp-for-hotel-wedding-leads-from-enquiry-to-site-visit/"),
      to("/ai-whatsapp-for-luxury-resorts/", "/whatsapp-automation-for-hotels-the-complete-guide/"),
      to("/best-ai-whatsapp-chatbot-for-hotels/", "/best-whatsapp-automation-software-for-hotels/"),
      to("/can-ai-whatsapp-agents-check-hotel-availability/", "/24-7-ai-sales-agent-for-hotels-how-it-works/"),
      to("/eazotel-whatsapp-ai-vs-traditional-hotel-whatsapp-management/", "/whatsapp-automation-vs-traditional-hotel-sales-whats-the-difference/"),
      to("/from-enquiry-to-booking-how-eazotel-automates-hotel-sales/", "/eazotel-ai-whatsapp-agent-how-it-works-for-hotels/"),
      to("/from-whatsapp-enquiry-to-confirmed-booking-automating-the-entire-process/", "/whatsapp-booking-automation-how-hotels-can-convert-more-enquiries-into-reservations/"),
      to("/hotel-whatsapp-software-10-features-you-should-look-for/", "/best-whatsapp-automation-software-for-hotels/"),
      to("/how-ai-can-answer-hotel-faqs-instantly-on-whatsapp/", "/ai-whatsapp-chatbot-for-hotels-everything-hoteliers-need-to-know/"),
      to("/how-ai-can-handle-hotel-enquiries-on-whatsapp-without-human-intervention/", "/ai-whatsapp-chatbot-for-hotels-everything-hoteliers-need-to-know/"),
      to("/how-ai-can-handle-wedding-event-enquiries-for-resorts/", "/ai-whatsapp-for-hotel-wedding-leads-from-enquiry-to-site-visit/"),
      to("/how-ai-whatsapp-agents-can-follow-up-with-hotel-leads-automatically/", "/how-to-follow-up-with-every-hotel-lead-automatically/"),
      to("/how-ai-whatsapp-agents-can-recommend-rooms-packages-offers/", "/24-7-ai-sales-agent-for-hotels-how-it-works/"),
      to("/how-ai-whatsapp-agents-can-share-hotel-brochures-menus-packages/", "/24-7-ai-sales-agent-for-hotels-how-it-works/"),
      to("/how-ai-whatsapp-sales-agents-are-changing-hotel-bookings/", "/24-7-ai-sales-agent-for-hotels-how-it-works/"),
      to("/how-eazotel-automates-hotel-enquiries-on-whatsapp/", "/eazotel-ai-whatsapp-agent-how-it-works-for-hotels/"),
      to("/how-eazotel-connects-hotel-websites-booking-engines-whatsapp/", "/eazotel-ai-whatsapp-agent-how-it-works-for-hotels/"),
      to("/how-eazotels-ai-whatsapp-sales-agent-helps-hotels-convert-more-leads/", "/eazotel-ai-whatsapp-agent-how-it-works-for-hotels/"),
      to("/how-homestays-can-use-whatsapp-automation-to-increase-bookings/", "/whatsapp-automation-for-hotels-the-complete-guide/"),
      to("/how-hotels-can-automate-post-stay-follow-ups-on-whatsapp/", "/how-hotels-can-automate-guest-communication-on-whatsapp/"),
      to("/how-hotels-can-automate-promotional-messages-on-whatsapp/", "/whatsapp-marketing-for-hotels-the-complete-guide/"),
      to("/how-hotels-can-automate-repetitive-whatsapp-conversations/", "/ai-whatsapp-chatbot-for-hotels-everything-hoteliers-need-to-know/"),
      to("/how-hotels-can-build-a-complete-whatsapp-guest-journey/", "/how-hotels-can-automate-guest-communication-on-whatsapp/"),
      to("/how-hotels-can-connect-their-website-booking-engine-whatsapp/", "/how-to-integrate-whatsapp-with-a-hotel-booking-engine/"),
      to("/how-hotels-can-never-miss-a-whatsapp-enquiry-again/", "/how-to-stop-losing-hotel-enquiries-on-whatsapp/"),
      to("/how-hotels-can-use-ai-to-handle-thousands-of-whatsapp-conversations/", "/how-to-handle-100-hotel-enquiries-without-increasing-your-sales-team/"),
      to("/how-hotels-can-use-eazotel-to-automate-whatsapp-sales-24-7/", "/eazotel-ai-whatsapp-agent-how-it-works-for-hotels/"),
      to("/how-hotels-can-use-whatsapp-ai-to-increase-direct-bookings/", "/how-hotels-can-generate-more-direct-bookings-through-whatsapp/"),
      to("/how-hotels-can-use-whatsapp-to-upsell-rooms-packages/", "/whatsapp-upselling-for-hotels-rooms-food-spa-experiences/"),
      to("/how-resorts-can-automate-enquiries-availability-booking-on-whatsapp/", "/whatsapp-booking-automation-how-hotels-can-convert-more-enquiries-into-reservations/"),
      to("/how-resorts-can-automate-weekend-holiday-package-enquiries/", "/how-to-handle-100-hotel-enquiries-without-increasing-your-sales-team/"),
      to("/how-resorts-can-handle-peak-season-enquiries-with-ai/", "/how-to-handle-100-hotel-enquiries-without-increasing-your-sales-team/"),
      to("/how-to-choose-the-right-whatsapp-automation-platform-for-your-hotel/", "/best-whatsapp-automation-software-for-hotels/"),
      to("/how-to-recover-lost-hotel-leads-using-whatsapp-automation/", "/how-to-follow-up-with-every-hotel-lead-automatically/"),
      to("/how-to-respond-to-hotel-enquiries-in-seconds-not-hours/", "/how-to-stop-losing-hotel-enquiries-on-whatsapp/"),
      to("/how-whatsapp-automation-can-increase-hotel-conversion-rates/", "/how-hotels-can-generate-more-direct-bookings-through-whatsapp/"),
      to("/the-future-of-hotel-sales-ai-whatsapp-direct-booking/", "/24-7-ai-sales-agent-for-hotels-how-it-works/"),
      to("/the-hotel-lead-to-booking-journey-where-whatsapp-automation-fits/", "/whatsapp-booking-automation-how-hotels-can-convert-more-enquiries-into-reservations/"),
      to("/whatsapp-ai-for-villas-vacation-rentals/", "/whatsapp-automation-for-hotels-the-complete-guide/"),
      to("/whatsapp-automation-for-boutique-hotels/", "/whatsapp-automation-for-hotels-the-complete-guide/"),
      to("/whatsapp-automation-for-hotels-features-pricing-roi/", "/best-whatsapp-automation-software-for-hotels/"),
      to("/whatsapp-automation-for-pre-arrival-guest-communication/", "/how-hotels-can-automate-guest-communication-on-whatsapp/"),
      to("/whatsapp-automation-for-resorts-a-complete-guide/", "/whatsapp-automation-for-hotels-the-complete-guide/"),
      to("/whatsapp-campaigns-for-hotels-offers-that-drive-direct-bookings/", "/whatsapp-marketing-for-hotels-the-complete-guide/"),
      to("/whatsapp-crm-integration-for-hotels/", "/best-whatsapp-crm-for-hotels/"),
      to("/why-hotel-leads-go-cold-and-how-whatsapp-automation-can-fix-it/", "/how-to-follow-up-with-every-hotel-lead-automatically/"),
      to("/why-your-hotel-sales-team-is-spending-too-much-time-answering-whatsapp/", "/how-to-handle-100-hotel-enquiries-without-increasing-your-sales-team/"),

      // Old URLs that still get visits (GA4 / Search Console, Jul-Oct 2026).
      to("/about/", "/about-fielmente-best-hospitality-marketing-agency/"),
      to("/contact/", "/contact-us/"),
      to("/case-studies/", "/case-study/"),
      to("/branding/", "/industries-we-serve/hotel-marketing-agency/hotel-branding/"),
      to("/website-development/", "/industries-we-serve/hotel-marketing-agency/hotel-website-development/"),
      to("/restorent/", "/industries-we-serve/restaurant-marketing-agency/"),
      to("/cafe-marketing/", "/cafe-marketing-challenges-and-solutions/"),
      to("/product/:path*/", "/products/"),
      to("/eazbot-ai-chatbot-hotel-increase-direct-bookings/", "/products/hotel-ai-chatbot/"),
      to("/hotel-call-management-analytics-2026/", "/products/hotel-call-management-system/"),
      to("/eazotel-seo-dashboard-hotel-restaurant-keyword-rankings/", "/products/hotel-local-seo/"),
      to("/why-every-restaurant-should-invest-in-hyperlocal-seo-marketing/", "/industries-we-serve/restaurant-marketing-agency/restaurant-local-seo/"),
    ];
  },

  async headers() {
    const noindex = [{ key: "X-Robots-Tag", value: "noindex, follow" }];
    return [
      // Paid-ads landing pages: kept live for campaigns, kept out of Google's index (near-duplicates of each other).
      ...["/landing-page/", "/resort/", "/restaurant/", "/hospitality/", "/dubai-restaurant/", "/UK/", "/USA/", "/google-ads-for-hotels/"].map(
        (source) => ({ source, headers: noindex })
      ),
      // Vercel's own *.vercel.app addresses serve the same site: keep them out of search results.
      { source: "/:path*", has: [{ type: "host" as const, value: "(?<host>.*)\\.vercel\\.app" }], headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
    ];
  },
};

export default nextConfig;
