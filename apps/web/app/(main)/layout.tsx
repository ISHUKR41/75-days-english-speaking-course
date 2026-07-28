// ============================================================
// Main App Layout - For all authenticated pages
// Includes sidebar navigation, header, and content area
// SmoothScrollProvider adds Lenis smooth scrolling to all pages
// ============================================================

import { redirect } from "next/navigation";
import { safeAuth } from "@/lib/safe-auth";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { MobileSidebarBackdrop } from "@/components/layout/mobile-sidebar-backdrop";
import { SidebarMobileCloser } from "@/components/layout/sidebar-mobile-closer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";

// Ensure user is authenticated for all pages inside (main)
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check authentication status (safe wrapper handles invalid Clerk keys)
  const { userId } = await safeAuth();

  // Never render course pages without an authenticated Clerk session.
  // A Clerk secret must be added before dashboard/day routes can open.
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    // SmoothScrollProvider wraps Lenis for buttery smooth scrolling
    <SmoothScrollProvider>
      {/* SidebarProvider manages sidebar open/close state */}
      <SidebarProvider
        defaultOpen={true}
        style={
          {
            // CSS variable for sidebar width
            "--sidebar-width": "280px",
            "--sidebar-width-mobile": "100vw",
          } as React.CSSProperties
        }
      >
        {/* Main layout grid */}
        <div className="flex min-h-screen w-full bg-background">
          {/* Left sidebar navigation */}
          <AppSidebar />

          {/* Close sidebar on mobile immediately after mount */}
          <SidebarMobileCloser />

          {/* Mobile backdrop overlay — tapping outside closes sidebar */}
          <MobileSidebarBackdrop />

          {/* Main content area */}
          <div className="flex flex-1 flex-col min-w-0">
            {/* Top header bar */}
            <AppHeader />

            {/* Page content */}
            <main
              className="flex-1 overflow-auto p-4 md:p-6 lg:p-8"
              id="main-content"
            >
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </SmoothScrollProvider>
  );
}
