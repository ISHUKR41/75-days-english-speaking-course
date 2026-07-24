"use client";
// ============================================================
// SidebarMobileCloser — Closes sidebar on mobile on first mount
// Prevents the sidebar from overlaying content on small screens
// when defaultOpen={true} is set in SidebarProvider
// ============================================================

import { useEffect } from "react";
import { useSidebar } from "@/components/ui/sidebar";

export function SidebarMobileCloser() {
  const { setOpen } = useSidebar();

  useEffect(() => {
    // Close sidebar on mobile screens (< 1024px = lg breakpoint)
    if (window.innerWidth < 1024) {
      setOpen(false);
    }
  }, [setOpen]); // Run on mount; the provider action is the only dependency

  return null; // Renders nothing
}
