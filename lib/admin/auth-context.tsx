"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AdminUser = {
  email: string;
  name: string;
};

type AuthContextType = {
  user: AdminUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (stored in localStorage)
    const storedUser = localStorage.getItem("adminUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Simple authentication - in production, call your backend API
    if (email === "abenahairstudio@gmail.com" && password === "Bella2012$.") {
      const adminUser: AdminUser = {
        email,
        name: "Abena Hair Studio"
      };
      setUser(adminUser);
      localStorage.setItem("adminUser", JSON.stringify(adminUser));
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("adminUser");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
