import type { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů – Hlas proti drogám",
  description:
    "Zásady zpracování osobních údajů a ochrany soukromí. Jaké informace sbíráme a jak s nimi zacházíme.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Ochrana osobních údajů – Hlas proti drogám",
    description:
      "Zásady zpracování osobních údajů a ochrany soukromí. Jaké informace sbíráme a jak s nimi zacházíme.",
    url: "/privacy",
    type: "website",
    images: [
      {
        url: "/images/HlasProtiDrogam.png",
        alt: "Hlas proti drogám",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ochrana osobních údajů – Hlas proti drogám",
    description:
      "Zásady zpracování osobních údajů a ochrany soukromí. Jaké informace sbíráme a jak s nimi zacházíme.",
    images: ["/images/HlasProtiDrogam.png"],
  },
};

export default function PrivacyPage() {
  return (
    <Layout>
      <header className="bg-linear-to-r from-orange-300/40 to-orange-100/60 border-b border-orange-300/60">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Ochrana osobních údajů
          </h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            Vaše soukromí bereme vážně. Níže najdete podrobnosti o tom, jak
            zacházíme s osobními informacemi, které nám svěřujete.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
        <section>
          <h2>Shromažďované údaje</h2>
          <p>
            Při kontaktování přes formulář nebo email sbíráme pouze ty údaje,
            které jsou nezbytné pro odpověď: jméno, email, případně telefon a
            text zprávy. Neposkytujeme třetím stranám žádné informace.
          </p>
        </section>

        <section>
          <h2>Jak údaje používáme</h2>
          <p>
            Kontaktní údaje slouží pouze k odpovědi na váš dotaz či žádost o
            pomoc. Nezasíláme marketingové zprávy ani nesdílíme data s partnery.
          </p>
        </section>

        <section>
          <h2>Práva subjektu údajů</h2>
          <p>
            Máte právo požádat o přístup, opravu nebo výmaz svých údajů.
            Kontaktujte nás prostřednictvím stránky Kontakt a označte zprávu
            jako „žádost o ochranu osobních údajů“.
          </p>
        </section>

        <section>
          <h2>Cookies a technologie</h2>
          <p>
            Stránka používá minimální technické cookies nezbytné pro provoz
            webu. Nenahráváme žádné sledovací nebo reklamní cookies.
          </p>
        </section>
      </main>
    </Layout>
  );
}
