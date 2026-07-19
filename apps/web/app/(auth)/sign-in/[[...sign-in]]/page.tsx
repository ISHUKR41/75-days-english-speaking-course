// ============================================================
// Sign In Page - Clerk-powered authentication
// Professional design with branding
// ============================================================

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    // Centered layout with gradient background
    <div className="min-h-screen flex items-center justify-center bg-background hero-gradient p-4">
      {/* Background grid dots */}
      <div className="absolute inset-0 grid-dots opacity-20" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        {/* Branding */}
        <div className="text-center space-y-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-glow-brand mx-auto">
            <span className="text-2xl">🎓</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back!</h1>
          <p className="text-muted-foreground text-sm">
            Continue your 75-day English journey
          </p>
        </div>

        {/* Clerk Sign In component */}
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          fallbackRedirectUrl="/dashboard"
          forceRedirectUrl="/dashboard"
        />
      </div>
    </div>
  );
}
