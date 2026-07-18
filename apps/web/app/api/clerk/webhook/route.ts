// ============================================================
// POST /api/clerk/webhook - Clerk webhook to sync user to DB
// Register this URL in Clerk Dashboard → Webhooks
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { db } from "@/lib/db";

// Webhook event types from Clerk
interface ClerkWebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses?: Array<{ email_address: string; id: string }>;
    primary_email_address_id?: string;
    first_name?: string | null;
    last_name?: string | null;
    image_url?: string;
    username?: string | null;
  };
}

export async function POST(req: NextRequest) {
  try {
    // Verify webhook (basic security check)
    const headersList = headers();
    const svix_id = headersList.get("svix-id");
    const svix_timestamp = headersList.get("svix-timestamp");
    const svix_signature = headersList.get("svix-signature");

    // If no svix headers, not a valid Clerk webhook
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return NextResponse.json(
        { error: "Missing webhook headers" },
        { status: 400 }
      );
    }

    const payload = (await req.json()) as ClerkWebhookEvent;
    const { type, data } = payload;

    // Get primary email
    const primaryEmail = data.email_addresses?.find(
      (e) => e.id === data.primary_email_address_id
    )?.email_address;

    const email = primaryEmail || `clerk_${data.id}@placeholder.com`;
    const username =
      data.username ||
      `user_${data.id.slice(-8)}`;

    switch (type) {
      case "user.created": {
        await db.user.upsert({
          where: { clerkId: data.id },
          create: {
            clerkId: data.id,
            email,
            username,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            imageUrl: data.image_url || "",
          },
          update: {
            email,
            username,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            imageUrl: data.image_url || "",
          },
        });
        break;
      }

      case "user.updated": {
        await db.user.upsert({
          where: { clerkId: data.id },
          update: {
            email,
            username,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            imageUrl: data.image_url || "",
          },
          create: {
            clerkId: data.id,
            email,
            username,
            firstName: data.first_name || "",
            lastName: data.last_name || "",
            imageUrl: data.image_url || "",
          },
        });
        break;
      }

      case "user.deleted": {
        // Soft delete or hard delete based on your policy
        await db.user
          .delete({ where: { clerkId: data.id } })
          .catch(() => {
            // User may not exist in our DB, that's okay
          });
        break;
      }

      default:
        // Unhandled event type — just acknowledge
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Clerk Webhook] Error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
