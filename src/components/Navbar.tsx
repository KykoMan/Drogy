"use client";
import Link from "next/link";
import { useState } from "react";
import navItems from "@/utils/navbrar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-lg font-semibold">DROGY MIDEJ</Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-700 dark:text-gray-200 hover:underline"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-3">
              <Link href="/login" className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">Přihlásit</Link>
              <Link href="/signup" className="px-3 py-1 rounded-md bg-blue-600 text-white text-sm">Zaregistrovat</Link>
            </div>

            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.title}
                </Link>
              ))}

              <Link href="/login" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Přihlásit</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
