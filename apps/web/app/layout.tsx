// ============================================================
// Root Layout - 75 Days Hard English Course
// Sets up fonts, themes, authentication, and global providers
// Full SEO optimization for Google ranking on English course keywords
// ============================================================

// Next.js metadata and viewport types for TypeScript
import type { Metadata, Viewport } from "next";
// Google Fonts import — Inter for clean professional look
import { Inter, Outfit } from "next/font/google";
// Clerk provider for authentication wrapping
import { ClerkProvider } from "@clerk/nextjs";
// Dark/Light theme provider
import { ThemeProvider } from "@/components/layout/theme-provider";
// Toast notifications
import { Toaster } from "sonner";
// React Query provider for data fetching
import { QueryProvider } from "@/components/layout/query-provider";
// Global CSS styles
import "@/styles/globals.css";

// ─── Font Configuration ──────────────────────────────────────
// Inter: Clean sans-serif for body text (used by Linear, Vercel)
const inter = Inter({
  // Load only the subsets we need
  subsets: ["latin"],
  // Load weights from light to extra-bold
  weight: ["300", "400", "500", "600", "700", "800"],
  // CSS variable for use in Tailwind
  variable: "--font-inter",
  // Swap prevents FOUT (Flash of Unstyled Text)
  display: "swap",
});

// Outfit: Modern rounded font for headings
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

// ─── Viewport Configuration ───────────────────────────────────
export const viewport: Viewport = {
  // Responsive viewport for all devices
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  // PWA theme colors
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1117" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

// ─── SEO Metadata ─────────────────────────────────────────────
// Comprehensive SEO for first Google ranking on English course queries
export const metadata: Metadata = {
  // Use the configured public origin so OG and Twitter image URLs resolve correctly.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com",
  ),
  // Title template — used across all pages
  title: {
    default: "75 Days Hard English Course | Speak English Fluently",
    // %s is replaced by page-specific titles
    template: "%s | 75 Days Hard English",
  },
  // Primary description — shown in Google search results
  description:
    "The World's Most Advanced English Learning Platform. Master fluent English in 75 structured days with 200+ daily vocabulary, AI grammar practice, voice speaking exercises, gamified XP system, and personalized progress tracking. From absolute beginner to confident English speaker.",
  // Comprehensive keyword list for SEO ranking
  keywords: [
    // Primary target keywords
    "75 days hard English course",
    "English speaking course online",
    "learn English in 75 days",
    "English fluency program",
    "speak English fluently",
    // Secondary keywords
    "English for beginners",
    "English grammar course",
    "English vocabulary builder",
    "English speaking practice",
    "daily English lessons",
    // Long-tail keywords
    "how to speak English fluently in 75 days",
    "best English learning app India",
    "English course for Hindi speakers",
    "business English online",
    "English for job interviews",
    "professional English course",
    "English grammar for beginners",
    "gamified English learning",
    "English with XP points",
    "English course with certificates",
    // Location-based keywords
    "English course India",
    "English learning Hindi medium",
    "English bolna kaise sikhe",
  ],
  // Author information
  authors: [{ name: "75 Days Hard English Team" }],
  // Site creator
  creator: "75 Days Hard English",
  // Publisher
  publisher: "75 Days Hard English",
  // Robots directives for Google
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
  // Open Graph metadata for social sharing (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_IN",
    // App URL — update with production domain
    url: process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com",
    title: "75 Days Hard English Course | Speak English Fluently",
    description:
      "Master fluent English in 75 days with AI-powered personalized learning, 200+ daily vocabulary, voice practice, and gamified XP rewards.",
    siteName: "75 Days Hard English",
    // OG image for rich social previews
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "75 Days Hard English Course — Speak English Fluently",
      },
    ],
  },
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "75 Days Hard English Course",
    description: "Master fluent English in 75 days with gamified learning, 200+ vocabulary per day, and voice practice.",
    images: ["/og-image.png"],
    creator: "@75DaysEnglish",
    site: "@75DaysEnglish",
  },
  // Favicon and PWA icons
  icons: {
    icon: [
      { url: "/icons/icon-96x96.svg", sizes: "96x96", type: "image/svg+xml" },
      { url: "/icons/icon-192x192.svg", sizes: "192x192", type: "image/svg+xml" },
      { url: "/icons/icon-512x512.svg", sizes: "512x512", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  // PWA manifest link
  manifest: "/manifest.json",
  // Canonical URL
  alternates: {
    canonical: process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com",
    // Language alternates for multilingual SEO
    languages: {
      "en-IN": `${process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com"}/en-IN`,
      "en-US": `${process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com"}/en-US`,
    },
  },
  // Verification tags for Google Search Console
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  // Category for app stores
  category: "education",
};

// ─── Structured Data for Rich Results ─────────────────────────
// JSON-LD schema for Google rich results (Course schema)
const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "75 Days Hard English Course",
  "description": "Master fluent English in 75 structured days with AI-powered lessons, 200+ daily vocabulary, voice practice, and gamified learning.",
  "provider": {
    "@type": "Organization",
    "name": "75 Days Hard English",
    "sameAs": process.env.NEXT_PUBLIC_APP_URL || "https://75daysenglish.com",
  },
  "educationalLevel": "Beginner to Advanced",
  "teaches": [
    "English Speaking",
    "English Grammar",
    "English Vocabulary",
    "Business English",
    "Professional Communication",
  ],
  "timeRequired": "PT75D",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": "online",
    "courseWorkload": "PT1H",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250",
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
  },
};

// ─── Root Layout Component ────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Set HTML language attribute for accessibility and SEO
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Structured Data / JSON-LD ─────────────────── */}
        {/* Helps Google understand this is an English course */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        {/* Preconnect to external font servers for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://clerk.com" />
      </head>
      {/* Apply font CSS variables to body */}
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {/* ── Clerk Authentication Provider ─────────────── */}
        {/* Wraps entire app to provide auth context */}
        {/* ClerkProvider with new non-deprecated redirect props */}
        <ClerkProvider
          signInFallbackRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/dashboard"
          signInForceRedirectUrl="/dashboard"
        >
          {/* ── Theme Provider ─────────────────────────── */}
          {/* Handles dark/light/system theme switching */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            {/* ── React Query Provider ──────────────────── */}
            {/* Provides data fetching, caching, and sync */}
            <QueryProvider>
              {/* Main page content */}
              {children}
              {/* ── Global Toast Notifications ─────────── */}
              {/* Shows success/error/info messages app-wide */}
              <Toaster
                position="bottom-right"
                toastOptions={{
                  // Custom styles for toast notifications
                  style: {
                    background: "hsl(var(--card))",
                    color: "hsl(var(--card-foreground))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                  },
                }}
              />
            </QueryProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
