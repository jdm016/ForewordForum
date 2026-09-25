import type { NextConfig } from "next";

// Every page is prerendered to static HTML at build time. We do not use
// `output: "export"` because the waitlist form posts to an API route
// (app/api/waitlist/route.ts), which needs a serverless function on
// Vercel or Netlify. Everything else ships as static files.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
