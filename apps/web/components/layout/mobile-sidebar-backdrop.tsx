"use client";
// ============================================================
// Mobile Sidebar Backdrop - Closes sidebar when tapping outside
// Rendered in the layout so it covers the full content area
// ============================================================

import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "@/components/ui/sidebar";

export function MobileSidebarBackdrop() {
  const { open, setOpen } = useSidebar();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-20 bg-background/70 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
