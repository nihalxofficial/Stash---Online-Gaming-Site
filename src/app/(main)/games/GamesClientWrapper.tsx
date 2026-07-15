// src/components/GamesClientWrapper.tsx
"use client";

import GameCard from "@/components/Shared/GameCard";
import { GameData } from "@/types";
import React, { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch, FiSliders, FiGrid } from "react-icons/fi";
import GameCardSkeleton from "@/components/Shared/GameCardSkeleton";

interface GamesClientWrapperProps {
  games: GameData[];
  allGenres: string[];
}

export default function GamesClientWrapper({ games, allGenres }: GamesClientWrapperProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Read current parameters straight from the browser context location
  const currentSearch = searchParams.get("q") || "";
  const currentGenre = searchParams.get("genre") || "All";
  const currentSort = searchParams.get("sortBy") || "default";

  // URL State Mutator Engine
  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value && value !== "All" && value !== "default") {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Trigger router transition so Server Page re-executes seamlessly inside Suspense context
    startTransition(() => {
      router.push(`/games?${params.toString()}`);
    });
  };

  return (
    <div className="space-y-8">
      {/* CONTROLS INTERACTIVE PANEL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-[#0d0f1a]/60 border border-white/5 p-4 rounded-xl backdrop-blur-md shadow-xl">
        
        {/* Real-time Text Query Input */}
        <div className="relative md:col-span-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by protocol title..."
            value={currentSearch}
            onChange={(e) => updateParams("q", e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-[#06070c] border border-white/5 rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>

        {/* Category Filter Selector */}
        <div className="relative md:col-span-4 flex items-center gap-2">
          <FiSliders className="text-gray-500 w-4 h-4 shrink-0 hidden sm:block" />
          <select
            value={currentGenre}
            onChange={(e) => updateParams("genre", e.target.value)}
            className="w-full h-10 px-3 bg-[#06070c] border border-white/5 rounded text-xs text-gray-300 focus:outline-none focus:border-indigo-500/50 cursor-pointer transition-colors"
          >
            <option value="All">All Genres</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Database Sort Engine Selector */}
        <div className="relative md:col-span-3 flex items-center gap-2">
          <FiGrid className="text-gray-500 w-4 h-4 shrink-0 hidden sm:block" />
          <select
            value={currentSort}
            onChange={(e) => updateParams("sortBy", e.target.value)}
            className="w-full h-10 px-3 bg-[#06070c] border border-white/5 rounded text-xs text-gray-300 focus:outline-none focus:border-indigo-500/50 cursor-pointer transition-colors"
          >
            <option value="default">Sort Vector: Default</option>
            <option value="title">Alphabetical (A-Z)</option>
            <option value="rating">Top Rated Metrics</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* RENDER SYSTEM DISPLAY MATRIX */}
      {isPending ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <GameCardSkeleton key={`skeleton-${idx}`} />
          ))}
        </div>
      ) : games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game) => (
            <div key={game.id || game.slug} className="h-full animate-[fadeIn_0.2s_ease-out]">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full border border-dashed border-white/5 rounded-2xl py-20 flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            No Records Retrieved
          </p>
          <p className="text-xs text-gray-600 font-mono max-w-xs">
            Your live matrix queries yielded no data structures on the server cache. Try resetting parameters.
          </p>
        </div>
      )}
    </div>
  );
}