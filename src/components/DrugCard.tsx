import { Drug } from '../types/drug';

interface DrugCardProps {
  drug: Drug;
}

export default function DrugCard({ drug }: DrugCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={drug.image} alt={drug.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{drug.name}</h3>
        <p className="text-gray-600 mb-4">{drug.description}</p>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Závislost:</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-orange-600 h-2 rounded-full" 
                style={{ width: `${drug.addictionLevel}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{drug.addictionLevel}%</span>
          </div>
          
          <div>
            <span className="font-semibold">Používanost:</span>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div 
                className="bg-orange-500 h-2 rounded-full" 
                style={{ width: `${drug.usage}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{drug.usage}%</span>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold text-gray-700 mb-2">Příznaky:</h4>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {drug.symptoms.map((symptom, index) => (
              <li key={index}>{symptom}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}