export default function InterviewsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Rozhovory</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder for interviews - would typically come from a database/CMS */}
        {[1, 2, 3].map((interview) => (
          <div key={interview} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-3">Rozhovor #{interview}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline">
              Číst více →
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}