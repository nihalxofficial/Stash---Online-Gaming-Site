"use client";

import React from "react";
import GameCard, { GameData } from "../Shared/GameCard";

const demoGames: GameData[] = [
  {
    id: "g_01",
    title: "Valorant",
    slug: "valorant",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
    description: "A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities. Engineered for high-stakes competitive play.",
    genre: ["FPS", "Tactical"],
    rating: 4.5,
    releaseDate: "2020-06",
    platform: ["PC", "PS5", "Xbox"],
    status: "Live",
    price: 0,
    size: "45 GB",
  },
  {
    id: "g_02",
    title: "Cyberpunk 2077",
    slug: "cyberpunk-2077",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
    description: "An open-world action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
    genre: ["RPG", "Open World"],
    rating: 4.7,
    releaseDate: "2020-12",
    platform: ["PC", "PS5", "Xbox"],
    status: "Live",
    price: 59.99,
    size: "70 GB",
  },
  {
    id: "g_03",
    title: "Helldivers 2",
    slug: "helldivers-2",
    thumbnail: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=600",
    description: "Join the Helldivers and fight for freedom across a hostile galaxy in fast, frantic, and ferocious third-person cooperative team shooters.",
    genre: ["Action", "Co-op"],
    rating: 4.6,
    releaseDate: "2024-02",
    platform: ["PC", "PS5"],
    status: "Live",
    price: 39.99,
    size: "100 GB",
  },
  {
    id: "g_04",
    title: "Counter-Strike 2",
    slug: "counter-strike-2",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600",
    description: "The next chapter of the world's premier tactical competitive gaming experience, built on the advanced Source 2 engine.",
    genre: ["FPS", "Competitive"],
    rating: 4.3,
    releaseDate: "2023-09",
    platform: ["PC"],
    status: "Live",
    price: 0,
    size: "85 GB",
  },
  {
    id: "g_05",
    title: "Elden Ring",
    slug: "elden-ring",
    thumbnail: "https://images.unsplash.com/photo-1553481187-be93c21490a9?auto=format&fit=crop&q=80&w=600",
    description: "Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    genre: ["RPG", "Soulsborne"],
    rating: 4.9,
    releaseDate: "2022-02",
    platform: ["PC", "PS5", "Xbox"],
    status: "Live",
    price: 59.99,
    size: "60 GB",
  },
  {
    id: "g_06",
    title: "GTA VI",
    slug: "gta-vi",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=600",
    description: "Heading to the neon-soaked streets of Vice City and beyond in the most immersive and grand evolution of the series yet.",
    genre: ["Action", "Open World"],
    rating: 5.0,
    releaseDate: "2025-11",
    platform: ["PS5", "Xbox"],
    status: "Beta",
    price: 69.99,
    size: "150 GB",
  },
];

export default function LatestGames() {
  return (
    <section className="w-full bg-[#05060c] py-16 sm:py-24 relative">
      {/* Subtle Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Cyber Block Title Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between min-h-16 bg-[#0d0f1a]/80 backdrop-blur-md rounded-xl border border-white/5 shadow-xl mb-12 font-mono overflow-hidden">
          
          <div 
            className="h-full bg-[#121420] border-r border-gray-800/60 py-4 px-6 sm:px-8 flex items-center gap-3 shrink-0 [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)] pr-12 md:pr-16"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <h2 className="text-lg sm:text-xl font-black text-white uppercase tracking-widest">
              ST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">ASH</span> LATEST DEPLOYMENTS
            </h2>
          </div>

          <div className="flex-1 py-4 px-6 lg:px-8 text-left text-xs text-gray-400 font-sans tracking-wide leading-relaxed">
            Reviewing active gaming nodes and live database indices configured inside the global stash repository architecture.
          </div>
        </div>

        {/* Reusable Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {demoGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}