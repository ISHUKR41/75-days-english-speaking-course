// ============================================================
// Settings Page
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { SettingsClient } from "@/components/settings/settings-client";

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
