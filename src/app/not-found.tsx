import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 – Stránka nenalezena",
  description: "Omlouváme se, hledaná stránka neexistuje nebo byla přesunuta.",
  alternates: { canonical: "/404" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-extrabold text-gray-900">404</h1>
      <p className="mt-3 text-gray-700">Stránka nebyla nalezena.</p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Link href="/" className="px-5 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700">Domů</Link>
        <Link href="/drugs" className="px-5 py-2 rounded-md border border-orange-300 text-orange-700 hover:bg-orange-50">Přehled drog</Link>
      </div>
    </main>
  );
}
