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
