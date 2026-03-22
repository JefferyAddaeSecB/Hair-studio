"use client";

import { useState, useTransition } from "react";
import { bookingOptions } from "@/lib/data";

type BookingFormState = {
  ok?: boolean;
  message?: string;
};

const initialState: BookingFormState = {};

export function BookingForm() {
  const [state, setState] = useState<BookingFormState>(initialState);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = (await response.json()) as BookingFormState;
    setState(data);
  }

  return (
    <form
      action={(formData) => startTransition(() => handleSubmit(formData))}
      className="glass-card space-y-6 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-ink/80">
          Full name
          <input
            name="fullName"
            placeholder="Ada Okafor"
            className="w-full rounded-2xl border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-ink/80">
          Email
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-ink/80">
          Phone
          <input
            name="phone"
            placeholder="+234 800 000 0000"
            className="w-full rounded-2xl border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-ink/80">
          Service
          <select
            name="service"
            className="w-full rounded-2xl border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {bookingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-ink/80">
        Preferred date
        <input
          type="date"
          name="date"
          className="w-full rounded-2xl border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
          required
        />
      </label>

      <label className="space-y-2 text-sm font-medium text-ink/80">
        Notes
        <textarea
          name="notes"
          rows={5}
          placeholder="Tell us about your hair goals, event date, or any special requests."
          className="w-full rounded-[1.5rem] border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-rosewood px-6 py-4 text-sm font-semibold text-white transition hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending request..." : "Submit booking"}
        </button>
        <p className={`text-sm ${state.ok ? "text-olive" : "text-terracotta"}`}>{state.message}</p>
      </div>
    </form>
  );
}
