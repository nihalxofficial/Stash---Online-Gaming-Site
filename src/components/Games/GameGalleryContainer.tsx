// src/components/Games/GameGalleryContainer.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface GameGalleryContainerProps {
  mediaItems: string[];
  gameTitle: string;
  gameStatus?: string;
}

export default function GameGalleryContainer({ mediaItems, gameTitle, gameStatus }: GameGalleryContainerProps) {
  // Filter out invalid/empty strings to prevent broken images from entering the matrix array
  const validMedia = mediaItems.filter(item => typeof item === 'string' && item.trim() !== "");
  
  const [activeImage, setActiveImage] = useState<string>(validMedia[0] || "");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Sync active image if mediaItems changes asynchronously during Hydration
  useEffect(() => {
    if (validMedia.length > 0 && !validMedia.includes(activeImage)) {
      setActiveImage(validMedia[0]);
    }
  }, [mediaItems, validMedia, activeImage]);

  if (validMedia.length === 0) return null;

  // Lightbox Navigation Functions
  const openLightbox = (imgUrl: string) => {
    const idx = validMedia.indexOf(imgUrl);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setIsLightboxOpen(true);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? validMedia.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === validMedia.length - 1 ? 0 : prev + 1));
  };

  // Keyboard Navigation Support
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, lightboxIndex]);

  return (
    <div className="space-y-4 font-mono">
      {/* PRIMARY ACTIVE IMAGE CONTAINER FRAME */}
      <div 
        onClick={() => openLightbox(activeImage)}
        className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-[#06070c] cursor-zoom-in group select-none"
      >
        <Image 
          src={activeImage} 
          alt={`${gameTitle} Main Display`}
          fill
          priority
          unoptimized={activeImage.endsWith('.webp') || activeImage.includes('ibb.co')} // Dynamic unoptimized fallback flag for raw formatting structures
          sizes="(max-w-768px) 100vw, 700px"
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
        />
        
        {/* HIGH-CONTRAST NEON STATUS BADGE */}
        {gameStatus && (
          <div className="absolute top-4 left-4 z-10 select-none overflow-hidden rounded-md border border-emerald-500/40 bg-[#08090f]/95 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-xl shadow-black/80 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Status: {gameStatus}</span>
          </div>
        )}
      </div>

      {/* THUMBNAIL TRACK MATRIX */}
      {validMedia.length > 1 && (
        <div className="grid grid-cols-4 gap-2.5">
          {validMedia.map((img, idx) => (
            <button 
              key={`thumb-${idx}-${img.slice(-15)}`}
              onClick={() => setActiveImage(img)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all cursor-pointer bg-[#06070c] ${
                activeImage === img 
                  ? "border-cyan-500 opacity-100 ring-2 ring-cyan-500/20" 
                  : "border-white/5 opacity-50 hover:opacity-100"
              }`}
            >
              <Image 
                src={img} 
                alt={`${gameTitle} Media Slice ${idx}`} 
                fill
                unoptimized={img.endsWith('.webp') || img.includes('ibb.co')}
                sizes="(max-w-768px) 25vw, 150px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* LIGHTBOX FULLSCREEN INTERACTIVE CAROUSEL MODAL */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Trigger */}
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-xl transition-all border border-white/5 z-50 active:scale-95"
            onClick={() => setIsLightboxOpen(false)}
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Left Arrow */}
          <button 
            className="absolute cursor-pointer left-4 md:left-8 text-white bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-all active:scale-95 disabled:opacity-20 z-40"
            onClick={handlePrev}
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          {/* Core Target Showcase Workspace Wrapper */}
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#06070c]"
            onClick={(e) => e.stopPropagation()} // Halts window layer close triggers
          >
            <Image 
              src={validMedia[lightboxIndex]}
              alt={`${gameTitle} Lightbox Frame ${lightboxIndex}`}
              fill
              unoptimized={validMedia[lightboxIndex].endsWith('.webp') || validMedia[lightboxIndex].includes('ibb.co')}
              className="object-contain"
              sizes="100vw"
            />
          </div>

          {/* Right Arrow */}
          <button 
            className="absolute cursor-pointer  right-4 md:right-8 text-white bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/5 transition-all active:scale-95 disabled:opacity-20 z-40"
            onClick={handleNext}
          >
            <FiChevronRight className="w-6 h-6" />
          </button>

          {/* Index Layout Matrix Counter Counterweight */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 border border-white/10 px-4 py-1.5 rounded-full text-xs text-gray-400 font-bold select-none tracking-widest uppercase">
            Frame {lightboxIndex + 1} / {validMedia.length}
          </div>
        </div>
      )}
    </div>
  );
}