// src/app/games/page.tsx
import { getGames } from "@/lib/api/games";
import { FiActivity } from "react-icons/fi";
import GamesClientWrapper from "./GamesClientWrapper";

export const metadata = {
  title: "Stash Games - Database Registry",
  description: "Browse and filter the complete games catalog.",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GamesPage({ searchParams }: PageProps) {
  // Await the query values inside the Server Component runtime
  const resolvedParams = await searchParams;
  
  // Forward parameters directly onto the backend call pipeline
  const games = await getGames(resolvedParams);

  // Fallback static genre index array for the selector dropdown filter
  const allGenres = ["Fps", "Tactical", "Hero Shooter", "Action", "RPG", "Sci-Fi", "Open World", "Roguelike"];

  return (
    <div className="min-h-screen bg-[#08090f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/10 via-[#08090f] to-[#08090f] text-gray-200 p-4 md:p-8 font-mono">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER LOG - Server Rendered */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest animate-pulse">
              <FiActivity className="w-3.5 h-3.5" /> Central Index Database
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              All Available Deployments
            </h1>
          </div>
          <div className="text-xs text-gray-500 font-mono bg-[#0d0f1a] border border-white/5 px-3 py-1.5 rounded self-start md:self-auto">
            TOTAL RECORDS: <span className="text-cyan-400 font-bold">{games?.length || 0}</span>
          </div>
        </div>

        {/* Client Side Controller Wrapper */}
        <GamesClientWrapper games={games || []} allGenres={allGenres} />

      </div>
    </div>
  );
}