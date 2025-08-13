"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavigationProps {
  userRole: "admin" | "user";
  userName: string;
}

export default function Navigation({ userRole, userName }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const handleLogout = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      router.push("/auth/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const isActive = (path: string) => {
    return pathname.startsWith(path) ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  const dashboardPath = userRole === "admin" ? "/admin/dashboard" : "/user/dashboard";
  
  const navigationItems = userRole === "admin" 
    ? [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Benutzer", href: "/admin/users" },
        { name: "Einstellungen", href: "/admin/settings" },
      ]
    : [
        { name: "Dashboard", href: "/user/dashboard" },
        { name: "Profil", href: "/user/profile" },
      ];

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={dashboardPath} className="text-white font-bold text-xl">
                Tradebot
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${isActive(item.href)} rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white">
                      {userName.charAt(0).toUpperCase()}
                    </div>
                  </button>
                </div>
                {isMenuOpen && (
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href={userRole === "admin" ? "/admin/profile" : "/user/profile"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Profil
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Abmelden
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive(item.href)} block rounded-md px-3 py-2 text-base font-medium`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-white">
                  {userName.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">{userName}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Link
                href={userRole === "admin" ? "/admin/profile" : "/user/profile"}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Profil
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                Abmelden
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
