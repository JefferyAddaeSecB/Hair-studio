"use client";

import { AdminNavbar } from "@/components/admin/navbar";
import { StatsCard } from "@/components/admin/stats-card";
import { DataTable, TableColumn } from "@/components/admin/data-table";
import { mockMessages, mockBookings, getRecentActivity } from "@/lib/admin/mock-data";
import { Mail, Calendar, TrendingUp, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { getSupabaseAdmin } from "@/lib/supabase";

// Helper function to format relative time
function timeAgo(date: string): string {
  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  const intervals: { [key: string]: number } = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60
  };

  for (const [key, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return `${interval} ${key}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export default function AdminDashboard() {
  const [messages, setMessages] = useState(mockMessages);
  const [bookings, setBookings] = useState(mockBookings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const supabase = getSupabaseAdmin();
      
      if (!supabase) {
        setIsLoading(false);
        return;
      }

      try {
        // Fetch contact messages
        const { data: messagesData, error: messagesError } = await supabase
          .from("contact_messages")
          .select("id, name, email, message, created_at")
          .order("created_at", { ascending: false });

        if (!messagesError && messagesData) {
          setMessages(messagesData as any);
        }

        // Fetch bookings
        const { data: bookingsData, error: bookingsError } = await supabase
          .from("bookings")
          .select("id, full_name, email, phone, service, preferred_date, notes, created_at")
          .order("created_at", { ascending: false });

        if (!bookingsError && bookingsData) {
          setBookings(bookingsData as any);
        }
      } catch (error) {
        console.error("Error fetching data from Supabase:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  const recentActivity = [...messages.map((msg: any) => ({
    ...msg,
    type: "message" as const
  })), ...bookings.map((booking: any) => ({
    ...booking,
    type: "booking" as const
  }))].sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  ).slice(0, 5);

  // Stats data
  const stats = [
    {
      title: "Total Messages",
      value: messages.length,
      icon: Mail,
      color: "bg-blue-500"
    },
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: Calendar,
      color: "bg-purple-500"
    },
    {
      title: "Today's Activity",
      value: recentActivity.filter(
        (item) =>
          new Date(item.created_at).toDateString() === new Date().toDateString()
      ).length,
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Pending",
      value: bookings.length,
      icon: MessageSquare,
      color: "bg-orange-500"
    }
  ];

  if (isLoading) {
    return (
      <>
        <AdminNavbar title="Dashboard" />
        <main className="flex-1 overflow-auto">
          <div className="ml-0 lg:ml-64 p-6 flex items-center justify-center h-96">
            <div className="text-center">
              <div className="inline-block animate-spin">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full" />
              </div>
              <p className="mt-4 text-gray-600">Loading dashboard...</p>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <AdminNavbar title="Dashboard" />

      <main className="flex-1 overflow-auto">
        <div className="ml-0 lg:ml-64 p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Recent Activity</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {recentActivity.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No recent activity
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {recentActivity.map((item: any) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      className="p-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-black">
                            {item.type === "message"
                              ? `Message from ${item.name}`
                              : `Booking from ${item.full_name}`}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.type === "message"
                              ? item.message
                              : `Service: ${item.service}`}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                          {timeAgo(item.created_at)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">Top Services</h3>
              <div className="space-y-3">
                {[
                  { service: "Hair Braiding & Cornrows", count: 8 },
                  { service: "Wig Installation & Styling", count: 6 },
                  { service: "Hair Cutting & Trimming", count: 4 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.service}</span>
                    <span className="text-sm font-semibold text-black">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Rate */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-700">Avg Response Time</p>
                  <p className="text-lg font-semibold text-black mt-1">
                    2-4 hours
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Customer Satisfaction</p>
                  <p className="text-lg font-semibold text-black mt-1">
                    4.8/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

  // Stats data
  const stats = [
    {
      title: "Total Messages",
      value: messages.length,
      icon: Mail,
      color: "bg-blue-500"
    },
    {
      title: "Total Bookings",
      value: bookings.length,
      icon: Calendar,
      color: "bg-purple-500"
    },
    {
      title: "Today's Activity",
      value: recentActivity.filter(
        (item) =>
          new Date(item.created_at).toDateString() === new Date().toDateString()
      ).length,
      icon: TrendingUp,
      color: "bg-green-500"
    },
    {
      title: "Pending",
      value: bookings.length,
      icon: MessageSquare,
      color: "bg-orange-500"
    }
  ];

  return (
    <>
      <AdminNavbar title="Dashboard" />

      <main className="flex-1 overflow-auto">
        <div className="ml-0 lg:ml-64 p-6 space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatsCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Recent Activity */}
          <div>
            <h2 className="text-xl font-bold text-black mb-4">Recent Activity</h2>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {recentActivity.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No recent activity
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {recentActivity.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      className="p-4 hover:bg-gray-50 transition"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-black">
                            {item.type === "message"
                              ? `Message from ${item.name}`
                              : `Booking from ${item.full_name}`}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {item.type === "message"
                              ? item.message
                              : `Service: ${item.service}`}
                          </p>
                        </div>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                          {timeAgo(item.created_at)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">Top Services</h3>
              <div className="space-y-3">
                {[
                  { service: "Hair Braiding & Cornrows", count: 8 },
                  { service: "Wig Installation & Styling", count: 6 },
                  { service: "Hair Cutting & Trimming", count: 4 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{item.service}</span>
                    <span className="text-sm font-semibold text-black">
                      {item.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Rate */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-black mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-700">Avg Response Time</p>
                  <p className="text-lg font-semibold text-black mt-1">
                    2-4 hours
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Customer Satisfaction</p>
                  <p className="text-lg font-semibold text-black mt-1">
                    4.8/5.0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
