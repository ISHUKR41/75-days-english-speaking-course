// ============================================================
// robots.ts - Robots.txt generator
// Allows all web crawlers to index public pages
// Blocks private/auth pages from indexing
// ============================================================

import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers to access public content
        userAgent: "*",
        allow: [
          "/",
          "/day/",
          "/writing",
          "/revision",
          "/vocabulary",
          "/speaking",
          "/leaderboard",
          "/mock-test",
        ],
        disallow: [
          // Auth pages — no indexing needed
          "/sign-in",
          "/sign-up",
          // Private user pages
          "/dashboard",
          "/profile",
          "/settings",
          "/progress",
          // API routes
          "/api/",
          // Next.js internals
          "/_next/",
          "/_vercel/",
        ],
      },
      {
        // Block AI training bots
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },
      {
        userAgent: "Claude-Web",
        disallow: ["/"],
      },
    ],
    // Link to sitemap for Google crawlers
    sitemap: `${BASE_URL}/sitemap.xml`,
    // Canonical host
    host: BASE_URL,
  };
}
