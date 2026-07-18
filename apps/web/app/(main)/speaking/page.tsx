// ============================================================
// Speaking Page - Speaking Lab for pronunciation practice
// ============================================================

import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SpeakingLab } from "@/components/speech/speaking-lab";

export const metadata: Metadata = {
  title: "Speaking Lab",
  description: "Practice your English speaking and pronunciation",
};

export default async function SpeakingPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="py-2">
      <SpeakingLab userId={userId} />
    </div>
  );
}
