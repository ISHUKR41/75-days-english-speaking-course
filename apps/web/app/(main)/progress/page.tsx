// ============================================================
// Progress Page - Detailed progress tracking with charts
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { ProgressPageClient } from "@/components/progress/progress-page-client";

export const metadata: Metadata = {
  title: "My Progress",
  description: "Track your 75-day English learning journey",
};

export default async function ProgressPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  return <ProgressPageClient userId={userId} />;
}
