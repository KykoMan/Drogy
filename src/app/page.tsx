import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans text-gray-800">

      {/* Hero sekce */}
      <section className="bg-[#F58549] relative">
        <div className="flex justify-center pt-10 pb-6">
          <picture className="w-full max-w-3xl">
            <Image 
              src="/images/HlasProtiDrogam.png"
              alt="ZahradnikUvodniStranka" 
              width={1200}
              height={600}
              className='w-full object-cover rounded-lg shadow-2xl'
            />
          </picture>
        </div>
        <div className='flex flex-col items-center text-center pb-16 px-4'>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">Vítejte na našem webu</h1>
          <p className="text-lg md:text-xl text-[#FFF3E0] mb-6 max-w-2xl drop-shadow-md">Tvůj život, tvoje volba – řekni drogám NE.</p>
          <Link href="/aboutUs" className="bg-[#FB8B24] hover:bg-[#E36414] text-white px-6 py-3 rounded-full transition-all shadow-lg transform hover:scale-105">
            Zjistit více
          </Link>
        </div>
      </section>

      {/* Druhá sekce s obsahem */}
      <section className="py-24 bg-linear-to-b from-white to-[#FFF4EA]">
  <div className="max-w-7xl mx-auto px-4 space-y-24">

    {/* BLOK 1 – Info karta */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      <div className="space-y-6">
        <span className="inline-block bg-[#F58549] text-white px-4 py-1 rounded-full text-sm font-semibold">
          PROBLÉM
        </span>
        <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Drogy ničí budoucnost <span className="text-[#F58549]">rychleji</span>, než si myslíš
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Závislost není slabost. Je to past, do které může spadnout kdokoliv. 
          Čím dřív to pochopíš, tím větší máš kontrolu nad svým životem.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-10 text-center transform hover:-translate-y-3 transition-all duration-300">
        <div className="text-6xl font-black text-red-600 mb-2">85%</div>
        <p className="text-gray-600 text-lg">
          lidí s drogovou závislostí má vážné zdravotní následky
        </p>
      </div>
    </div>

    {/* BLOK 2 – Tři karty vedle sebe */}
    <div className="grid md:grid-cols-3 gap-12">

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="text-4xl mb-4">🧠</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Změna v mozku</h3>
        <p className="text-gray-600">
          Drogy narušují přirozenou chemii mozku a vytváří falešný pocit štěstí.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="text-4xl mb-4">⚠️</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Rizika od mládí</h3>
        <p className="text-gray-600">
          1 z 5 mladých lidí se setká s drogami ještě před 18. rokem života.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-10 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
        <div className="text-4xl mb-4">🤝</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-3">Pomoc existuje</h3>
        <p className="text-gray-600">
          Podpora je dostupná 24/7. Nemusíš na to být sám.
        </p>
      </div>

    </div>

    {/* BLOK 3 – Call to action */}
    <div className="bg-[#F58549] rounded-3xl p-14 text-white text-center shadow-2xl mb-16">
      <h3 className="text-4xl font-extrabold mb-4">
        Chceš vědět víc?
      </h3>
      <p className="text-lg text-[#FFF3E0] mb-8 max-w-2xl mx-auto">
        Nauč se, jak se chránit, jak pomoci kamarádům a jak mít kontrolu nad svým životem.
      </p>
      <Link
        href="/aboutUs"
        className="inline-block bg-white text-[#F58549] font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        Pokračovat
      </Link>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#E36414] text-white py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p>© 2025 Kyberna projekt. Všechna práva vyhrazena.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/contact" className="hover:underline text-white">Kontakt</Link>
            <Link href="/privacy" className="hover:underline text-white">Ochrana osobních údajů</Link> {/* ještě nejsou ale třeba někdy */}
          </div>
        </div>
      </footer>
    </div>
  );
}
