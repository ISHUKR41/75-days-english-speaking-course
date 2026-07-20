// ============================================================
// Root Layout - 75 Days Hard English Course
// Sets up fonts, themes, authentication, and global providers
// ============================================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";
import { QueryProvider } from "@/components/layout/query-provider";
import "@/styles/globals.css";

// ─── Font Configuration ──────────────────────────────────────
// Using Inter for a clean, professional look (similar to Linear/Vercel)
const inter = Inter({
  // Load only the weights we actually need
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap", // Use font-display: swap for better performance
});

// ─── SEO Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  // Main title template
  title: {
    default: "75 Days Hard English Course",
    template: "%s | 75 Days Hard English",
  },
  description:
    "The World's Most Advanced English Learning Platform. Master fluent English in 75 days with AI-powered lessons, 200+ daily vocabulary, speaking practice, and gamified learning.",
  keywords: [
    "English learning",
    "75 days English",
    "learn English online",
    "English speaking course",
    "grammar lessons",
    "vocabulary building",
    "English for beginners",
    "fluent English",
    "professional English",
    "office English",
  ],
  authors: [{ name: "75 Days Hard English Team" }],
  creator: "75 Days Hard English",

  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com",
    title: "75 Days Hard English Course",
    description:
      "Master fluent English in 75 days with AI-powered personalized learning",
    siteName: "75 Days Hard English",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "75 Days Hard English Course",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "75 Days Hard English Course",
    description: "Master fluent English in 75 days",
    images: ["/og-image.png"],
  },

  // Favicon and icons — using SVG icons (no PNG required)
  icons: {
    icon: [
      { url: "/icons/icon-96x96.svg", sizes: "96x96", type: "image/svg+xml" },
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
    ],
  },

  // PWA Manifest
  manifest: "/manifest.json",

  // Robot configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your codes here)
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

// ─── Viewport Configuration ───────────────────────────────────
export const viewport: Viewport = {
  // Responsive viewport
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Theme color for browser chrome
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

// ─── Root Layout Component ────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set language for screen readers and SEO
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Clerk authentication provider */}
        <ClerkProvider
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
          appearance={{
            // Custom styling for Clerk components
            variables: {
              colorPrimary: "#6272f1",
              colorBackground: "hsl(222.2 84% 4.9%)",
              colorInputBackground: "hsl(217.2 32.6% 17.5%)",
              colorInputText: "hsl(210 40% 98%)",
              colorText: "hsl(210 40% 98%)",
              colorTextSecondary: "hsl(215 20.2% 65.1%)",
              borderRadius: "0.625rem",
            },
            elements: {
              card: "shadow-card-xl border border-border",
              formButtonPrimary: "btn-primary",
              headerTitle: "text-2xl font-bold",
            },
          }}
        >
          {/* Theme provider for dark/light mode */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {/* React Query provider for data fetching */}
            <QueryProvider>
              {/* Main content */}
              {children}

              {/* Global toast notifications */}
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: "hsl(var(--card))",
                    color: "hsl(var(--foreground))",
                    border: "1px solid hsl(var(--border))",
                  },
                }}
                richColors
                closeButton
              />
            </QueryProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
