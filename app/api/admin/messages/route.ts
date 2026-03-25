import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ messages: [] });
    }

    const { data, error } = await supabase
      .from("contact_messages")
      .select("id, name, email, message, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { message: "Failed to load messages." },
        { status: 500 }
      );
    }

    return NextResponse.json({ messages: data ?? [] });
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error while loading messages." },
      { status: 500 }
    );
  }
}
