import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  images: {
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
    esmExternals: true, // helps prefer modern builds
    optimizePackageImports: ["lodash", "date-fns", "react-icons"],
    optimizeCss: true,
    optimizeServerReact: true,
  },
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
  productionBrowserSourceMaps: true,
};

export default nextConfig;
