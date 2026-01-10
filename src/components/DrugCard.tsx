"use client";

import { useState } from 'react';
import { Drug } from '../types/drug';
import Image from 'next/image';
import Link from 'next/link';

interface DrugCardProps {
  drug: Drug;
}

export default function DrugCard({ drug }: DrugCardProps) {
  const [imageSrc, setImageSrc] = useState(drug.image || '/images/Denis.png');

  function handleImageError() {
    setImageSrc('/images/Denis.png');
  }

  function clamp(val: number, min = 0, max = 100) {
    return Math.min(max, Math.max(min, Math.round(val)));
  }

  function getColorForPercent(percent: number) {
    const p = clamp(percent);
    const hue = Math.round(120 - (p / 100) * 120);
    return `hsl(${hue}, 75%, 45%)`;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg">
      {/* Image */}
      <div className="relative w-full h-52 bg-gray-100/50">
        <Image
          src={imageSrc}
          alt={drug.name}
          fill
          className="object-cover"
          onError={handleImageError}
          sizes="(max-width: 640px) 100vw, 400px"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
          <Link href={`/drugs/${drug.id}`} className="hover:underline">
            {drug.name}
          </Link>
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          {drug.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-gray-900">Závislost:</span>
            <div
              className="w-full bg-gray-200 rounded-full h-2 mt-1"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={clamp(drug.addictionLevel)}
            >
              <div
                className="h-2 rounded-full transition-colors"
                style={{
                  width: `${clamp(drug.addictionLevel)}%`,
                  backgroundColor: getColorForPercent(drug.addictionLevel),
                }}
              />
            </div>
            <span className="text-xs text-gray-500">{drug.addictionLevel}%</span>
          </div>

          <div>
            <span className="font-semibold text-gray-900">Používanost:</span>
            <div
              className="w-full bg-gray-200 rounded-full h-2 mt-1"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={clamp(drug.usage)}
            >
              <div
                className="h-2 rounded-full transition-colors"
                style={{
                  width: `${clamp(drug.usage)}%`,
                  backgroundColor: getColorForPercent(drug.usage),
                }}
              />
            </div>
            <span className="text-xs text-gray-500">{drug.usage}%</span>
          </div>
        </div>

        {/* Symptoms */}
        <div className="pt-2">
          <h4 className="font-semibold text-gray-900 mb-2 text-sm border-b border-gray-200 pb-1">Příznaky:</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 pl-3">
            {drug.symptoms.map((symptom, index) => (
              <li key={index} className="bg-gray-50 px-2 py-1 rounded-md border-l-4 border-orange-500">
                {symptom}
              </li>
            ))}
          </ul>
        </div>
      <div className="pt-4">
          <Link href={`/drugs/${drug.id}`} className="inline-block text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md text-sm">
            Detail drogy
          </Link>
        </div>
      </div>
    </div>
  );
}
