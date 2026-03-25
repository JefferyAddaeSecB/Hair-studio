import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const supabase = getSupabaseAdmin();

    if (!supabase) {
      return NextResponse.json(
        { message: "Database is not configured." },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("bookings").delete().eq("id", id);

    if (error) {
      return NextResponse.json(
        { message: "Failed to delete booking." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Unexpected server error while deleting booking." },
      { status: 500 }
    );
  }
}
