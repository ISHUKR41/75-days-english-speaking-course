"use client";
// ============================================================
// Theme Provider - Wraps the app with next-themes for dark/light mode
// ============================================================

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

// Re-export the ThemeProvider component with all props passed through
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
