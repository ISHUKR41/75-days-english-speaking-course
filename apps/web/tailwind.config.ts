import type { Config } from "tailwindcss";

// ============================================================
// Tailwind CSS Configuration for 75 Days Hard English Course
// Professional design system inspired by Stripe, Vercel, Linear
// ============================================================

const config: Config = {
  // Enable dark mode via class strategy
  darkMode: ["class"],

  // Scan all relevant files for class names
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/**/*.{ts,tsx}",
  ],

  theme: {
    // Container configuration
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      // ─── Brand Color Palette ─────────────────────────────────
      colors: {
        // Primary brand colors (inspired by Linear/Vercel)
        brand: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5bbfc",
          400: "#8196f8",
          500: "#6272f1",
          600: "#4f52e4",
          700: "#4141c8",
          800: "#3736a0",
          900: "#32337f",
          950: "#1e1d4a",
        },

        // Accent colors (golden/amber for gamification)
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },

        // Success green
        emerald: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },

        // Error/danger red
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },

        // Neutral slate (background, text, borders)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },

      // ─── Typography ────────────────────────────────────────
      fontFamily: {
        // Primary sans-serif (similar to Inter/Geist)
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        // Monospace for code examples
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Consolas",
          "monospace",
        ],
        // Display font for headings
        display: ["var(--font-cal)", "var(--font-inter)", "sans-serif"],
      },

      // ─── Font Sizes ────────────────────────────────────────
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs: ["0.75rem", { lineHeight: "1.125rem" }],
        sm: ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem", { lineHeight: "1.625rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.875rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.375rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "3.75rem" }],
        "6xl": ["3.75rem", { lineHeight: "4.5rem" }],
        "7xl": ["4.5rem", { lineHeight: "5.25rem" }],
        "8xl": ["6rem", { lineHeight: "7.5rem" }],
        "9xl": ["8rem", { lineHeight: "10rem" }],
      },

      // ─── Spacing ──────────────────────────────────────────
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "13": "3.25rem",
        "15": "3.75rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
        "42": "10.5rem",
        "46": "11.5rem",
        "50": "12.5rem",
        "54": "13.5rem",
        "58": "14.5rem",
        "62": "15.5rem",
        "66": "16.5rem",
        "70": "17.5rem",
        "74": "18.5rem",
        "78": "19.5rem",
        "82": "20.5rem",
        "86": "21.5rem",
        "90": "22.5rem",
        "94": "23.5rem",
        "98": "24.5rem",
        "100": "25rem",
        "104": "26rem",
        "108": "27rem",
        "112": "28rem",
        "116": "29rem",
        "120": "30rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
        "224": "56rem",
        "256": "64rem",
      },

      // ─── Border Radius ────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
        "7xl": "4rem",
      },

      // ─── Box Shadow ───────────────────────────────────────
      boxShadow: {
        // Subtle shadows for cards (Stripe-style)
        "card-sm": "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)",
        card: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
        "card-lg":
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
        "card-xl":
          "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
        // Glow effects for interactive elements
        "glow-brand": "0 0 20px rgba(98, 114, 241, 0.4)",
        "glow-brand-lg": "0 0 40px rgba(98, 114, 241, 0.5), 0 0 80px rgba(98, 114, 241, 0.2)",
        "glow-gold": "0 0 20px rgba(245, 158, 11, 0.4)",
        "glow-gold-lg": "0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(245, 158, 11, 0.2)",
        "glow-emerald": "0 0 20px rgba(16, 185, 129, 0.4)",
        "glow-emerald-lg": "0 0 40px rgba(16, 185, 129, 0.5), 0 0 80px rgba(16, 185, 129, 0.2)",
        "glow-rose": "0 0 20px rgba(244, 63, 94, 0.4)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.4)",
        "glow-purple-lg": "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.2)",
        // Colored card shadows
        "card-brand": "0 4px 24px rgba(98, 114, 241, 0.15), 0 1px 4px rgba(98, 114, 241, 0.1)",
        "card-gold": "0 4px 24px rgba(245, 158, 11, 0.15), 0 1px 4px rgba(245, 158, 11, 0.1)",
        "card-emerald": "0 4px 24px rgba(16, 185, 129, 0.15), 0 1px 4px rgba(16, 185, 129, 0.1)",
        // Inner shadows
        "inner-sm": "inset 0 1px 2px rgba(0,0,0,0.1)",
        inner: "inset 0 2px 4px rgba(0,0,0,0.1)",
        // None
        none: "none",
      },

      // ─── Animations ───────────────────────────────────────
      keyframes: {
        // Fade in from below (used for page transitions)
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Fade in from above
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Fade in from left
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Fade in from right
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        // Scale in animation
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Shimmer loading effect
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        // Pulse glow for active elements
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(98, 114, 241, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(98, 114, 241, 0.6)" },
        },
        // Bounce in for notifications
        "bounce-in": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "60%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)" },
        },
        // Spin for loading
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Float for hero elements
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // Typing cursor blink
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        // Accordion content animation
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Score counter animation
        "count-up": {
          "0%": { opacity: "0", transform: "scale(1.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        // Confetti fall
        "confetti-fall": {
          "0%": { transform: "translateY(-10px) rotateZ(0deg)", opacity: "1" },
          "100%": {
            transform: "translateY(100vh) rotateZ(720deg)",
            opacity: "0",
          },
        },
        // Streak flame flicker
        flicker: {
          "0%, 100%": { transform: "scaleY(1) scaleX(1)" },
          "25%": { transform: "scaleY(1.05) scaleX(0.98)" },
          "50%": { transform: "scaleY(0.95) scaleX(1.02)" },
          "75%": { transform: "scaleY(1.02) scaleX(0.99)" },
        },
        // XP bar fill
        "fill-bar": {
          "0%": { width: "0%" },
          "100%": { width: "var(--fill-width)" },
        },
        // Wiggle for wrong answers
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "25%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
        // Pulse glow (gold) for XP / achievements
        "pulse-glow-gold": {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(245, 158, 11, 0.3), 0 0 10px rgba(245, 158, 11, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(245, 158, 11, 0.6), 0 0 40px rgba(245, 158, 11, 0.3)",
          },
        },
        // Tilt - subtle 3D tilt keyframe
        "tilt-in": {
          "0%": { transform: "perspective(800px) rotateX(6deg) rotateY(-6deg) scale(0.96)", opacity: "0" },
          "100%": { transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)", opacity: "1" },
        },
        // Shimmer slide for button hover
        "shimmer-slide": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        // Float slow for background decorations
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(-1deg)" },
          "66%": { transform: "translateY(-6px) rotate(1deg)" },
        },
        // Level up celebration
        "level-up": {
          "0%": { transform: "scale(1)", filter: "brightness(1)" },
          "25%": { transform: "scale(1.15) rotate(-2deg)", filter: "brightness(1.4)" },
          "50%": { transform: "scale(1.1) rotate(2deg)", filter: "brightness(1.2)" },
          "75%": { transform: "scale(1.12) rotate(-1deg)", filter: "brightness(1.3)" },
          "100%": { transform: "scale(1)", filter: "brightness(1)" },
        },
        // Gradient rotate for animated borders
        "gradient-rotate": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },

      // Animation utility classes
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-in-left": "fade-in-left 0.5s ease-out",
        "fade-in-right": "fade-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        shimmer: "shimmer 2s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "pulse-glow-gold": "pulse-glow-gold 2.5s ease-in-out infinite",
        "bounce-in": "bounce-in 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97)",
        float: "float 3s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        blink: "blink 1s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "count-up": "count-up 0.5s ease-out",
        "confetti-fall": "confetti-fall 3s ease-in forwards",
        flicker: "flicker 0.5s ease-in-out infinite alternate",
        wiggle: "wiggle 0.3s ease-in-out",
        "tilt-in": "tilt-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer-slide": "shimmer-slide 1.5s ease-in-out infinite",
        "level-up": "level-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "gradient-rotate": "gradient-rotate 4s ease infinite",
      },

      // ─── Background Images ────────────────────────────────
      backgroundImage: {
        // Gradient backgrounds
        "gradient-brand":
          "linear-gradient(135deg, #6272f1 0%, #8b5cf6 50%, #ec4899 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #ef4444 100%)",
        "gradient-emerald":
          "linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)",
        "gradient-purple":
          "linear-gradient(135deg, #7c3aed 0%, #6272f1 50%, #4f46e5 100%)",
        "gradient-rose":
          "linear-gradient(135deg, #f43f5e 0%, #ec4899 50%, #db2777 100%)",
        "gradient-cyan":
          "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6272f1 100%)",
        // Mesh gradients (modern design)
        "mesh-brand":
          "radial-gradient(at 40% 20%, rgba(98, 114, 241, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.2) 0px, transparent 50%)",
        "mesh-dark":
          "radial-gradient(at 20% 30%, rgba(98, 114, 241, 0.15) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(139, 92, 246, 0.12) 0px, transparent 50%)",
        // Grid pattern for cards
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        // Shimmer gradient
        "shimmer-gradient":
          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
        // Hero gradient preset
        "hero-brand":
          "radial-gradient(ellipse at 20% 50%, rgba(98, 114, 241, 0.2) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 55%)",
      },

      // ─── Backdrop Blur ────────────────────────────────────
      backdropBlur: {
        xs: "2px",
        "3xl": "64px",
        "4xl": "80px",
      },

      // ─── Screen Sizes ─────────────────────────────────────
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1920px",
      },

      // ─── Z-Index ──────────────────────────────────────────
      zIndex: {
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
      },

      // ─── Transition Duration ──────────────────────────────
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "900": "900ms",
        "1200": "1200ms",
        "1500": "1500ms",
        "2000": "2000ms",
      },
    },
  },

  // Tailwind CSS plugins
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for glassmorphism utilities
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        // Glass morphism effect (Stripe/Linear style)
        ".glass": {
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
        },
        // Text gradient utility
        ".text-gradient-brand": {
          background: "linear-gradient(135deg, #6272f1 0%, #a78bfa 50%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".text-gradient-gold": {
          background: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".text-gradient-emerald": {
          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        // Scrollbar utilities
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "4px",
          },
        },
        // Premium glow variants
        ".glow-brand-hover:hover": {
          boxShadow: "0 0 30px rgba(98, 114, 241, 0.45), 0 0 60px rgba(98, 114, 241, 0.2)",
        },
        ".glow-gold-hover:hover": {
          boxShadow: "0 0 30px rgba(245, 158, 11, 0.45), 0 0 60px rgba(245, 158, 11, 0.2)",
        },
        // Gradient text utilities (JS plugin for more complex classes)
        ".text-gradient-purple": {
          background: "linear-gradient(135deg, #7c3aed 0%, #6272f1 50%, #a78bfa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".text-gradient-success": {
          background: "linear-gradient(135deg, #10b981 0%, #06b6d4 60%, #3b82f6 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        // 3D card effect
        ".card-3d-hover:hover": {
          transform: "perspective(800px) rotateX(-2deg) rotateY(3deg) translateZ(10px)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(98,114,241,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        },
      };
      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
