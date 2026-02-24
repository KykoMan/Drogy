import type { Metadata } from "next";
import Layout from "../../components/Layout";

export const metadata: Metadata = {
  title: "Kontakt – Hlas proti drogám",
  description:
    "Kontaktujte nás ohledně drog, drogové prevence a poradenství – rychlá pomoc, konzultace a informace 24/7. Kontakt přes formulář, e‑mail nebo telefon.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontakt – Hlas proti drogám",
    description:
      "Kontaktujte nás ohledně drog, drogové prevence a poradenství – rychlá pomoc, konzultace a informace 24/7. Kontakt přes formulář, e‑mail nebo telefon.",
    url: "/contact",
    type: "website",
    siteName: "Hlas proti drogám",
    locale: "cs_CZ",
    images: [
      {
        url: "/images/HlasProtiDrogam.png",
        alt: "Hlas proti drogám",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontakt – Hlas proti drogám",
    description:
      "Kontaktujte nás ohledně drog, drogové prevence a poradenství – rychlá pomoc, konzultace a informace 24/7. Kontakt přes formulář, e‑mail nebo telefon.",
    images: ["/images/HlasProtiDrogam.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
