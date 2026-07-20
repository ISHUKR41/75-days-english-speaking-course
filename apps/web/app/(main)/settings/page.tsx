// ============================================================
// Settings Page
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import dynamic from "next/dynamic";

// SettingsClient depends entirely on localStorage (Zustand + next-themes),
// so SSR produces mismatching HTML. Load it client-side only.
const SettingsClient = dynamic(
  () => import("@/components/settings/settings-client").then((m) => ({ default: m.SettingsClient })),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Settings",
  description: "Customize your learning experience",
};

export default async function SettingsPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="py-2">
      <SettingsClient />
    </div>
  );
}
