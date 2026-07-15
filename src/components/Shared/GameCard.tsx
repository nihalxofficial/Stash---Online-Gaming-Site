"use client";

import React, { useMemo } from "react"; // Imported useMemo to prevent size changes on every re-render
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiDownload, FiShoppingCart, FiEye } from "react-icons/fi";
import { GameData } from "@/types";



interface GameCardProps {
  game: GameData;
}

export default function GameCard({ game }: GameCardProps) {
  const isFree = game.price === 0;
  const releaseYear = game.releaseDate.split("-")[0] || game.releaseDate;

  // GENERATE RANDOM SIZE BETWEEN 10 and 100 GB
  // Wrapped in useMemo so the number stays stable for this card instance during page usage
  const randomSize = useMemo(() => {
    const min = 10;
    const max = 100;
    // eslint-disable-next-line react-hooks/purity
    const sizeVal = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${sizeVal} GB`;
  }, []);

  return (
    <div className="relative bg-[#0d0f1a]/90 border border-white/5 p-3 flex flex-col h-full shadow-2xl font-mono [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%,0_16px)] transition-all duration-300 hover:border-indigo-500/30 group">
      
      {/* Premium Linear Horizon Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* 1. IMAGE CONTAINER WITH CYBER SLANTS */}
      <div className="relative aspect-[16/9] w-full bg-gray-950 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%,0_12px)] overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-w-7xl) 25vw, 33vw, 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-transparent to-black/40 pointer-events-none" />

        {/* Platform Badge */}
        <div className="absolute top-2 left-2 z-10">
          <span className="text-[9px] font-black tracking-widest bg-black/75 backdrop-blur-sm border border-white/10 text-indigo-400 px-2 py-0.5 rounded uppercase shadow-md">
            {game.platform[0]}
          </span>
        </div>

        {/* Rating Overlay */}
        <div className="absolute top-2 right-2 z-10 flex items-center gap-0.5 bg-black/75 backdrop-blur-sm border border-white/10 px-1.5 py-0.5 rounded text-amber-400 text-[10px] font-bold shadow-md">
          <FiStar className="fill-amber-400 w-2.5 h-2.5" />
          <span>{game.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* 2. META DATA INVENTORY */}
      <div className="pt-3 pb-2 flex flex-col flex-grow items-center text-center">
        {/* Core Title */}
        <h3 className="text-sm font-black text-white tracking-wide uppercase px-1 mb-0.5 truncate w-full group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {game.title}
        </h3>

        {/* Dynamic Pricing Text Accent */}
        <p className={`text-[11px] tracking-wider font-bold mb-2 ${isFree ? "text-emerald-400 uppercase font-black" : "text-gray-400"}`}>
          {isFree ? "Free to play" : `$${game.price.toFixed(2)}`}
        </p>

        {/* Mini Inline Technical Specification Matrix */}
        <div className="w-full flex items-center justify-between border-t border-white/[0.04] pt-2 text-[10px] text-gray-400 font-mono">
          <span className="truncate max-w-[55%] text-gray-300 text-left">
            {game.genre[0]}
          </span>
          <div className="flex items-center gap-2 shrink-0 text-right text-gray-500">
            {/* UPDATED TO RENDER RANDOMIZED SIZE METRIC */}
            <span>{randomSize}</span>
            <span className="text-white/[0.04]">•</span>
            <span>{releaseYear}</span>
          </div>
        </div>
      </div>

      {/* 3. DISTINCT ACTION MATRIX */}
      <div className="mt-auto grid grid-cols-2 gap-1.5 pt-2 border-t border-white/[0.04]">
        {isFree ? (
          <button 
            type="button"
            className="flex items-center justify-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-black text-[10px] font-black tracking-widest uppercase py-2 rounded transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/10 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          >
            <FiDownload className="w-3 h-3 stroke-[3]" />
            <span>Get</span>
          </button>
        ) : (
          <button 
            type="button"
            className="flex items-center justify-center gap-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-[10px] font-black tracking-widest uppercase py-2 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-600/10 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          >
            <FiShoppingCart className="w-3 h-3 stroke-[2.5]" />
            <span>Buy</span>
          </button>
        )}

        {/* Outlined Details Button */}
        <Link 
          href={`/tournament/${game.slug}`}
          className="flex items-center justify-center gap-1 bg-[#121420]/60 hover:bg-[#121420] border border-white/5 text-gray-300 hover:text-white text-[10px] font-bold tracking-widest uppercase py-2 rounded transition-all duration-200 no-underline [clip-path:polygon(6px_0,100%_0,100%_100%,0_100%,0_6px)]"
        >
          <FiEye className="w-3 h-3" />
          <span>Details</span>
        </Link>
      </div>

    </div>
  );
}