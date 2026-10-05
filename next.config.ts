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
  // Pages that are live on fielmente.com but not in this repo
  // (e.g. the cloud kitchen SEO page) are served from the live site.
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        {
          source: "/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo/",
          destination: "https://fielmente.com/industries-we-serve/cloud-kitchen-marketing-agency/cloud-kitchen-seo/",
        },
      ],
      fallback: [{ source: "/:path*", destination: "https://fielmente.com/:path*" }],
    };
  },

  // Keep the Vercel test copy out of search results.
  async headers() {
    return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },



};

export default nextConfig;
