import Layout from '@/components/Layout';
import DrugCard from '@/components/DrugCard';
import { Drug } from '../../types/drug';

const drugsData: Drug[] = [
  {
    id: 1,
    name: "Marihuana",
    image: "/images/marihuana.jpg",
    description: "Nejrozšířenější ilegální droga, ovlivňuje vnímání a koordinaci.",
    addictionLevel: 30,
    usage: 45,
    symptoms: ["Zčervenání očí", "Zhoršená paměť", "Zvýšená chuť k jídlu", "Zpomalené reakce"]
  },
  {
    id: 2,
    name: "Extáze",
    image: "/images/extaze.jpg",
    description: "Syntetická droga s stimulačními a halucinogenními účinky.",
    addictionLevel: 60,
    usage: 15,
    symptoms: ["Dehydratace", "Zvýšená teplota", "Skřípání zubů", "Nespavost"]
  },
  {
    id: 3,
    name: "Pervitin",
    image: "/images/pervitin.jpg",
    description: "Vysoce návyková stimulační droga s devastujícími účinky.",
    addictionLevel: 90,
    usage: 25,
    symptoms: ["Psychózy", "Úbytek váhy", "Paranoia", "Poškození orgánů"]
  },
  {
    id: 4,
    name: "Heroin",
    image: "/images/heroin.jpg",
    description: "Extrémně návyková opiátová droga s vysokým rizikem předávkování.",
    addictionLevel: 95,
    usage: 8,
    symptoms: ["Těžká závislost", "Respirační problémy", "Infekce", "Sociální izolace"]
  }
];

export default function DrogyPage() {
  return (
    <Layout title="Přehled drog - Hlas proti drogám">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Přehled drog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drugsData.map(drug => (
            <DrugCard key={drug.id} drug={drug} />
          ))}
        </div>
      </div>
    </Layout>
  );
}