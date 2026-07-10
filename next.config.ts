import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["IP"],
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;