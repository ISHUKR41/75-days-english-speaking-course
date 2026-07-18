"use client";
// ============================================================
// Theme Toggle - Sun/Moon button to switch between dark/light mode
// ============================================================

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  // Get current theme and setter from next-themes
  const { theme, setTheme } = useTheme();
  
  // Track mounted state to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  // Only render after mount to avoid SSR/client mismatch
  useEffect(() => setMounted(true), []);

  // Don't render until mounted
  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-xl border border-border bg-card" aria-hidden="true" />
    );
  }

  // Toggle between dark and light
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-xl 
                 border border-border bg-card text-muted-foreground
                 hover:bg-accent hover:text-foreground 
                 transition-colors duration-200"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Animated icon swap */}
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-4 w-4" aria-hidden="true" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
