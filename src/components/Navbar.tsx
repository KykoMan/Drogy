"use client";
import Link from "next/link";
import { useState } from "react";
import navItems, { NavItem } from "@/utils/navbrar";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F58549]/80 to-[#E36414]/80 backdrop-blur border-b border-[#E36414]/20 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-white drop-shadow-md hover:scale-105 transition-all">
              Hlas proti drogám
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white hover:text-[#FFF3E0] hover:underline hover:scale-105 transition-all rounded-lg px-2 py-1"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 rounded-full hover:bg-[#E36414]/20 hover:scale-105 transition-all shadow-md"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        {open && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2 bg-white/10 rounded-lg p-4 shadow-lg">
              {navItems.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-white hover:bg-[#E36414]/20 hover:scale-105 transition-all"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}