import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json({ bookings: [] });
    }

    const { data, error } = await supabase
      .from("bookings")
      .select("id, full_name, email, phone, service, preferred_date, notes, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json(
        { message: "Failed to load bookings." },
        { status: 500 }
      );
    }

    return NextResponse.json({ bookings: data ?? [] });
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error while loading bookings." },
      { status: 500 }
    );
  }
}
