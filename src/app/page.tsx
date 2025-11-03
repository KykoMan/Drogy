import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Drogy Midej</h1>
            <p className="text-xl mb-8">
              Společně proti drogové závislosti. Informace, podpora a prevence pro lepší budoucnost.
            </p>
            <Link
              href="/about"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Zjistit více
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Prevence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nabízíme preventivní programy a vzdělávací materiály pro školy a organizace.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Podpora</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Poskytujeme podporu a informace pro osoby bojující se závislostí a jejich blízké.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Pomoc</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Spolupracujeme s odborníky a institucemi v oblasti léčby závislostí.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Interviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nejnovější rozhovory</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample interview cards - would typically come from a database */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Cesta k uzdravení</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Příběh Jany, která překonala závislost a nyní pomáhá ostatním...
                </p>
                <Link
                  href="/interviews"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Číst více →
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Pohled odborníka</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Rozhovor s Dr. Novákem o současných trendech v léčbě závislostí...
                </p>
                <Link
                  href="/interviews"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Číst více →
                </Link>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Prevence ve školách</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Diskuze s pedagogy o účinných preventivních programech...
                </p>
                <Link
                  href="/interviews"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Číst více →
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/interviews"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Všechny rozhovory
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Potřebujete pomoc?</h2>
          <p className="text-xl mb-8">
            Jsme tu pro vás. Kontaktujte nás a společně najdeme řešení.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Kontaktovat
          </Link>
        </div>
      </section>
    </main>
  );
}
