"use client";
// ============================================================
// SmoothScrollProvider — wraps Lenis for all authenticated pages
// Initializes Lenis smooth scroll on mount, cleans up on unmount
// Uses useEffect to avoid hydration errors (client-only)
// ============================================================

import { useEffect } from "react";

// Minimal Lenis type — only what we use
interface LenisInstance {
  raf: (time: number) => void;
  destroy: () => void;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: LenisInstance | null = null;
    let rafId: number;

    // Dynamically import Lenis to avoid SSR issues
    const init = async () => {
      try {
        const LenisModule = await import("lenis");
        const Lenis = LenisModule.default;
        lenis = new Lenis({
          duration: 1.1, // smooth scroll duration in seconds
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        }) as unknown as LenisInstance;

        // RAF loop — Lenis needs to be called each frame
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // Lenis unavailable — fall back to native scroll silently
      }
    };

    init();

    // Cleanup on unmount
    return () => {
      if (lenis) lenis.destroy();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Render children directly — this is a transparent provider
  return <>{children}</>;
}
