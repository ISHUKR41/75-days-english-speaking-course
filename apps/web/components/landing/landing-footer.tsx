// Landing Footer
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function LandingFooter() {
  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-sm">75 Days Hard English</span>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 75 Days Hard English Course. Open Source.</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <Link href="/sign-in" className="hover:text-foreground transition-colors">Sign In</Link>
          <Link href="/sign-up" className="hover:text-foreground transition-colors">Get Started</Link>
        </div>
      </div>
    </footer>
  );
}
