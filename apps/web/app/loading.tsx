// ============================================================
// Global Loading Page - 75 Days Hard English Course
// Shown during Next.js route transitions and suspense
// Minimal, fast, matches design system
// ============================================================

// This is a server component that renders during page loading
export default function LoadingPage() {
  return (
    // Full-screen loading overlay
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-background"
      role="status"
      aria-label="Loading..."
    >
      {/* Spinner with brand gradient */}
      <div className="relative h-16 w-16 mb-6">
        {/* Outer spinning ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #6272f1, #8b5cf6, #ec4899, transparent)",
            animation: "spin 1s linear infinite",
          }}
        />
        {/* Inner white circle to create ring effect */}
        <div className="absolute inset-1 rounded-full bg-background" />
        {/* Book emoji centered */}
        <div className="absolute inset-0 flex items-center justify-center text-xl">
          📚
        </div>
      </div>

      {/* Loading text */}
      <p className="text-sm text-muted-foreground animate-pulse">
        Loading your lesson...
      </p>

      {/* Inline spin animation style */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );
}
