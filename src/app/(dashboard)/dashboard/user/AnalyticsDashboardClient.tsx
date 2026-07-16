// src/app/dashboard/user/analytics/AnalyticsDashboardClient.tsx
"use client";

import React from "react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from "recharts";
import { FiTrendingUp, FiTv, FiUsers, FiMessageSquare, FiActivity } from "react-icons/fi";

// --- GAMING STREAM TELEMETRY DATA ---

// 1. Weekly Viewer and Broadcast Telemetry
const streamEngagementData = [
  { day: "Mon", "Peak Viewers": 45, "Avg Viewers": 22 },
  { day: "Tue", "Peak Viewers": 88, "Avg Viewers": 41 },
  { day: "Wed", "Peak Viewers": 60, "Avg Viewers": 35 },
  { day: "Thu", "Peak Viewers": 120, "Avg Viewers": 68 },
  { day: "Fri", "Peak Viewers": 210, "Avg Viewers": 115 },
  { day: "Sat", "Peak Viewers": 340, "Avg Viewers": 198 },
  { day: "Sun", "Peak Viewers": 280, "Avg Viewers": 150 },
];

// 2. Stream Platform Distribution Share
const platformShareData = [
  { name: "Twitch", value: 55, color: "#6366f1" },  // Indigo
  { name: "YouTube Live", value: 30, color: "#3b82f6" }, // Blue
  { name: "Kick", value: 15, color: "#10b981" },    // Emerald
];

// 3. Performance Metrics: Stream Bitrate and Frame Drops per Game Node
const streamStabilityData = [
  { name: "PUBG", "Bitrate (Kbps)": 6000, "Dropped Frames": 12 },
  { name: "AC: Odyssey 2", "Bitrate (Kbps)": 5800, "Dropped Frames": 45 },
  { name: "COD: Warzone", "Bitrate (Kbps)": 6100, "Dropped Frames": 28 },
  { name: "FF XVI", "Bitrate (Kbps)": 6000, "Dropped Frames": 8 },
];

interface ClientDashboardProps {
  user: any;
  stats: {
    totalPlayTime: string;
    bandwidthUsed: string;
    computeRank: string;
    activeSystems: string;
  };
}

export default function AnalyticsDashboardClient({ user }: ClientDashboardProps) {
  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen bg-[#05060c] text-white font-mono selection:bg-indigo-500/30">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.04] pb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-black uppercase tracking-widest flex items-center gap-3">
            <FiTv className="text-indigo-400 animate-pulse" />
            <span>Broadcast Telemetry</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1 max-w-xl leading-relaxed">
            Welcome back, {user?.name || "Broadcaster"}. Monitor stream metrics, concurrent target interactions and live output health configurations.
          </p>
        </div>
      </div>

      {/* 2. LIVE STREAM STATS OVERVIEW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Broadcast Time", val: "18.4 Hrs", change: "+4.2 Hrs vs last week", icon: FiTv },
          { title: "Peak Concurrents", val: "340 Users", change: "Hit during Sat Night Session", icon: FiUsers },
          { title: "Chat Velocity", val: "42 Msg/Min", change: "High audience engagement", icon: FiMessageSquare },
          { title: "Stream Stream Health", val: "99.2% Stable", change: "Avg 6000 Kbps ingest feed", icon: FiActivity },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#0d0f1a]/70 border border-white/5 p-4 rounded-xl shadow-xl relative overflow-hidden group hover:border-indigo-500/30 transition-all [clip-path:polygon(10px_0,100%_0,100%_calc(100%-10px),calc(100%-10px)_100%,0_100%)]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-xl font-black mt-2 tracking-wide group-hover:text-indigo-400 transition-colors">{stat.val}</h3>
              </div>
              <stat.icon className="w-5 h-5 text-gray-600 group-hover:text-indigo-500/50 transition-colors" />
            </div>
            <p className="text-[10px] text-emerald-400/80 mt-3 font-mono border-t border-white/[0.03] pt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* 3. CHARTS GRID SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Audience Metrics Area Chart */}
        <div className="lg:col-span-2 bg-[#0d0f1a]/70 border border-white/5 p-4 sm:p-6 rounded-xl shadow-2xl [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 text-gray-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></span>
            Weekly Viewer Engagement & Spikes
          </h2>
          <div className="w-full h-[300px] text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={streamEngagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPeak" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="day" stroke="#4b5563" tickLine={false} />
                <YAxis stroke="#4b5563" tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#121420", borderColor: "rgba(255,255,255,0.1)", borderRadius: "6px" }}
                  labelStyle={{ color: "#9ca3af", fontWeight: "bold" }}
                />
                <Legend wrapperStyle={{ paddingTop: "10px" }} />
                <Area type="monotone" dataKey="Peak Viewers" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorPeak)" />
                <Area type="monotone" dataKey="Avg Viewers" stroke="#3b82f6" strokeWidth={1.5} fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Share Distribution Pie Chart */}
        <div className="bg-[#0d0f1a]/70 border border-white/5 p-4 sm:p-6 rounded-xl shadow-2xl [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 text-gray-400">
            Platform Restream Traffic Share
          </h2>
          <div className="w-full h-[220px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={platformShareData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {platformShareData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: "#121420", borderColor: "rgba(255,255,255,0.1)" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-2 pt-4 border-t border-white/[0.03]">
            {platformShareData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-[10px] text-gray-400">
                <span className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: item.color }}></span>
                <span className="truncate">{item.name} ({item.value}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ingest Stability Bar Chart (Bitrates vs Framedrops) */}
        <div className="lg:col-span-3 bg-[#0d0f1a]/70 border border-white/5 p-4 sm:p-6 rounded-xl shadow-2xl [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%)]">
          <h2 className="text-xs font-black uppercase tracking-widest mb-6 text-gray-400">
            Game Node Encoding Feed & Dropped Frames Telemetry
          </h2>
          <div className="w-full h-[300px] text-xs font-mono">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={streamStabilityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                <XAxis dataKey="name" stroke="#4b5563" tickLine={false} />
                <YAxis yAxisId="left" stroke="#6366f1" tickLine={false} />
                <YAxis yAxisId="right" orientation="right" stroke="#ef4444" tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#121420", borderColor: "rgba(255,255,255,0.1)", borderRadius: "6px" }}
                  labelStyle={{ color: "#9ca3af", fontWeight: "bold" }}
                />
                <Legend wrapperStyle={{ paddingTop: "15px" }} />
                <Bar yAxisId="left" dataKey="Bitrate (Kbps)" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={24} />
                <Bar yAxisId="right" dataKey="Dropped Frames" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

    </div>
  );
}