"use client";

import Layout from '@/components/Layout';
import { useState, useEffect, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export default function MinihraPage() {
  const [position, setPosition] = useState<Position>({ x: 50, y: 50 });
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft((t) => t - 1);
      } else {
        // Avoid setting state synchronously in the effect body
        setTimeout(() => setIsPlaying(false), 0);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isPlaying, timeLeft]);

  const moveCharacter = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (!isPlaying) return;

    setPosition(prev => {
      let newX = prev.x;
      let newY = prev.y;

      switch (direction) {
        case 'up': newY = Math.max(0, prev.y - 10); break;
        case 'down': newY = Math.min(90, prev.y + 10); break;
        case 'left': newX = Math.max(0, prev.x - 10); break;
        case 'right': newX = Math.min(90, prev.x + 10); break;
      }

      // Náhodně přidat bod (jako by sebral "drogu" - prank)
      if (Math.random() > 0.7) {
        setScore(prev => prev + 1);
      }

      return { x: newX, y: newY };
    });
  }, [isPlaying]);

  const startGame = () => {
    setIsPlaying(true);
    setTimeLeft(30);
    setScore(0);
    setPosition({ x: 50, y: 50 });
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      switch (e.key) {
        case 'ArrowUp': 
          e.preventDefault();
          moveCharacter('up'); 
          break;
        case 'ArrowDown': 
          e.preventDefault();
          moveCharacter('down'); 
          break;
        case 'ArrowLeft': 
          e.preventDefault();
          moveCharacter('left'); 
          break;
        case 'ArrowRight': 
          e.preventDefault();
          moveCharacter('right'); 
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [moveCharacter, isPlaying]);

  // Přidáme kontrolní body pro lepší hratelnost
  const [items, setItems] = useState<Position[]>([
    { x: 20, y: 20 },
    { x: 80, y: 30 },
    { x: 40, y: 70 },
    { x: 60, y: 40 },
    { x: 30, y: 60 }
  ]);

  // Kontrola kolizí s předměty
  useEffect(() => {
    if (!isPlaying) return;

    const checkCollisions = () => {
      setItems(prevItems => {
        const newItems = prevItems.filter(item => {
          const distance = Math.sqrt(
            Math.pow(item.x - position.x, 2) + Math.pow(item.y - position.y, 2)
          );
          
          if (distance < 8) {
            setScore(prev => prev + 1);
            return false; // odstranit sebratý předmět
          }
          return true;
        });

        // Přidat nové předměty pokud jich je málo
        if (newItems.length < 3 && Math.random() > 0.95) {
          newItems.push({
            x: Math.random() * 80 + 10,
            y: Math.random() * 80 + 10
          });
        }

        return newItems;
      });
    };

    checkCollisions();
  }, [position, isPlaying]);

  return (
    <Layout title="Minihra - Hlas proti drogám">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Minihra - Rozdávej &quot;drogové&quot; letáky</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-gray-800">Skóre: {score}</div>
            <div className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}`}>
              Čas: {timeLeft}s
            </div>
            <div className="text-lg text-gray-600">Stav: {isPlaying ? 'Hraješ!' : 'Čeká se...'}</div>
          </div>

          {!isPlaying && (
            <div className="text-center mb-6">
              <button 
                onClick={startGame}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition text-xl"
              >
                {score === 0 ? 'Začít hru' : 'Hrát znovu'}
              </button>
              {timeLeft === 0 && (
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  Game Over! Dosáhl jsi {score} bodů!
                </p>
              )}
            </div>
          )}

          <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 border-4 border-gray-300 overflow-hidden">
            {/* Hráč */}
            <div 
              className="absolute w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-200 shadow-lg z-10"
              style={{ left: `${position.x}%`, top: `${position.y}%`, transform: 'translate(-50%, -50%)' }}
            >
              Ty
            </div>

            {/* Předměty k sebrání */}
            {items.map((item, index) => (
              <div
                key={index}
                className="absolute w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-gray-800 animate-pulse"
                style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                💊
              </div>
            ))}

            {/* Instrukce */}
            {isPlaying && (
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
                Použij šipky pro pohyb
              </div>
            )}
          </div>

          <div className="mt-6 text-center text-gray-600">
            <p className="mb-2">Používej šipky na klávesnici pro pohyb. Seber co nejvíce &quot;tabletek&quot; (jako prank)!</p>
            <p className="text-sm text-gray-500">(Tato hra je satira a má pouze pobavit. Ve skutečnosti drogy nerozdáváme.)</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
