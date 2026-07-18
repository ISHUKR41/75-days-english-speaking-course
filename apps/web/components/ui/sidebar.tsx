"use client";
// ============================================================
// Sidebar UI Component - Context and hook for sidebar state
// Used by AppSidebar and AppHeader to sync open/close state
// ============================================================

import { createContext, useContext, useState, type ReactNode } from "react";

// ─── Sidebar Context ──────────────────────────────────────────
interface SidebarContextValue {
  open: boolean;          // Is sidebar expanded?
  setOpen: (open: boolean) => void;
}

// Create the context with a default value
const SidebarContext = createContext<SidebarContextValue>({
  open: true,
  setOpen: () => {},
});

// ─── SidebarProvider Component ────────────────────────────────
// Wrap the layout with this to share sidebar state
interface SidebarProviderProps {
  children: ReactNode;
  defaultOpen?: boolean;  // Initial open state
  style?: React.CSSProperties;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
  style,
}: SidebarProviderProps) {
  // Internal state for sidebar open/close
  const [open, setOpen] = useState(defaultOpen);

  return (
    // Provide the state to all children
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div style={style} className="flex h-full w-full">
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

// ─── useSidebar Hook ──────────────────────────────────────────
// Hook to access sidebar state from any component
export function useSidebar(): SidebarContextValue {
  const context = useContext(SidebarContext);

  // Throw helpful error if used outside provider
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
}
