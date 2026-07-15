// src/app/games/page.tsx
import React from "react";
import { getGames } from "@/lib/api/games";
import { FiActivity } from "react-icons/fi";
import GamesClientWrapper from "./GamesClientWrapper";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GamesPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  
  // Fetch combined structural response object from backend
  const data = await getGames(resolvedParams);
  
  const games = data?.games || [];
  const meta = data?.meta || { totalItems: 0, totalPages: 1, page: 1, limit: 8 };
  const allGenres = ["Fps", "Tactical", "Hero Shooter", "Action", "RPG", "Open World"];

  return (
    <div className="min-h-screen bg-[#08090f] text-gray-200 p-4 md:p-8 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest animate-pulse">
              <FiActivity className="w-3.5 h-3.5" /> Central Index Database
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Available Deployments
            </h1>
          </div>
          <div className="text-xs text-gray-500 font-mono bg-[#0d0f1a] border border-white/5 px-3 py-1.5 rounded">
            MATCHES DETECTED: <span className="text-cyan-400 font-bold">{meta.totalItems}</span>
          </div>
        </div>

        {/* Client Wrapper */}
        <GamesClientWrapper games={games} allGenres={allGenres} paginationMeta={meta} />

      </div>
    </div>
  );
}