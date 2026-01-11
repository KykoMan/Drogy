"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Layout from "../../components/Layout";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("dotaz");
  const [priority, setPriority] = useState(50);
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email");
  const [file, setFile] = useState<File | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  // validace
  const validity = useMemo(() => {
    const checks = {
      name: name.trim().length >= 2,
      email: /.+@.+\..+/.test(email),
      message: message.trim().length >= 10,
      agree,
    };
    const passed = Object.values(checks).filter(Boolean).length;
    const total = Object.keys(checks).length;
    return { checks, passed, total, percent: Math.round((passed / total) * 100) };
  }, [name, email, message, agree]);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validity.passed < validity.total) return;
    alert(
      `Děkujeme, ${name}! Ozveme se přes ${contactMethod === "email" ? "e-mail" : "telefon"}.` +
        (file ? `\nPříloha: ${file.name}` : "")
    );
  }

  return (
    <Layout title="Kontakt – Hlas proti drogám">
      {/* Hero */}
      <header className="bg-linear-to-r from-orange-300/40 to-orange-100/60 border-b border-orange-300/60">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Ozvěte se nám</h1>
          <p className="mt-3 max-w-3xl text-gray-700">
            Ať už hledáte pomoc, chcete nahlásit rizikové chování, nebo máte dotaz k našim programům – jsme připraveni naslouchat.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Aside info */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-orange-200 p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Kontaktní informace</h2>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>
                  <span className="font-semibold">Adresa:</span> Na Poříčí 1070/10, 110 00 Praha 1
                </li>
                <li>
                  <span className="font-semibold">Telefon:</span> +420 123 456 789
                </li>
                <li>
                  <span className="font-semibold">Email:</span> info@hlasprotidrogam.cz
                </li>
                <li>
                  <span className="font-semibold">Nonstop linka:</span> 800 123 456
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Rychlá pomoc</h3>
                <p className="text-sm text-gray-700">
                  <strong>Akutní stav?</strong> Volejte záchrannou službu 155. V případě anonymní konzultace napište do zprávy {`"ANONYM"`}.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-2">GDPR</h3>
              <p className="text-sm text-gray-700">Vaše data zpracováváme pouze pro účely odpovědi na dotaz a dle potřebné legislativy.</p>
            </div>
          </aside>

          {/* Form */}
          <section className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-orange-200 p-6 shadow-sm">
              <div className="flex items-center justify-between gap-6 flex-wrap">
                <h2 className="text-xl font-semibold text-gray-900">Kontaktní formulář</h2>
                {/* Progress */}
                <div className="w-full sm:w-64">
                  <div className="h-2 bg-gray-200 rounded-full" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={validity.percent}>
                    <div className="h-2 bg-orange-500 rounded-full" style={{ width: `${validity.percent}%` }} />
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Vyplněno: {validity.percent}%</div>
                </div>
              </div>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Jméno</label>
                    <input
                      ref={nameRef}
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    {!validity.checks.name && <p className="text-xs text-red-600 mt-1">Uveďte alespoň 2 znaky.</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                    {!validity.checks.email && <p className="text-xs text-red-600 mt-1">Zadejte platný e-mail.</p>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="tel" className="block text-sm font-medium text-gray-700">Telefon</label>
                    <input
                      type="tel"
                      id="tel"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      placeholder="+420 123 456 789"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Preferované datum kontaktu</label>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700">Téma</label>
                    <select
                      id="topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    >
                      <option value="dotaz">Obecný dotaz</option>
                      <option value="pomoc">Chci pomoc</option>
                      <option value="spoluprace">Nabídka spolupráce</option>
                    </select>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Preferovaný způsob kontaktu</span>
                    <div className="mt-2 flex items-center gap-6">
                      <label className="inline-flex items-center gap-2">
                        <input type="radio" name="contact" value="email" checked={contactMethod === "email"} onChange={() => setContactMethod("email")} />
                        <span>Email</span>
                      </label>
                      <label className="inline-flex items-center gap-2">
                        <input type="radio" name="contact" value="phone" checked={contactMethod === "phone"} onChange={() => setContactMethod("phone")} />
                        <span>Telefon</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700">Naléhavost: {priority}%</label>
                    <input
                      type="range"
                      id="priority"
                      min={0}
                      max={100}
                      value={priority}
                      onChange={(e) => setPriority(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">Příloha (volitelné)</label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                      className="mt-1 block w-full text-sm text-gray-700"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Zpráva</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                  {!validity.checks.message && <p className="text-xs text-red-600 mt-1">Zpráva by měla mít alespoň 10 znaků.</p>}
                </div>

                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                  <span>Souhlasím se zpracováním osobních údajů</span>
                </label>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={validity.passed < validity.total}
                    className="bg-orange-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
                  >
                    Odeslat zprávu
                  </button>
                  <span className="text-xs text-gray-600">Vyplňte povinné položky pro odeslání.</span>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
