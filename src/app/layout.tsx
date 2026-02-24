import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Build absolute site URL for canonical/OGP
const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_URL ||
  "localhost:3000";
const siteUrl = (
  deploymentUrl.startsWith("http") ? deploymentUrl : `https://${deploymentUrl}`
).replace(/\/+$/, "");
const logoUrl = new URL("/images/HlasProtiDrogam.png", siteUrl).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Hlas proti drogám",
  title: {
    default: "Hlas proti drogám",
    template: "%s | Hlas proti drogám",
  },
  description:
    "Hlas proti drogám – informace o drogách, prevence a zdroje pomoci proti užívání návykových látek.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hlas proti drogám",
    description:
      "Hlas proti drogám – informace o drogách, prevence a zdroje pomoci proti užívání návykových látek.",
    siteName: "Hlas proti drogám",
    images: [
      {
        url: "/images/HlasProtiDrogam.png",
        width: 1200,
        height: 630,
        alt: "Hlas proti drogám",
      },
    ],
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hlas proti drogám",
    description:
      "Hlas proti drogám – informace, prevence a zdroje pomoci proti užívání návykových látek.",
    images: ["/images/HlasProtiDrogam.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  keywords: ["drogy", "prevence", "informace", "pomoc", "návykové látky"],
  themeColor: "#F58549",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Hlas proti drogám",
      url: siteUrl,
      logo: logoUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Hlas proti drogám",
      url: siteUrl,
    },
  ];

  return (
    <html lang="cs">
      <head>
        <meta charSet="utf-8" />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
