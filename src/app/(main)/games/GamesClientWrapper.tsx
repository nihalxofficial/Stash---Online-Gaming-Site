// src/components/GamesClientWrapper.tsx
"use client";

import GameCard from "@/components/Shared/GameCard";
import { GameData } from "@/types";
import React, { useState, useMemo } from "react";
import { FiSearch, FiSliders, FiGrid } from "react-icons/fi";

interface GamesClientWrapperProps {
  initialGames: GameData[];
}

export default function GamesClientWrapper({ initialGames }: GamesClientWrapperProps) {
  // --- CONTROL STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  // Dynamically extract all unique genres from live data records
  const allGenres = useMemo(() => {
    return Array.from(new Set(initialGames.flatMap((game) => game.genre || [])));
  }, [initialGames]);

  // --- COMPREHENSIVE FILTER & SORT LOGIC ENGINE ---
  const filteredAndSortedGames = useMemo(() => {
    let result = [...initialGames];

    // 1. Text Search Filter (Title / Description match checks)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(
        (game) =>
          game.title?.toLowerCase().includes(query) ||
          game.description?.toLowerCase().includes(query)
      );
    }

    // 2. Genre Category Filter
    if (selectedGenre !== "All") {
      result = result.filter((game) => game.genre?.includes(selectedGenre));
    }

    // 3. Sorting Engine Application
    if (sortBy === "price-low") {
      result.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === "rating") {
      result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "title") {
      result.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    }

    return result;
  }, [initialGames, searchQuery, selectedGenre, sortBy]);

  return (
    <div className="space-y-8">
      {/* CONTROLS INTERACTIVE PANEL */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 bg-[#0d0f1a]/60 border border-white/5 p-4 rounded-xl backdrop-blur-md shadow-xl">
        
        {/* Search Input field */}
        <div className="relative md:col-span-5">
          <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search by protocol title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 bg-[#06070c] border border-white/5 rounded text-xs text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>

        {/* Genre Selector */}
        <div className="relative md:col-span-4 flex items-center gap-2">
          <FiSliders className="text-gray-500 w-4 h-4 shrink-0 hidden sm:block" />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full h-10 px-3 bg-[#06070c] border border-white/5 rounded text-xs text-gray-300 focus:outline-none focus:border-indigo-500/50 cursor-pointer transition-colors"
          >
            <option value="All">All Genres (Global Filter)</option>
            {allGenres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Vector Selector */}
        <div className="relative md:col-span-3 flex items-center gap-2">
          <FiGrid className="text-gray-500 w-4 h-4 shrink-0 hidden sm:block" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
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

      {/* 4-COLUMN RESPONSIVE RENDER GRID */}
      {filteredAndSortedGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredAndSortedGames.map((game) => (
            <div key={game.id || game.slug} className="h-full animate-[fadeIn_0.2s_ease-out]">
              <GameCard game={game} />
            </div>
          ))}
        </div>
      ) : (
        /* EMPTY RECORD STATE BOX */
        <div className="w-full border border-dashed border-white/5 rounded-2xl py-20 flex flex-col items-center justify-center text-center space-y-2">
          <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            No Records Retrieved
          </p>
          <p className="text-xs text-gray-600 font-mono max-w-xs">
            Your live matrix queries yielded no data structures. Try resetting search parameters.
          </p>
        </div>
      )}
    </div>
  );
}