// ============================================================
// Sign Up Page - Clerk-powered registration
// ============================================================

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background hero-gradient p-4">
      <div className="absolute inset-0 grid-dots opacity-20" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-glow-brand mx-auto">
            <span className="text-2xl">🎓</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">Start Your Journey</h1>
          <p className="text-muted-foreground text-sm">
            75 days to fluent English. Begin today — it&apos;s free!
          </p>
        </div>

        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          afterSignUpUrl="/dashboard"
        />
      </div>
    </div>
  );
}
