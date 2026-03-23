export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export type Booking = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  service: string;
  preferred_date: string;
  notes?: string;
  created_at: string;
};

export const mockMessages: ContactMessage[] = [
  {
    id: "1",
    name: "Ama Johnson",
    email: "ama@example.com",
    message: "Hi, I would like to book an appointment for braiding next week.",
    created_at: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "2",
    name: "Kofi Mensah",
    email: "kofi@example.com",
    message: "Can you do wedding styling? I have an event in 2 weeks.",
    created_at: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "3",
    name: "Akosua Brown",
    email: "akosua@example.com",
    message: "Love your work! Want to collaborate.",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "4",
    name: "Yaw Owusu",
    email: "yaw@example.com",
    message: "What are your prices for wig installation?",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export const mockBookings: Booking[] = [
  {
    id: "b1",
    full_name: "Ama Johnson",
    email: "ama@example.com",
    phone: "0244567890",
    service: "Hair Braiding & Cornrows",
    preferred_date: "2026-03-30",
    notes: "Neat cornrows, tight finish",
    created_at: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "b2",
    full_name: "Nana Asante",
    email: "nana@example.com",
    phone: "0245678901",
    service: "Wig Installation & Styling",
    preferred_date: "2026-04-05",
    notes: "Long straight wig, shoulder length",
    created_at: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString()
  },
  {
    id: "b3",
    full_name: "Abena Mensah",
    email: "abena@example.com",
    phone: "0246789012",
    service: "Hair Cutting & Trimming",
    preferred_date: "2026-03-28",
    notes: "Trim and shape, side part",
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
  }
];

export function getRecentActivity() {
  const allActivity = [
    ...mockMessages.map((msg) => ({
      ...msg,
      type: "message" as const
    })),
    ...mockBookings.map((booking) => ({
      ...booking,
      type: "booking" as const
    }))
  ];

  return allActivity.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}
