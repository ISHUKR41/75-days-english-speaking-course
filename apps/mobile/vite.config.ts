// ============================================================
// Vite Configuration — Mobile App (75 Days Hard English)
// Proxies /api/* to the web app so mobile and web share the
// same backend without CORS issues in the Replit environment.
// ============================================================

import { defineConfig } from "vite"; // Core Vite configuration helper
import react from "@vitejs/plugin-react"; // React JSX transform plugin
import path from "path"; // Node path utilities

export default defineConfig({
  // ── Plugins ────────────────────────────────────────────────
  plugins: [react()],

  // ── Path aliases ───────────────────────────────────────────
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use @/ for src imports
    },
  },

  // ── Dev server ─────────────────────────────────────────────
  server: {
    port: 5001, // Mobile app runs on port 5001
    host: true, // Bind to all interfaces (required for Replit)
    allowedHosts: "all", // Allow all hosts (Replit proxy)

    // ── API Proxy — forwards /api/* to the web app on port 5000 ──
    // This means the mobile app can call /api/mobile/data, /api/user,
    // /api/vocabulary, etc. and they will reach the Next.js web app.
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Web app Next.js server
        changeOrigin: true, // Rewrite the Origin header
        secure: false, // Don't verify SSL in dev
        rewrite: (p) => p, // Keep path as-is
      },
    },
  },
});
