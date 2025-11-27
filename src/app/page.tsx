import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Hlas proti drogám - Úvod">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Bojujeme proti <span className="text-red-600">drogám</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Společně vytváříme svět bez drog. Vzděláváme, pomáháme a podporujeme 
            ty, kteří se rozhodli žít zdravým životem.
          </p>
          <Link
            href="/about"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition inline-block"
          >
            Zjistit více
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
            <p className="text-gray-600">uživatelů drog má vážné zdravotní problémy</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-red-600 mb-2">1 z 5</div>
            <p className="text-gray-600">mladých lidí se setká s drogami před 18. rokem</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <p className="text-gray-600">pomoc a podpora pro potřebné</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}