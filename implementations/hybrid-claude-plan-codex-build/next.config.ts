import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
  },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
