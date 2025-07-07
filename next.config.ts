import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Disable specific ESLint rules during build
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
