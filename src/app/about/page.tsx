export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-10 pb-8">
        <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
                O projektu
              </h1>
              <p className="mt-3 text-lg text-slate-700 dark:text-slate-300 max-w-xl">
                Vítejte na stránkách projektu Drogy midej — prevence a vzdělávání s lidským přístupem.
                Snažíme se předávat faktické informace a podporu těm, kteří ji potřebují.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#co-delame"
                  className="inline-flex items-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm text-sm font-medium transition"
                >
                  Co děláme
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Kontakt
                </a>
              </div>
            </div>

            <div className="hidden md:block w-56">
              {/* Simple illustrative SVG */}
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#10b981" />
                    <stop offset="1" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" rx="20" fill="url(#g)" opacity="0.12" />
                <g transform="translate(30,40)" fill="none" stroke="#0f172a" strokeOpacity="0.07" strokeWidth="3">
                  <path d="M0 0 C30 20, 60 0, 90 20" />
                  <path d="M0 30 C30 50, 60 30, 90 50" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-md bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                {/* Icon: shield */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 2l7 3v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V5l7-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Prevence</h3>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
              Programy zaměřené na mladé lidi i rodiče — praktičtější informace, které pomáhají předcházet rizikům.
            </p>
          </div>

          <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-md bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400">
                {/* Icon: book */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 6h14v13H3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M7 6v13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Vzdělávání</h3>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
              Přehledné informační materiály a rozhovory s odborníky, aby byla složitá témata srozumitelná.
            </p>
          </div>

          <div className="rounded-xl bg-white dark:bg-slate-800 p-6 shadow hover:shadow-lg transition">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-md bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                {/* Icon: users */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M2 20a8 8 0 0114 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Podpora</h3>
            </div>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm">
              Spolupráce s odborníky a otevřené rozhovory — cesta k pochopení a reálné pomoci.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="container mx-auto px-4 pb-16">
        <div className="prose dark:prose-invert max-w-none bg-white dark:bg-slate-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mt-0">Naše mise</h2>
          <p>
            Naším cílem je poskytovat důvěryhodné informace a podporu v boji proti drogovým závislostem. Věříme,
            že správná informovanost je klíčem k prevenci.
          </p>

          <h2 id="co-delame" className="text-2xl font-semibold mt-8">Co děláme</h2>
          <ul>
            <li>Organizujeme preventivní programy</li>
            <li>Poskytujeme informační materiály</li>
            <li>Spolupracujeme s odborníky v oblasti adiktologie</li>
            <li>Vedeme rozhovory s lidmi, kteří mají osobní zkušenost</li>
          </ul>

          <div className="mt-6">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Chcete se zapojit nebo potřebujete více informací? Kontaktujte nás.
            </p>
            <a id="kontakt" href="#" className="inline-block mt-3 px-5 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition">
              Napište nám
            </a>
          </div>
        </div>
      </section>

      {/* Small footer note */}
      <footer className="container mx-auto px-4 pb-8 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="inline-block bg-white dark:bg-transparent px-3 py-2 rounded-md shadow-sm">
          Projekt provozován s respektem k důstojnosti a faktech.
        </div>
      </footer>
    </main>
  );
}