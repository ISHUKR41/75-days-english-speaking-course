// ============================================================
// Day Vocabulary redirect — /day/[n]/vocabulary → /vocabulary?day=n
// ============================================================

import { redirect } from "next/navigation";

export default function DayVocabularyRedirect({
  params,
}: {
  params: { dayNumber: string };
}) {
  redirect(`/vocabulary?day=${params.dayNumber}`);
}
