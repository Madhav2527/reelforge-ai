import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/reelforge-ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
