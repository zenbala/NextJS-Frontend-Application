import path from "path";
import type { NextConfig } from "next";

// Central Next.js runtime configuration for builds and local development.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
      },
    ],
  },
  turbopack: {
    // Keep Turbopack rooted at this app when the repository has a parent folder.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
