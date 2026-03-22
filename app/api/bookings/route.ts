import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = bookingSchema.parse(body);
    const supabase = getSupabaseAdmin();

    if (supabase) {
      const { error } = await supabase.from("bookings").insert({
        full_name: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        service: payload.service,
        preferred_date: payload.date,
        notes: payload.notes ?? null
      });

      if (error) {
        return NextResponse.json(
          { ok: false, message: "We could not save your booking right now." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: supabase
        ? "Booking request received. We’ll confirm your appointment shortly."
        : "Booking form is working. Add Supabase keys to store submissions."
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please check your booking details and try again." },
      { status: 400 }
    );
  }
}
