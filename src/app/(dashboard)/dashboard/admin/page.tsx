// src/app/admin/analytics/page.tsx
import React from "react";
import { FiTerminal } from "react-icons/fi";
import AnalyticsClientContainer from "./AnalyticsClientContainer";

export interface TournamentNode {
  id: string;
  name: string;
  game: string;
  entrants: number;
  maxEntrants: number;
  prize: number;
  status: "Grand Finals" | "Semifinals" | "Register Open";
}

export interface SecurityIncident {
  id: string;
  game: string;
  player: string;
  action: string;
  time: string;
  severity: "CRITICAL" | "WARNING";
}

// Simulated static data payload from database
const INGESTED_TOURNAMENTS: TournamentNode[] = [
  { id: "t-1", name: "Cyber-Glow Invitational 2026", game: "Apex Legends", entrants: 128, maxEntrants: 128, prize: 5000, status: "Grand Finals" },
  { id: "t-2", name: "Championship Challenger Circuit", game: "Valorant", entrants: 64, maxEntrants: 64, prize: 2500, status: "Semifinals" },
  { id: "t-3", name: "Underscore Open League", game: "Rocket League", entrants: 48, maxEntrants: 128, prize: 1200, status: "Register Open" }
];

const SECURITY_INCIDENTS: SecurityIncident[] = [
  { id: "inc-1", game: "Valorant Pro-Am", player: "Xenon_Striker", action: "Hardware Hash Mismatch", time: "2 min ago", severity: "CRITICAL" },
  { id: "inc-2", game: "Apex Custom Masters", player: "Ghost_Trigger", action: "Packet Injection Blocked", time: "8 min ago", severity: "CRITICAL" },
  { id: "inc-3", game: "CS2 Wingman Cup", player: "SmurfRadar", action: "Lobby Seeding Manipulation", time: "14 min ago", severity: "WARNING" }
];

export default async function AdminAnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#06070a] text-gray-200 p-4 md:p-8 font-mono tracking-tight">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TELEMETRY HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-indigo-500/20 pb-6 relative">
          <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-cyan-400"></div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase tracking-widest font-black">
              <FiTerminal className="w-3.5 h-3.5 animate-pulse" /> TELEMETRY INTERFACE V2
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">
              PLATFORM METRICS
            </h1>
          </div>
          <div className="text-xs font-mono bg-[#0d0f1a] border border-white/10 px-4 py-2 rounded-md shadow-inner flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            SYSTEM NODE: <span className="text-cyan-400 font-black">ACTIVE</span>
          </div>
        </div>

        {/* INTERACTIVE CLIENT CONTAINER MOUNT */}
        <AnalyticsClientContainer
          initialTournaments={INGESTED_TOURNAMENTS}
          initialIncidents={SECURITY_INCIDENTS}
        />

      </div>
    </div>
  );
}