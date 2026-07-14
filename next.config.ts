import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add this configuration to fix your ERR_CONNECTION_RESET file upload limits
  experimental: {
    serverActions: {
      bodySizeLimit: "500mb", // Change this size to match the largest game file you plan to support
    },
  },
};

export default nextConfig;