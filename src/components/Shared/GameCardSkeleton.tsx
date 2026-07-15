// src/components/Shared/GameCardSkeleton.tsx
import React from "react";

export default function GameCardSkeleton() {
  return (
    <div className="relative bg-[#0d0f1a]/60 border border-white/5 p-3 flex flex-col h-full shadow-2xl font-mono [clip-path:polygon(16px_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%,0_24px)] animate-pulse">
      
      {/* Top Accent Placeholder */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/5" />

      {/* 1. IMAGE CONTAINER AREA SKELETON */}
      <div className="relative aspect-[16/9] w-full bg-white/[0.03] border border-white/5 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%,0_12px)] overflow-hidden">
        {/* Top Left Badge Placeholder */}
        <div className="absolute top-2 left-2 w-12 h-4 bg-white/[0.05] rounded" />
        {/* Top Right Rating Placeholder */}
        <div className="absolute top-2 right-2 w-10 h-4 bg-white/[0.05] rounded" />
      </div>

      {/* 2. TITLE & META INFO AREA SKELETON */}
      <div className="pt-3 pb-2 flex flex-col flex-grow items-center text-center space-y-2 w-full">
        {/* Title Placeholder */}
        <div className="h-4 w-3/4 bg-white/[0.07] rounded" />
        
        {/* Price Tag Placeholder */}
        <div className="h-3 w-1/3 bg-white/[0.04] rounded" />

        {/* Specs Matrix Row Divider Line */}
        <div className="w-full flex items-center justify-between border-t border-white/[0.04] pt-2">
          {/* Left Spec (Genre Name) */}
          <div className="h-3 w-16 bg-white/[0.05] rounded" />
          {/* Right Specs (Size • Year) */}
          <div className="h-3 w-20 bg-white/[0.04] rounded" />
        </div>
      </div>

      {/* 3. LOWER BUTTON BLOCK ACTION MATRIX */}
      <div className="mt-auto grid grid-cols-2 gap-1.5 pt-2 border-t border-white/[0.04]">
        {/* Left Action Button Block */}
        <div className="h-8 bg-white/[0.06] rounded [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]" />
        {/* Right Action Button Block */}
        <div className="h-8 bg-white/[0.04] rounded [clip-path:polygon(6px_0,100%_0,100%_100%,0_100%,0_6px)]" />
      </div>

    </div>
  );
}