"use client";

import { useState, useTransition } from "react";

type ContactFormState = {
  ok?: boolean;
  message?: string;
};

export function ContactForm() {
  const [state, setState] = useState<ContactFormState>({});
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = (await response.json()) as ContactFormState;
    setState(data);
  }

  return (
    <form
      action={(formData) => startTransition(() => handleSubmit(formData))}
      className="glass-card space-y-5 p-6 sm:p-8"
    >
      <label className="space-y-2 text-sm font-medium text-ink/80">
        Name
        <input
          name="name"
          placeholder="Your full name"
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
        Message
        <textarea
          name="message"
          rows={6}
          placeholder="Ask about appointments, bridal styling, or collaboration."
          className="w-full rounded-[1.5rem] border border-rosewood/10 bg-sand/70 px-4 py-3 outline-none transition focus:border-terracotta"
          required
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="inline-flex items-center justify-center rounded-full bg-rosewood px-6 py-4 text-sm font-semibold text-white transition hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>
        <p className={`text-sm ${state.ok ? "text-olive" : "text-terracotta"}`}>{state.message}</p>
      </div>
    </form>
  );
}
