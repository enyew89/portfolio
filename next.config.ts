import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the Next.js dev-tools indicator (the "N" button) in development.
  // It never shows in production builds, but this keeps dev previews clean too.
  devIndicators: false,
};

export default nextConfig;
