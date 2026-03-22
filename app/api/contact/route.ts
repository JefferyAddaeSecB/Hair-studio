import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { getSupabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = contactSchema.parse(body);
    const supabase = getSupabaseAdmin();

    if (supabase) {
      const { error } = await supabase.from("messages").insert({
        name: payload.name,
        email: payload.email,
        message: payload.message
      });

      if (error) {
        return NextResponse.json(
          { ok: false, message: "We could not save your message right now." },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: supabase
        ? "Message received. Our team will reply soon."
        : "Contact form is ready. Add Supabase keys to store messages."
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Please review your message and try again." },
      { status: 400 }
    );
  }
}
