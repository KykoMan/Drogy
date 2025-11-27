import Layout from '@/components/Layout';
import QRDonate from '@/components/QRDonate';

export default function ONasPage() {
  return (
    <Layout title="O nás - Hlas proti drogám">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">O nás</h1>
            <div className="space-y-6 text-gray-600">
              <p>
                Jsme skupina nadšenců a dobrovolníků, kteří se rozhodli bojovat proti šíření drog v naší společnosti. 
                Věříme, že prevence a vzdělávání jsou klíčem k řešení tohoto problému.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8">Naše mise</h2>
              <p>
                Snažíme se bojovat proti používání drog prostřednictvím osvěty, pomoci postiženým a jejich rodinám 
                a spoluprací s orgány činnými v trestním řízení.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8">Spolupráce s kybernou</h2>
              <p>
                Úzce spolupracujeme s kybernetickou policií na odhalování nelegálních online aktivit spojených s drogami. 
                Naše týmy společně pracují na eliminaci online prodeje a šíření drog.
              </p>

              <h2 className="text-2xl font-semibold text-gray-800 mt-8">Pomoc bezdomovcům</h2>
              <p>
                Jsme štědří lidé, kteří pravidelně rozdávají věci bezdomovcům. Pořádáme sbírky oblečení, potravin 
                a hygienických potřeb. Věříme, že pomoc těmto lidem může snížit riziko, že sáhnou po drogách.
              </p>
            </div>
          </div>
          
          <div>
            <QRDonate />
          </div>
        </div>
      </div>
    </Layout>
  );
}