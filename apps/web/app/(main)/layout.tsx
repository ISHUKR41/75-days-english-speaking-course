// ============================================================
// Main App Layout - For all authenticated pages
// Includes sidebar navigation, header, and content area
// ============================================================

import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { SidebarProvider } from "@/components/ui/sidebar";

// Ensure user is authenticated for all pages inside (main)
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check authentication status
  const { userId } = await auth();

  // Redirect to sign-in if not authenticated
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    // SidebarProvider manages sidebar open/close state
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
  );
}
