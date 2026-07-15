// src/components/Games/GameGalleryContainer.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface GameGalleryContainerProps {
  mediaItems: string[];
  gameTitle: string;
  gameStatus?: string;
}

export default function GameGalleryContainer({ mediaItems, gameTitle, gameStatus }: GameGalleryContainerProps) {
  // Sets default frame array coordinate map reference parameters
  const [activeImage, setActiveImage] = useState<string>(mediaItems[0] || "");

  if (mediaItems.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* PRIMARY ACTIVE IMAGE CONTAINER FRAME */}
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#06070c]">
        <Image 
          src={activeImage} 
          alt={`${gameTitle} Main Display`}
          fill
          priority
          sizes="(max-w-768px) 100vw, 700px"
          className="object-cover"
        />
        {gameStatus && (
          <div className="absolute top-4 left-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded backdrop-blur-md z-10">
            STATUS: {gameStatus}
          </div>
        )}
      </div>

      {/* THUMBNAIL TRACK MATRIX */}
      {mediaItems.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {mediaItems.map((img, idx) => (
            <button 
              key={`thumb-${idx}-${img.substring(img.length - 10)}`}
              onClick={() => setActiveImage(img)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer ${
                activeImage === img 
                  ? "border-cyan-500 opacity-100 ring-2 ring-cyan-500/20" 
                  : "border-white/5 opacity-50 hover:opacity-100"
              }`}
            >
              <Image 
                src={img} 
                alt={`${gameTitle} Media Slice ${idx}`} 
                fill
                sizes="(max-w-768px) 25vw, 150px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}