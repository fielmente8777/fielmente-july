import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  compress: true,

  poweredByHeader: false,

  reactStrictMode: true,

  productionBrowserSourceMaps: true,

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

  // PREVIEW BRANCH ONLY (rewrites and headers below): do not merge into the live site.
  // The cloud kitchen SEO page is live on fielmente.com but its code isn't in this repo.
  async rewrites() {
    return [
      {
        source: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo/",
        destination: "https://fielmente.com/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo/",
      },
    ];
  },

  // Keep the Vercel test copy out of search results.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },



};

export default nextConfig;
