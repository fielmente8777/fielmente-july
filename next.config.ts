import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Generates URLs with trailing slash
  trailingSlash: true,

  // Disable source maps in production to reduce build size
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],

    // Cache optimized images for 30 days
    minimumCacheTTL: 60 * 60 * 24 * 30,

    // Allow external image domains
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
  },

  compiler: { removeConsole: { exclude: ["error"] } },

  // Enable compression
  compress: true,

  // Improve build output for deployment
  poweredByHeader: false,

  // Optional: standalone output for smaller deployments
  // output: "standalone",
};

export default nextConfig;
