"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user`, {
          credentials: "include",
        });

        if (!response.ok) {
          // Not authenticated, redirect to login
          router.push("/auth/login");
          return;
        }

        const userData = await response.json();
        
        // Redirect based on user role
        if (userData.role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/user/dashboard");
        }
      } catch (error) {
        // Error occurred, redirect to login
        router.push("/auth/login");
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md text-center">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Tradebot
        </h2>
        <div className="mt-4">
          <div className="h-12 w-12 mx-auto animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-sm text-gray-500">Überprüfe Authentifizierung...</p>
        </div>
        <div className="mt-6">
          <Link 
            href="/auth/login"
            className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Zum Login
          </Link>
        </div>
      </div>
    </div>
  );
}
