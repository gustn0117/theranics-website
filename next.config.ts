import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    qualities: [75, 90, 95],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
};

export default nextConfig;
