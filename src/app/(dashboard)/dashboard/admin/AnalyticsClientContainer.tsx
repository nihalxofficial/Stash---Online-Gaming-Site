"use client";

import React, { useState } from "react";
import { 
  FiTv, FiAward, FiShield, FiUsers, 
  FiActivity, FiZap, FiSliders 
} from "react-icons/fi";
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid 
} from "recharts";
import { TournamentNode, SecurityIncident } from "./page";

interface AnalyticsClientProps {
  initialTournaments: TournamentNode[];
  initialIncidents: SecurityIncident[];
}

export default function AnalyticsClientContainer({ 
  initialTournaments, 
  initialIncidents 
}: AnalyticsClientProps) {
  const [streamMultiplier, setStreamMultiplier] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"ccu" | "packets">("ccu");

  // Telemetry Matrix organized cleanly for Recharts parser configuration
  const staticTimelineData = [
    { timestamp: "12:00", ccu: 34000, packets: 89 },
    { timestamp: "12:10", ccu: 38500, packets: 124 },
    { timestamp: "12:20", ccu: 41200, packets: 156 },
    { timestamp: "12:30", ccu: 45900, packets: 142 },
    { timestamp: "12:40", ccu: 42891, packets: 98 },
  ];

  // Dynamic state recalculation based on simulation sliders
  const processedData = staticTimelineData.map(item => ({
    ...item,
    ccu: Math.round(item.ccu * streamMultiplier),
  }));

  const currentBaseCCU = 42891;
  const computedCCU = Math.round(currentBaseCCU * streamMultiplier);

  return (
    <div className="space-y-8">
      
      {/* PARAMETER CONFIGURATION TUNER */}
      <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <FiSliders className="text-cyan-400 shrink-0 w-4 h-4" />
          <div className="text-xs">
            <span className="text-white font-black block uppercase tracking-wide">Live Stream Load Simulator</span>
            <span className="text-gray-500 text-[10px]">Adjust scale factors to test edge-caching capacities</span>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <input 
            type="range" 
            min="0.5" 
            max="3.0" 
            step="0.1"
            value={streamMultiplier}
            onChange={(e) => setStreamMultiplier(parseFloat(e.target.value))}
            className="w-full md:w-48 accent-cyan-400 bg-black border border-white/10 h-1.5 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs font-mono font-black text-cyan-400 bg-black px-2 py-1 rounded border border-white/10 min-w-[50px] text-center">
            {streamMultiplier}x
          </span>
        </div>
      </div>

      {/* CARD GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
          <div className="flex items-start justify-between">
            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Live Stream Viewers</span>
            <FiTv className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-black text-white">{computedCCU.toLocaleString()}</h2>
            <div className="flex items-center gap-1.5 text-[11px] mt-1">
              <span className="font-bold text-emerald-400">+{Math.round(14.2 * streamMultiplier)}%</span>
              <span className="text-gray-500">scaled metrics feed</span>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] border-t border-white/5 pt-2 font-sans">
            Across all active lobby ingest feeds
          </p>
        </div>

        <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
          <div className="flex items-start justify-between">
            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Active Tournaments</span>
            <FiAward className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-black text-white">{initialTournaments.length}</h2>
            <div className="flex items-center gap-1.5 text-[11px] mt-1">
              <span className="font-bold text-cyan-400">4 Ongoing</span>
              <span className="text-gray-500">double-elimination nodes</span>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] border-t border-white/5 pt-2 font-sans">
            Automated seeding validation active
          </p>
        </div>

        <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
          <div className="flex items-start justify-between">
            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Anti-Cheat Intercepts</span>
            <FiShield className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-black text-white">142</h2>
            <div className="flex items-center gap-1.5 text-[11px] mt-1">
              <span className="font-bold text-emerald-400">-28.4%</span>
              <span className="text-gray-500">vs historical baseline</span>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] border-t border-white/5 pt-2 font-sans">
            Client integrity validation closures
          </p>
        </div>

        <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-5 flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300">
          <div className="flex items-start justify-between">
            <span className="text-gray-500 text-xs uppercase font-bold tracking-wider">Registered Players</span>
            <FiUsers className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="my-4">
            <h2 className="text-2xl font-black text-white">89,402</h2>
            <div className="flex items-center gap-1.5 text-[11px] mt-1">
              <span className="font-bold text-cyan-400">+2.4k today</span>
              <span className="text-gray-500">authenticated profiles</span>
            </div>
          </div>
          <p className="text-gray-400 text-[10px] border-t border-white/5 pt-2 font-sans">
            Cross-platform profile matrices syncing
          </p>
        </div>
      </div>

      {/* RECHARTS BROADCAST MONITOR */}
      <div className="bg-[#0d0f1a] border border-white/10 rounded-xl p-6 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-wide">
            <FiActivity className="text-cyan-400" /> Broadcast Datastream Graphs
          </div>
          
          <div className="flex bg-black border border-white/10 p-1 rounded-lg text-[11px]">
            <button 
              onClick={() => setActiveTab("ccu")}
              className={`px-3 cursor-pointer py-1 rounded font-bold transition-all ${activeTab === "ccu" ? "bg-indigo-600 text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
            >
              Concurrent Viewers
            </button>
            <button 
              onClick={() => setActiveTab("packets")}
              className={`px-3 cursor-pointer py-1 rounded font-bold transition-all ${activeTab === "packets" ? "bg-indigo-600 text-white shadow-sm" : "text-gray-400 hover:text-white"}`}
            >
              Intercept Velocity
            </button>
          </div>
        </div>

        {/* Dynamic Area Chart Canvas */}
        <div className="h-72 w-full pr-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={processedData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="cyberIndigo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="cyberCyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" opacity={0.3} />
              <XAxis 
                dataKey="timestamp" 
                stroke="#4b5563" 
                tick={{ fill: "#9ca3af", fontFamily: "monospace", fontSize: 10 }}
                dy={10}
              />
              <YAxis 
                stroke="#4b5563" 
                tick={{ fill: "#9ca3af", fontFamily: "monospace", fontSize: 10 }}
                dx={-5}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#06070a", 
                  borderColor: "#374151", 
                  borderRadius: "8px",
                  fontFamily: "monospace",
                  fontSize: "12px",
                  color: "#e5e7eb"
                }}
                itemStyle={{ color: "#22d3ee" }}
                labelStyle={{ color: "#9ca3af", fontWeight: "bold" }}
              />
              <Area 
                type="monotone" 
                dataKey={activeTab === "ccu" ? "ccu" : "packets"} 
                stroke={activeTab === "ccu" ? "#6366f1" : "#22d3ee"} 
                strokeWidth={2}
                fillOpacity={1} 
                fill={`url(${activeTab === "ccu" ? "#cyberIndigo" : "#cyberCyan"})`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LOWER MONITORING LOG GRIDS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* COMPACT COMPETITION GRID */}
        <div className="lg:col-span-7 bg-[#0d0f1a] border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-wide border-b border-white/5 pb-3">
              <FiZap className="text-cyan-400" /> Active Competition Matrices
            </div>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-gray-500 font-bold uppercase tracking-wider">
                    <th className="pb-3 font-medium">Lobby Name</th>
                    <th className="pb-3 font-medium">Game</th>
                    <th className="pb-3 font-medium text-center">Lobby Capacity</th>
                    <th className="pb-3 font-medium text-right">Pool</th>
                    <th className="pb-3 font-medium text-right">State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-sans">
                  {initialTournaments.map((item) => (
                    <tr key={item.id} className="group hover:bg-white/[0.01]">
                      <td className="py-3 font-mono font-bold text-white max-w-[180px] truncate">{item.name}</td>
                      <td className="py-3 text-gray-400">{item.game}</td>
                      <td className="py-3 text-center font-mono text-gray-300">{item.entrants}/{item.maxEntrants}</td>
                      <td className="py-3 text-right font-mono text-emerald-400 font-bold">${item.prize.toLocaleString()}</td>
                      <td className="py-3 text-right">
                        <span className={`font-mono text-[10px] font-black px-2 py-0.5 rounded uppercase border tracking-wide ${
                          item.status.includes("Open") 
                            ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                            : "bg-indigo-500/10 text-indigo-400 border-indigo-500/20 animate-pulse"
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* STREAMLINED DISPATCH MONITOR */}
        <div className="lg:col-span-5 bg-[#0d0f1a] border border-white/10 rounded-xl p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-wide border-b border-white/5 pb-3">
              <FiShield className="text-indigo-400" /> Live Threat Intel Feeds
            </div>
            <div className="mt-4 space-y-3">
              {initialIncidents.map((inc) => (
                <div 
                  key={inc.id} 
                  className="flex flex-col gap-1 p-3 rounded-lg border border-white/5 bg-[#07080d] hover:border-red-500/20 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs text-white truncate max-w-[150px]">{inc.player}</span>
                    <span className={`text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded font-mono ${
                      inc.severity === "CRITICAL" ? "bg-red-500/10 text-red-400 border border-red-500/20" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    }`}>
                      {inc.severity}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] font-sans truncate">{inc.action}</p>
                  <div className="flex justify-between text-[9px] text-gray-600 mt-1">
                    <span>{inc.game}</span>
                    <span>{inc.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}