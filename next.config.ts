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



};

export default nextConfig;
