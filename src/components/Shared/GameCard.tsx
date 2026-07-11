"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiDownload, FiShoppingCart, FiEye, FiCalendar, FiHardDrive } from "react-icons/fi";

export interface GameData {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  genre: string[];
  rating: number;
  releaseDate: string;
  platform: string[];
  status: "Live" | "Upcoming" | "Alpha" | "Beta";
  price: number;
  size: string;
}

interface GameCardProps {
  game: GameData;
}

export default function GameCard({ game }: GameCardProps) {
  const isFree = game.price === 0;

  return (
    <div className="relative bg-[#0d0f1a]/90 border border-white/5 p-4 flex flex-col h-full shadow-2xl font-mono [clip-path:polygon(24px_0,calc(100%-24px)_0,100%_24px,100%_100%,0_100%,0_24px)] transition-all duration-300 hover:border-indigo-500/30 group">
      
      {/* Premium Linear Horizon Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 group-hover:opacity-100 transition-opacity duration-300 z-30" />

      {/* 1. IMAGE CONTAINER WITH CYBER SLANTS */}
      <div className="relative aspect-[16/10] w-full bg-gray-950 [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%,0_16px)] overflow-hidden">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          sizes="(max-w-7xl) 33vw, 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1a] via-transparent to-black/40 pointer-events-none" />

        {/* Platform Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-black tracking-widest bg-black/70 backdrop-blur-sm border border-white/10 text-indigo-400 px-2.5 py-1 rounded uppercase shadow-md">
            {game.platform[0]}
          </span>
        </div>

        {/* Rating Overlay */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-black/70 backdrop-blur-sm border border-white/10 px-2 py-0.5 rounded text-amber-400 text-xs font-bold shadow-md">
          <FiStar className="fill-amber-400 w-3 h-3" />
          <span>{game.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* 2. META DATA INVENTORY */}
      <div className="pt-5 pb-4 flex flex-col flex-grow items-center text-center">
        {/* Core Title */}
        <h3 className="text-base font-black text-white tracking-wide uppercase px-2 mb-1 truncate w-full group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {game.title}
        </h3>

        {/* Dynamic Pricing Text Accent */}
        <p className={`text-xs tracking-wider font-bold mb-4 ${isFree ? "text-emerald-400 uppercase font-black" : "text-gray-400"}`}>
          {isFree ? "Free to play" : `$${game.price.toFixed(2)}`}
        </p>

        {/* Mini Technical Specification Matrix */}
        <div className="w-full grid grid-cols-2 gap-y-2 gap-x-3 text-left border-t border-white/[0.04] pt-3 text-[11px]">
          {/* Genre Row */}
          <div className="col-span-2 flex items-center gap-1.5 text-gray-400">
            <span className="text-[9px] uppercase tracking-wider font-bold bg-white/[0.03] border border-white/5 px-1.5 py-0.5 rounded text-purple-400 shrink-0">Genre</span>
            <span className="truncate text-gray-300">{game.genre.join(", ")}</span>
          </div>

          {/* Release Date Node */}
          <div className="flex items-center gap-1.5 text-gray-400 min-w-0">
            <FiCalendar className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="truncate text-gray-300">{game.releaseDate}</span>
          </div>

          {/* Footprint Disk Space Node */}
          <div className="flex items-center gap-1.5 text-gray-400 justify-end min-w-0">
            <FiHardDrive className="w-3.5 h-3.5 text-gray-500 shrink-0" />
            <span className="truncate text-gray-300">{game.size}</span>
          </div>
        </div>
      </div>

      {/* 3. DISTINCT ACTION MATRIX */}
      <div className="mt-auto grid grid-cols-2 gap-2 pt-3 border-t border-white/[0.04]">
        {isFree ? (
          /* UNIQUE "GET" DESIGN: Vivid Cyber Emerald */
          <button 
            type="button"
            className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-black text-[11px] font-black tracking-widest uppercase py-2.5 rounded transition-all duration-200 cursor-pointer shadow-lg shadow-emerald-500/10 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
          >
            <FiDownload className="w-3.5 h-3.5 stroke-[3]" />
            <span>Get</span>
          </button>
        ) : (
          /* UNIQUE "BUY" DESIGN: Signature Brand Gradient Mesh */
          <button 
            type="button"
            className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-[11px] font-black tracking-widest uppercase py-2.5 rounded transition-all duration-300 cursor-pointer shadow-lg shadow-indigo-600/10 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
          >
            <FiShoppingCart className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>Buy Now</span>
          </button>
        )}

        {/* Outlined Details Button */}
        <Link 
          href={`/tournament/${game.slug}`}
          className="flex items-center justify-center gap-1.5 bg-[#121420]/60 hover:bg-[#121420] border border-white/5 text-gray-300 hover:text-white text-[11px] font-bold tracking-widest uppercase py-2.5 rounded transition-all duration-200 no-underline [clip-path:polygon(8px_0,100%_0,100%_100%,0_100%,0_8px)]"
        >
          <FiEye className="w-3.5 h-3.5" />
          <span>Details</span>
        </Link>
      </div>

    </div>
  );
}