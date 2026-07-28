// ============================================================
// Sitemap Generator - 75 Days Hard English Course
// Generates XML sitemap for all routes for Google indexing
// Uses Next.js 14 App Router MetadataRoute.Sitemap format
// ============================================================

import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static pages ────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/dashboard`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/writing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/revision`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vocabulary`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/speaking`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/progress`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/leaderboard`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/mock-test`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/profile`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/settings`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];

  // ── All 75 day pages ─────────────────────────────────────────
  const dayPages: MetadataRoute.Sitemap = Array.from(
    { length: 75 },
    (_, i) => {
      const dayNum = i + 1;
      return {
        url: `${BASE_URL}/day/${dayNum}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        // Higher priority for early days (more likely to be visited first)
        priority: dayNum <= 7 ? 0.9 : dayNum <= 30 ? 0.7 : 0.6,
      };
    }
  );

  // ── Quiz pages for each day ──────────────────────────────────
  const quizPages: MetadataRoute.Sitemap = Array.from(
    { length: 75 },
    (_, i) => {
      const dayNum = i + 1;
      return {
        url: `${BASE_URL}/day/${dayNum}/quiz`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: dayNum <= 7 ? 0.8 : 0.5,
      };
    }
  );

  // ── Vocabulary pages for each day ────────────────────────────
  const vocabPages: MetadataRoute.Sitemap = Array.from(
    { length: 75 },
    (_, i) => {
      const dayNum = i + 1;
      return {
        url: `${BASE_URL}/day/${dayNum}/vocabulary`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: dayNum <= 14 ? 0.7 : 0.5,
      };
    }
  );

  return [...staticPages, ...dayPages, ...quizPages, ...vocabPages];
}
