import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rashi.ai",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
