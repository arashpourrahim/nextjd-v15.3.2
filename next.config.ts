import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      buffer: false,
      ieee754: false,
      "file-saver": false,
    };
    return config;
  },
};

export default nextConfig;
