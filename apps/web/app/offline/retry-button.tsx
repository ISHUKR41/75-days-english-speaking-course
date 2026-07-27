"use client";

// Browser-only retry action for the offline fallback page.
import { RefreshCw } from "lucide-react";

// Reload the current document after the browser reconnects.
export function OfflineRetryButton() {
  return (
    <button
      onClick={() => window.location.reload()}
      className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90"
      type="button"
    >
      <RefreshCw className="h-4 w-4" aria-hidden="true" />
      Try Again
    </button>
  );
}