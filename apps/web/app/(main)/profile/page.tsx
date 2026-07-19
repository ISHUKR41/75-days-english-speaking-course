import { Metadata } from "next"; import { auth } from "@/lib/safe-auth"; import { redirect } from "next/navigation"; import { UserProfile } from "@clerk/nextjs";
export const metadata: Metadata = { title: "Profile" };
export default async function ProfilePage() { const { userId } = await auth(); if (!userId) redirect("/sign-in"); return <div className="max-w-2xl mx-auto"><h1 className="text-2xl font-bold mb-6">👤 Profile</h1><UserProfile path="/profile" routing="path" /></div>; }
