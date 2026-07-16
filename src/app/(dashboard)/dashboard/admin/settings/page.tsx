// src/app/admin/settings/page.tsx
import React from "react";
import { 
  FiTerminal, FiSliders, FiShield, FiTv, 
  FiDatabase, FiLayers, FiLock, FiGlobe, FiAlertTriangle 
} from "react-icons/fi";

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-[#06070a] text-gray-200 p-4 md:p-8 font-mono tracking-tight">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER BLOCK */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-indigo-500/20 pb-6 relative">
          <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-cyan-400"></div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest font-black">
              <FiTerminal className="w-3.5 h-3.5" /> Core Config Node
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              SYSTEM SETTINGS
            </h1>
          </div>
          <div className="text-xs text-gray-500 font-mono bg-[#0d0f1a] border border-white/10 px-4 py-2 rounded-md shadow-inner">
            ACCESS LEVEL: <span className="text-red-400 font-black">ROOT_ADMIN</span>
          </div>
        </div>

        {/* SETTINGS PANELS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* SIDEBAR NAVIGATION INDEX */}
          <div className="md:col-span-1 space-y-2">
            <div className="bg-[#0d0f1a] border border-indigo-500/30 text-cyan-400 text-xs font-black p-3 rounded-lg flex items-center gap-2.5 cursor-pointer shadow-md shadow-indigo-950/20">
              <FiSliders /> Platform Variables
            </div>
            <div className="bg-[#0d0f1a]/40 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 text-xs font-bold p-3 rounded-lg flex items-center gap-2.5 cursor-pointer transition-all">
              <FiTv /> Ingest & Broadcast Pipelines
            </div>
            <div className="bg-[#0d0f1a]/40 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 text-xs font-bold p-3 rounded-lg flex items-center gap-2.5 cursor-pointer transition-all">
              <FiShield /> Anti-Cheat Kernels
            </div>
            <div className="bg-[#0d0f1a]/40 border border-white/5 text-gray-400 hover:text-white hover:border-white/10 text-xs font-bold p-3 rounded-lg flex items-center gap-2.5 cursor-pointer transition-all">
              <FiDatabase /> Ledger Storage Matrix
            </div>
          </div>

          {/* CONFIGURATION PARAMETERS FORM */}
          <div className="md:col-span-2 space-y-6">
            
            {/* SECTION 1: MATCHMAKING & LEAGUES */}
            <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-6 space-y-4">
              <h2 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2">
                <FiLayers className="text-cyan-400" /> Tournament Operations
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 text-[10px] uppercase font-black tracking-wide block">Default Bracket Format</label>
                  <select className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-indigo-500" defaultValue="double">
                    <option value="single">Single Elimination Matrix</option>
                    <option value="double">Double Elimination Cascade</option>
                    <option value="swiss">Swiss System Round-Robin</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-500 text-[10px] uppercase font-black tracking-wide block">Max Lobby Capacity</label>
                  <input type="number" className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-indigo-500 font-mono" defaultValue={256} />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="auto-seed" className="w-3.5 h-3.5 accent-indigo-500 bg-black border border-white/10 rounded" defaultChecked />
                <label htmlFor="auto-seed" className="text-gray-400 text-xs font-sans select-none">
                  Automate player placement queries via real-time MMR indices.
                </label>
              </div>
            </div>

            {/* SECTION 2: STREAMING CONFIGS */}
            <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-6 space-y-4">
              <h2 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2">
                <FiTv className="text-indigo-400" /> Live Stream Parameters
              </h2>
              
              <div className="space-y-1.5">
                <label className="text-gray-500 text-[10px] uppercase font-black tracking-wide block">Primary RTMP Ingest Core</label>
                <div className="flex bg-black border border-white/10 rounded overflow-hidden">
                  <span className="bg-white/5 text-gray-500 px-3 py-2 text-xs border-r border-white/10 select-none flex items-center"><FiGlobe /></span>
                  <input type="text" className="w-full bg-transparent px-3 py-2 text-xs text-gray-400 focus:outline-none font-mono" value="rtmp://live.platform.internal/esports-ingest" readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 text-[10px] uppercase font-black tracking-wide block">Stream Buffer Delay</label>
                  <select className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-indigo-500" defaultValue="ultra">
                    <option value="zero">0s (Pure Sync Mode)</option>
                    <option value="ultra">2s (Ultra-Low Latency)</option>
                    <option value="standard">15s (Standard Delay Caching)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-gray-500 text-[10px] uppercase font-black tracking-wide block">Drop Reward Sync</label>
                  <select className="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-gray-300 focus:outline-none focus:border-indigo-500" defaultValue="active">
                    <option value="active">Active (WebSocket Broadcast)</option>
                    <option value="disabled">Disabled (Static Buffers Only)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* SECTION 3: SYSTEM RISK AND ANTI-CHEAT SECURITY */}
            <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-6 space-y-4">
              <h2 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2 border-b border-white/5 pb-2">
                <FiShield className="text-red-400" /> Security Safeguards
              </h2>
              
              <div className="flex items-start gap-3 p-3 bg-red-950/10 border border-red-900/20 rounded-lg text-xs text-gray-400 font-sans">
                <FiAlertTriangle className="text-red-400 w-5 h-5 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-mono font-black block uppercase text-[11px] mb-0.5">Strict client hardware enforcement</span>
                  Enabling these filters drops connections from unverified game installations instantly.
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between bg-black border border-white/5 p-2.5 rounded">
                  <div className="text-xs">
                    <span className="text-white font-bold block">Kernel-Level Validation</span>
                    <span className="text-gray-500 text-[10px] font-sans">Block packet injectors before team matchmaking initializes</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                </div>

                <div className="flex items-center justify-between bg-black border border-white/5 p-2.5 rounded">
                  <div className="text-xs">
                    <span className="text-white font-bold block">Hardware Signature Matching</span>
                    <span className="text-gray-500 text-[10px] font-sans">Verify client motherboard hashes against malicious lists</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
                </div>
              </div>
            </div>

            {/* CONSOLE CONTROL ACTIONS */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button type="button" className="text-xs cursor-pointer text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded font-bold transition-all">
                Reset Node
              </button>
              <button type="button" className="text-xs cursor-pointer font-black text-black bg-cyan-400 hover:bg-cyan-300 border border-cyan-400 px-5 py-2 rounded transition-all flex items-center gap-2 shadow-lg shadow-cyan-950/20">
                <FiLock className="w-3 h-3" /> Commit Changes
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}