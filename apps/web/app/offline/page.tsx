// ============================================================
// Offline Page - Shown when user has no internet connection
// PWA-friendly offline fallback page
// ============================================================

import Link from "next/link";
import { WifiOff, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import { OfflineRetryButton } from "./retry-button";

// ─── SEO Metadata ─────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Offline | 75 Days Hard English",
  description: "You are currently offline. Some features may not be available.",
};

export default function OfflinePage() {
  return (
    // Full-height centered layout with dark background
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      {/* Offline icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-muted mb-6">
        <WifiOff className="h-10 w-10 text-muted-foreground" aria-hidden="true" />
      </div>

      {/* Main message */}
      <h1 className="text-3xl font-black text-foreground mb-3">
        You&apos;re Offline
      </h1>

      {/* Description */}
      <p className="text-muted-foreground text-base max-w-sm mb-2">
        It looks like you lost your internet connection. Don&apos;t worry — 
        your progress is saved and will sync when you&apos;re back online.
      </p>

      {/* Tip */}
      <p className="text-sm text-muted-foreground mb-8">
        Previously visited pages may still be available in your cache.
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Try again */}
        <OfflineRetryButton />

        {/* Go to cached dashboard */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-6 py-3 font-semibold text-foreground hover:bg-accent transition-all"
        >
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Go to Dashboard
        </Link>
      </div>

      {/* Footer note */}
      <p className="mt-12 text-xs text-muted-foreground/60">
        75 Days Hard English Course — Learning never stops
      </p>
    </main>
  );
}
