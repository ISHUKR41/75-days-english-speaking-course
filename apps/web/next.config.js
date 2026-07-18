/** @type {import('next').NextConfig} */

// Next.js configuration for 75 Days Hard English Course
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

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
    // Enable typed routes for better TypeScript support
    typedRoutes: false,
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
          { key: "X-Frame-Options", value: "DENY" },
          // XSS protection
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer policy
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(self), geolocation=()",
          },
        ],
      },
    ];
  },

  // Webpack configuration for audio files and other assets
  webpack: (config) => {
    // Handle audio files
    config.module.rules.push({
      test: /\.(mp3|wav|ogg|flac|aac)$/,
      type: "asset/resource",
    });

    return config;
  },

  // Transpile packages from monorepo
  transpilePackages: ["@75days/ui", "@75days/database", "@75days/content"],
};

module.exports = nextConfig;
