"use client";

import React, { useState } from "react";
import { FiPlus, FiLayers, FiImage, FiInfo, FiDollarSign } from "react-icons/fi";

export default function AddGameForm() {
  const [secondaryImages, setSecondaryImages] = useState<string[]>([""]);

  // Dynamic field handlers for extra gallery nodes
  const addImageField = () => setSecondaryImages([...secondaryImages, ""]);
  const removeImageField = (index: number) => {
    const updated = secondaryImages.filter((_, i) => i !== index);
    setSecondaryImages(updated.length ? updated : [""]);
  };
  const handleImageChange = (index: number, value: string) => {
    const updated = [...secondaryImages];
    updated[index] = value;
    setSecondaryImages(updated);
  };

  // UNIFIED DATA HANDLER
  const handleAddGameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    // Convert native input elements using Object entries parsing
    const rawData = Object.fromEntries(formData.entries());

    const finalizedGamePayload = {
      id: `g_${Date.now().toString().slice(-2)}`, // Simulated schema ID generator
      title: rawData.title,
      slug: (rawData.title as string)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, ""),
      thumbnail: rawData.thumbnail,
      description: rawData.description,
      // Array parser mapping
      genre: (rawData.genre as string).split(",").map(i => i.trim()).filter(Boolean),
      platform: (rawData.platform as string).split(",").map(i => i.trim()).filter(Boolean),
      rating: parseFloat(rawData.rating as string) || 0,
      releaseDate: rawData.releaseDate,
      status: rawData.status,
      price: parseFloat(rawData.price as string) || 0,
      size: rawData.size ? `${rawData.size} GB` : "0 GB",
      // Secondary image schema payload extraction
      secondaryImages: secondaryImages.map(url => url.trim()).filter(Boolean)
    };

    console.log("=== COMBINED MATRIX PROTOCOL DATA ===");
    console.log(finalizedGamePayload);
    alert("Terminal Sync Complete: Check browser logs for unified JSON object data.");
  };

  return (
    <form onSubmit={handleAddGameSubmit} className="space-y-5 animate-fadeIn">
      
      {/* ROW 1: PRIMARY DATA NODES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase flex items-center gap-1">
            <FiLayers className="text-blue-400" /> Game Title
          </label>
          <input
            required
            type="text"
            name="title"
            placeholder="e.g. Valorant"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-blue-500/40 rounded [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase flex items-center gap-1">
            <FiImage className="text-purple-400" /> Primary Thumbnail URL
          </label>
          <input
            required
            type="url"
            name="thumbnail"
            placeholder="https://images.unsplash.com/..."
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-purple-500/40 rounded [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          />
        </div>
      </div>

      {/* ROW 2: MATRIX ARRAYS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">
            Genre Matrix <span className="text-gray-600">(Comma separated)</span>
          </label>
          <input
            required
            type="text"
            name="genre"
            placeholder="FPS, Tactical, Action"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-blue-500/40 rounded [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">
            Supported Platforms <span className="text-gray-600">(Comma separated)</span>
          </label>
          <input
            required
            type="text"
            name="platform"
            placeholder="PC, PS5, Xbox"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-purple-500/40 rounded [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          />
        </div>
      </div>

      {/* ROW 3: SPEC MATRIX CHIPS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">Rating</label>
          <input
            required
            type="number"
            step="0.1"
            max="5"
            min="0"
            name="rating"
            placeholder="4.5"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-indigo-500/40 rounded"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">Release Node</label>
          <input
            required
            type="month"
            name="releaseDate"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 px-3 focus:outline-none focus:border-indigo-500/40 rounded uppercase text-left"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">Deployment State</label>
          <select
            name="status"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-300 px-2 focus:outline-none focus:border-indigo-500/40 rounded"
          >
            <option value="Live">Live</option>
            <option value="Beta">Beta Stage</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase block">Storage Footprint (GB)</label>
          <input
            required
            type="number"
            name="size"
            placeholder="45"
            className="w-full h-10 bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-indigo-500/40 rounded"
          />
        </div>
      </div>

      {/* PRICING SCHEMATIC PANEL */}
      <div className="w-full bg-[#0d0f1a]/50 p-4 border border-white/5 rounded relative overflow-hidden">
        <div className="max-w-xs space-y-1.5 relative z-10">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase flex items-center gap-1">
            <FiDollarSign className="text-blue-400" /> Token Cost / Price
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-3 text-xs text-gray-600 font-bold">$</span>
            <input
              required
              type="number"
              name="price"
              placeholder="0 (Free to Play)"
              className="w-full h-9 bg-[#05060c] border border-white/5 text-xs text-gray-200 placeholder-gray-700 pl-7 pr-3 focus:outline-none focus:border-blue-500/40 rounded"
            />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 translate-y-3 translate-x-3 text-[#05060c] font-black text-6xl pointer-events-none select-none z-0">
          PRC_0
        </div>
      </div>

      {/* DYNAMIC SECONDARY IMAGE MATRIX */}
      <div className="p-4 border border-white/5 bg-[#0d0f1a]/20 rounded space-y-3">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase flex items-center gap-1.5">
            <FiImage className="text-blue-400" /> Secondary Image Gallery Node Array
          </label>
          <button
            type="button"
            onClick={addImageField}
            className="text-[9px] bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 px-2 py-1 rounded flex items-center gap-1 cursor-pointer transition-all uppercase"
          >
            <FiPlus /> Add Asset Row
          </button>
        </div>

        <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
          {secondaryImages.map((url, idx) => (
            <div key={idx} className="flex items-center gap-2 template-fadeIn">
              <input
                type="url"
                value={url}
                placeholder={`https://images.unsplash.com/gallery-item-${idx + 1}...`}
                onChange={(e) => handleImageChange(idx, e.target.value)}
                className="flex-1 h-9 bg-[#05060c] border border-white/5 text-xs text-gray-200 placeholder-gray-700 px-3 focus:outline-none focus:border-indigo-500/40 rounded"
              />
              <button
                type="button"
                onClick={() => removeImageField(idx)}
                className="px-2.5 h-9 text-xs text-red-400 hover:bg-red-500/5 rounded border border-transparent hover:border-red-500/10 transition-colors cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* TEXT AREA COMPONENT */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-black text-gray-400 tracking-wider uppercase flex items-center gap-1">
          <FiInfo className="text-purple-400" /> Brief Structural Log Description
        </label>
        <textarea
          required
          name="description"
          rows={4}
          placeholder="Provide explicit game overview notes here..."
          className="w-full bg-[#0d0f1a] border border-white/5 text-xs text-gray-200 placeholder-gray-700 p-3 focus:outline-none focus:border-blue-500/40 rounded"
        />
      </div>

      {/* SUBMIT BUTTON WITH GRADIENT ACCENT */}
      <button
        type="submit"
        className="w-full h-11 cursor-pointer bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 hover:opacity-90 font-black text-xs text-white uppercase tracking-widest shadow-xl transition-all duration-300 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] flex items-center justify-center gap-2"
      >
        <FiPlus className="w-4 h-4" /> Deploy Game Node Protocol
      </button>

    </form>
  );
}