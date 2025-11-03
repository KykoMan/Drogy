export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">O projektu</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-4">
          Vítejte na stránkách projektu Drogy midej. Náš projekt se zaměřuje na prevenci
          a vzdělávání v oblasti drogové problematiky.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Naše mise</h2>
        <p className="mb-4">
          Naším cílem je poskytovat důvěryhodné informace a podporu v boji proti
          drogovým závislostem. Věříme, že správná informovanost je klíčem k prevenci.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Co děláme</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Organizujeme preventivní programy</li>
          <li className="mb-2">Poskytujeme informační materiály</li>
          <li className="mb-2">Spolupracujeme s odborníky v oblasti adiktologie</li>
          <li className="mb-2">Vedeme rozhovory s lidmi, kteří mají osobní zkušenost</li>
        </ul>
      </div>
    </main>
  );
}