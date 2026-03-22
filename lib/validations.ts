import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a phone number."),
  service: z.string().min(1, "Please select a service."),
  date: z.string().min(1, "Please choose a preferred date."),
  notes: z.string().max(500, "Notes must be 500 characters or fewer.").optional()
});

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please share a few more details.")
});

export type BookingPayload = z.infer<typeof bookingSchema>;
export type ContactPayload = z.infer<typeof contactSchema>;
