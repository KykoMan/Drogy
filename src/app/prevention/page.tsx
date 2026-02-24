import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Prevence",
  description: "Praktické tipy, jak předcházet závislostem: komunikace, odolnost, poznání rizik a kdy vyhledat pomoc.",
  alternates: { canonical: "/prevention" },
};

export default function PreventionPage() {
  return (
    <Layout title="Prevence - Hlas proti drogám">
      <header className="bg-linear-to-r from-orange-100 to-orange-50 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold text-gray-900">Prevence</h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            Prevence závislostí začíná informovaností, zdravým životním stylem a podporou okolí. 
            Cílem této sekce je dát vám praktické návody a zdroje, které pomohou udržet vás nebo vaše blízké v bezpečí. 
            Znalost rizik, vybudování odolnosti a schopnost požádat o pomoc jsou základní pilíře ochrany. 
            Včasný rozhovor, pevné hranice a kvalitní vztahy mohou doslova změnit budoucnost.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {/* Tipy k prevenci */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Jak na to v praxi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">1) Mluvte otevřeně</h3>
              <p className="text-gray-700 text-sm">
                Otevřená komunikace s rodiči, přáteli i učiteli pomáhá včas zachytit problémy. 
                Nebojte se ptát a nastavte si bezpečný prostor, kde se lze svěřit bez odsuzování.
              </p>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">2) Budujte odolnost</h3>
              <p className="text-gray-700 text-sm">
                Sport, spánek, smysluplné aktivity a realistické cíle posilují psychickou odolnost. 
                Silnější odolnost znamená menší potřebu sahat po náhražkách štěstí.
              </p>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">3) Poznejte rizika</h3>
              <p className="text-gray-700 text-sm">
                Mějte přehled o účincích a rizicích jednotlivých látek. Informace snižují zvědavost a zvyšují připravenost odmítnout.
              </p>
            </article>
          </div>
        </section>

        {/* Galerie */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ilustrační galerie</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200">
              <Image src="/images/marihuana.jpg" alt="Ilustrace marihuana" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200">
              <Image src="/images/pervitin.png" alt="Ilustrace pervitin" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200">
              <Image src="/images/heroin.png" alt="Ilustrace heroin" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden border border-gray-200">
              <Image src="/images/marihuanaD.png" alt="Ilustrace list" fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
        </section>

        {/* Kdy vyhledat pomoc */}
        <section className="bg-orange-50 border border-orange-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kdy vyhledat pomoc</h2>
          <p className="text-gray-700 mb-3">
            Pokud se mění chování, objevují se tajnosti, výkyvy nálad, dlouhodobá únava nebo mizí peníze, je čas reagovat. 
            <strong>Včasná intervence</strong> může předejít závažnějším dopadům. <em>Vyhledání pomoci není selhání</em> – je to projev zodpovědnosti.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Kontaktujte poradnu či linku důvěry</li>
            <li>Promluvte si s lékařem nebo školním psychologem</li>
            <li>Nezůstávejte na to sami – zapojte rodinu a přátele</li>
          </ul>
        </section>

        <footer className="text-sm text-gray-500">
          Další zdroje: <Link className="underline text-orange-700" href="/drugs">Přehled drog</Link> · <Link className="underline text-orange-700" href="/contact">Kontakt</Link>
        </footer>
      </main>
    </Layout>
  );
}
