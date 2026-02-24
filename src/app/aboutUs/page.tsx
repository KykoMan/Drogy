import type { Metadata } from "next";
import Image from "next/image";
import Layout from "@/components/Layout";
import QRDonate from "@/components/QRDonate";

export const metadata: Metadata = {
  title: "O nás",
  description: "Kdo jsme, jak pomáháme a proč existuje iniciativa Hlas proti drogám. Naše mise, hodnoty a tým.",
  alternates: { canonical: "/aboutUs" },
  openGraph: {
    title: "O nás – Hlas proti drogám",
    description: "Kdo jsme, jak pomáháme a proč existuje iniciativa Hlas proti drogám. Naše mise, hodnoty a tým.",
    url: "/aboutUs",
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
    title: "O nás – Hlas proti drogám",
    description: "Kdo jsme, jak pomáháme a proč existuje iniciativa Hlas proti drogám. Naše mise, hodnoty a tým.",
    images: ["/images/HlasProtiDrogam.png"],
  },
};

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-orange-300/40 to-orange-100/60" />
        <div className="max-w-7xl mx-auto px-4 py-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                Společně tvoříme prostředí bezpečné bez drog
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl">
                Naší vizí je informovaná a empatická společnost, kde je prevence
                dostupná každému. Stavíme na vzdělávání, otevřené komunikaci a
                praktické pomoci – pro jednotlivce, školy i komunity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#mission" className="px-5 py-2.5 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition">Naše mise</a>
                <a href="#values" className="px-5 py-2.5 rounded-md border border-orange-300 text-orange-700 bg-white hover:bg-orange-50 transition">Naše hodnoty</a>
              </div>
            </div>
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow">
              <Image
                src="/images/HlasProtiDrogam.png"
                alt="Hlas proti drogám – ilustrační grafika"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* Stats */}
        <section aria-labelledby="stats" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <h2 id="stats" className="sr-only">Rychlá fakta</h2>
          {[
            { label: "Školení ročně", value: "120+" },
            { label: "Zapojené školy", value: "80" },
            { label: "Dostupné materiály", value: "50+" },
            { label: "Dobrovolníci", value: "200" },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-orange-200 p-6 shadow-sm text-center">
              <div className="text-3xl font-extrabold text-gray-900">{s.value}</div>
              <div className="mt-1 text-sm text-gray-600">{s.label}</div>
            </div>
          ))}
        </section>

        {/* Mission */}
        <section id="mission" aria-labelledby="mission-title" className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 id="mission-title" className="text-3xl font-bold text-gray-900">Naše mise</h2>
            <p className="text-gray-700 leading-relaxed">
              Usilujeme o to, aby každý – rodiče, učitelé, i mladí – měl přístup
              k praktickým nástrojům prevence. Vytváříme vzdělávací programy,
              materiály a komunitní aktivity, které posilují odolnost a
              snižují riziko prvního kontaktu s návykovými látkami. Naše práce
              stojí na principech respektu, partnerství a otevřené komunikace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Co děláme</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                  <li>Workshopy a webináře pro školy a rodiče</li>
                  <li>Praktické příručky a vzdělávací materiály</li>
                  <li>Podpora a anonymní konzultace</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Jak pomáháme</h3>
                <ul className="text-gray-700 list-disc list-inside space-y-1 text-sm">
                  <li>Propojování na odbornou péči</li>
                  <li>Komunitní setkání a peer podpora</li>
                  <li>Bezpečný prostor pro sdílení</li>
                </ul>
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="bg-white rounded-2xl border border-orange-200 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Podpořte naši činnost</h3>
              <p className="text-sm text-gray-700 mb-4">Každý dar nám pomáhá rozšiřovat prevenční programy a dostupnost pomoci.</p>
              <QRDonate />
            </div>
            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kontakt pro spolupráci</h3>
              <p className="text-sm text-gray-700">Máte zájem o workshop ve škole nebo firemní program? Napište nám přes formulář v sekci Kontakt.</p>
            </div>
          </aside>
        </section>

        {/* Values */}
        <section id="values" aria-labelledby="values-title" className="space-y-6">
          <h2 id="values-title" className="text-3xl font-bold text-gray-900">Naše hodnoty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Respekt", desc: "Jednáme s úctou a chápeme různorodé životní situace." },
              { title: "Otevřenost", desc: "Věříme v transparentní komunikaci a sdílení zkušeností." },
              { title: "Spolupráce", desc: "Propojujeme odborníky, školy a komunity do jednoho celku." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-700 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section aria-labelledby="timeline-title" className="space-y-6">
          <h2 id="timeline-title" className="text-3xl font-bold text-gray-900">Jak jsme se sem dostali</h2>
          <ol className="relative border-s border-gray-200 space-y-8 ps-6">
            <li>
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-orange-500" />
              <h3 className="font-semibold text-gray-900">2019 – Založení iniciativy</h3>
              <p className="text-sm text-gray-700">Skupina dobrovolníků spouští první přednášky a osvětové kampaně.</p>
            </li>
            <li>
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-orange-500" />
              <h3 className="font-semibold text-gray-900">2021 – Rozšíření do regionů</h3>
              <p className="text-sm text-gray-700">Vznikají regionální týmy a spolupráce se školami a neziskovkami.</p>
            </li>
            <li>
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-orange-500" />
              <h3 className="font-semibold text-gray-900">2024 – Online platforma</h3>
              <p className="text-sm text-gray-700">Spouštíme online materiály, webináře a vzdělávací balíčky pro školy.</p>
            </li>
          </ol>
        </section>

        {/* Team */}
        <section aria-labelledby="team-title" className="space-y-6">
          <h2 id="team-title" className="text-3xl font-bold text-gray-900">Náš tým</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Denis Z.", role: "Koordinátor prevence", img: "/images/Denis.png" },
              { name: "Jana K.", role: "Lektorka", img: "/images/marihuanaD.png" },
              { name: "Petr S.", role: "Analytik", img: "/images/heroin.png" },
              { name: "Eliška M.", role: "Komunitní podpora", img: "/images/pervitin.png" },
            ].map((m) => (
              <div key={m.name} className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden">
                  <Image src={m.img} alt={m.name} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-gray-900">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
