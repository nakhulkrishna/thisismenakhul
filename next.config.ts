import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/thisismenakhul",
  assetPrefix: "/thisismenakhul",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
