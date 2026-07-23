/** @type {import('next').NextConfig} */

// Next.js configuration for 75 Days Hard English Course
// Updated for Replit deployment (port 5000, all hosts allowed)
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Allow all dev origins — required for Replit iframe preview
  // Replit uses *.replit.dev and *.pike.replit.dev for proxied previews
  allowedDevOrigins: [
    "*.replit.dev",
    "*.pike.replit.dev",
    "*.sisko.replit.dev",
    "*.janeway.replit.dev",
    "*.repl.co",
    "localhost",
    "127.0.0.1",
  ],

  // Enable experimental features for best performance
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "recharts",
    ],
  },

  // Image optimization configuration
  images: {
    // Allow images from these external domains
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "img.clerk.com" },
      { protocol: "https", hostname: "images.clerk.dev" },
      { protocol: "https", hostname: "cdn.storyset.com" },
      { protocol: "https", hostname: "storyset.com" },
      { protocol: "https", hostname: "illustrations.popsy.co" },
    ],
    // Enable SVG support
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // XSS protection
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy - allow microphone for speaking lab
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(self), geolocation=()",
          },
        ],
      },
    ];
  },

  // Webpack configuration — disable filesystem cache in dev to prevent
  // vendor-chunk corruption when packages are installed mid-session
  webpack: (config, { dev }) => {
    // Handle audio files so Howler/Web Audio mp3s can be imported
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac|aac)$/,
      type: "asset/resource",
    });

    // Disable the persistent filesystem cache in development.
    // This prevents the recurring "Cannot find module ./vendor-chunks/@tanstack.js"
    // error that appears after npm install while the dev server is running.
    if (dev) {
      config.cache = false; // no disk cache — recompile fresh every restart
    }

    return config;
  },

  // Transpile packages from monorepo
  transpilePackages: ["@75days/ui", "@75days/database", "@75days/content"],
};

module.exports = nextConfig;
