"use client";

import { useAuth } from "@/lib/admin/auth-context";
import { Bell, User } from "lucide-react";

interface NavbarProps {
  title: string;
}

export function AdminNavbar({ title }: NavbarProps) {
  const { user } = useAuth();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="ml-0 lg:ml-64 px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-black">{title}</h1>

        <div className="flex items-center gap-6">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell size={20} className="text-gray-600" />
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-black">{user?.name}</p>
              <p className="text-xs text-gray-600">{user?.email}</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-orange-400 rounded-full flex items-center justify-center">
              <User size={18} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
