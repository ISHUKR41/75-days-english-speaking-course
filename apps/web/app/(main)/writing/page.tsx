// ============================================================
// Writing Lab Page
// Full-featured English writing practice for all types:
// Email, Letter, Application, Paragraph, Story, Dialogue
// ============================================================

import { Metadata } from "next";
import { auth } from "@/lib/safe-auth";
import { redirect } from "next/navigation";
import { WritingLabClient } from "@/components/writing/writing-lab-client";

export const metadata: Metadata = {
  title: "Writing Lab — 75 Days Hard English",
  description:
    "Practice English writing with structured exercises: emails, letters, applications, paragraphs, stories, and dialogues.",
};

export default async function WritingPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return <WritingLabClient userId={userId} />;
}
