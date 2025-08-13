"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeSwitch } from "../../components/theme-switch";
import "../globals.css"

interface AdminLayoutProps {
  children: React.ReactNode;
}

interface User {
  name: string;
  email: string;
  role: string;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Token aus localStorage holen
        const token = localStorage.getItem('auth_token');
        
        if (!token) {
          throw new Error("Kein Authentifizierungstoken gefunden");
        }
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user`, {
          credentials: "include",
          headers: {
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Authorization": `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const userData = await response.json();
        
        if (userData.role !== "admin") {
          throw new Error("Not authorized");
        }
        
        setUser(userData);
      } catch (error) {
        router.push("/auth/login");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Trading Signal Management System</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Angemeldet als <span className="font-medium">{user.name}</span>
              </div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  );
}
