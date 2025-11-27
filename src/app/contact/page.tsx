import Layout from '../../components/Layout';

export default function Kontakt() {
  return (
    <Layout title="Kontakt - Hlas proti drogám">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Kontaktujte nás</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Kontaktní informace</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-700">Adresa</h3>
                <p className="text-gray-600">Na Poříčí 1070/10, 110 00 Praha 1</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Telefon</h3>
                <p className="text-gray-600">+420 123 456 789</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Email</h3>
                <p className="text-gray-600">info@hlasprotidrogam.cz</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-700">Nonstop linka pomoci</h3>
                <p className="text-gray-600">+420 800 123 456</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Napište nám zprávu</h2>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Jméno</label>
                <input 
                  type="text" 
                  id="name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Zpráva</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}