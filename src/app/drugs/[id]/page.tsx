import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

/** data */
const drugsData = [
  {
    id: 1,
    name: "Marihuana",
    image: "/images/denisg.png",
    description:
      "Nejrozšířenější ilegální droga, ovlivňuje vnímání a koordinaci. U některých uživatelů může vyvolat úzkosti a zhoršit schopnost soustředění.",
    risks: [
      "Zhoršená krátkodobá paměť",
      "Riziko psychických poruch u náchylných jedinců",
      "Zpomalené reakce – riziko při řízení",
    ],
  },
  {
    id: 2,
    name: "Extáze",
    image: "/images/extaze.jpg",
    description:
      "Syntetická droga s stimulačními a halucinogenními účinky. Často užívaná na party, může vést k přehřátí organismu.",
    risks: [
      "Dehydratace a přehřátí",
      "Srdeční arytmie",
      "Psychické dopady (dojezdy, úzkost)",
    ],
  },
  {
    id: 3,
    name: "Pervitin",
    image: "/images/pervitin.png",
    description:
      "Vysoce návyková stimulační droga s devastujícími účinky na psychiku i tělo. Způsobuje nespavost a výraznou zátěž na kardiovaskulární systém.",
    risks: [
      "Paranoia, psychózy",
      "Rychlý úbytek hmotnosti",
      "Poškození srdce a jater",
    ],
  },
  {
    id: 4,
    name: "Heroin",
    image: "/images/heroin.png",
    description:
      "Extrémně návyková opiátová droga s vysokým rizikem předávkování. Uživatelé rychle zvyšují dávky kvůli toleranci.",
    risks: [
      "Zástava dýchání při předávkování",
      "Infekce při injekčním užívání",
      "Silná fyzická závislost",
    ],
  },
] as const;

/** vygeneruje [id] stránku */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const drug = drugsData.find((d) => d.id === Number(id));
  const title = drug ? `${drug.name} – detail` : `Droga #${id} – nenalezena`;
  const description = drug?.description ?? "Detail drogy nebyl nalezen.";
  const path = `/drugs/${id}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: drug ? [{ url: drug.image, alt: drug.name }] : undefined,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: drug ? [drug.image] : undefined,
    },
  };
}

export default async function DrugDetailPage({ params }: PageProps) {
  const { id } = await params;
  const drug = drugsData.find((d) => d.id === Number(id));

  if (!drug) {
    return (
      <main className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">Položka nenalezena</h1>
        <p className="text-gray-600 mb-6">
          Zvolená droga neexistuje nebo byla odstraněna.
        </p>
        <Link href="/drugs" className="underline text-orange-600">
          Zpět na přehled
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <article className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Media */}
        <div className="lg:col-span-1">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow">
            <Image
              src={drug.image}
              alt={drug.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 space-y-6">
          <header>
            <h1 className="text-4xl font-extrabold text-gray-900">
              {drug.name}
            </h1>
            <p className="mt-3 text-gray-700 leading-relaxed">
              {drug.description}
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Rizika</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {drug.risks.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>

          <section className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <h3 className="font-semibold mb-2">Potřebujete pomoc?</h3>
            <p>
              Ozvěte se odborné lince pomoci. <strong>Pomoc existuje</strong> a
              může být prvním krokem ke změně. Pokud si nejste jisti,
              <em> kontaktujte nás anonymně</em> přes formulář v sekci Kontakt.
            </p>
          </section>

          <footer className="pt-2">
            <Link
              href="/drugs"
              className="inline-block text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-md"
            >
              Zpět na přehled drog
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
