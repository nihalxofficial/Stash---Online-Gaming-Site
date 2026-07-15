/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FiTarget, FiEye, FiCpu, FiShield, FiUsers } from "react-icons/fi";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#08090f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/10 via-[#08090f] to-[#08090f] text-gray-200 font-mono selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-20">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase">
            // Core Identity Manifest
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            The Ultimate Gaming Matrix
          </h1>
          <p className="text-sm font-sans text-gray-400 leading-relaxed">
            We are a high-performance ecosystem engineering the next generation of digital game distribution, sub-millisecond broadcast streaming, and elite decentralized tournament tracking.
          </p>
        </section>

        <hr className="border-white/5" />

        {/* MISSION & VISION GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#0d0f1a]/60 border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-xl relative group hover:border-indigo-500/30 transition-all duration-300 [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-blue-600 to-indigo-500 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <FiTarget className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Our Mission</h3>
            <p className="text-xs font-sans text-gray-400 leading-relaxed">
              To build a seamless, raw-performance pipeline connecting developers, competitive athletes, and spectators. We bypass conventional launcher bloat to serve direct asset deployments and crystal-clear match data instantly.
            </p>
          </div>

          <div className="bg-[#0d0f1a]/60 border border-white/5 p-8 rounded-2xl backdrop-blur-md shadow-xl relative group hover:border-cyan-500/30 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,24px_100%,0_calc(100%-24px))]">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-40 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
              <FiEye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-3">Our Vision</h3>
            <p className="text-xs font-sans text-gray-400 leading-relaxed">
              We envision an interconnected arena where global competitive tournaments run on deterministic server infrastructure, while high-bitrate live streams empower fans with zero-latency match monitoring.
            </p>
          </div>
        </section>

        {/* CORE OPERATIONAL PILLARS */}
        <section className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white uppercase tracking-wide">Operational Pillars</h2>
            <p className="text-xs text-gray-500">// System specifications for our competitive architecture</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#06070c]/50 border border-white/5 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <FiCpu className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Stream Native</h4>
              </div>
              <p className="text-xs font-sans text-gray-400 leading-relaxed">
                Hyper-optimized rendering protocols ensure real-time video matrices stream flawlessly across any hardware setup, making spectator immersion instantaneous.
              </p>
            </div>

            <div className="bg-[#06070c]/50 border border-white/5 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3 text-indigo-400">
                <FiShield className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Anti-Cheat Registry</h4>
              </div>
              <p className="text-xs font-sans text-gray-400 leading-relaxed">
                Absolute validation mechanics. Every live bracket, matchmaking lobby, and tournament event log is securely indexed and protected against tampering.
              </p>
            </div>

            <div className="bg-[#06070c]/50 border border-white/5 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3 text-purple-400">
                <FiUsers className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">Esports Infrastructure</h4>
              </div>
              <p className="text-xs font-sans text-gray-400 leading-relaxed">
                Engineered for teams, casual players, and tournament operators alike. Dynamic leaderboard telemetry scales directly with community interaction.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER CALL TO ACTION */}
        <section className="border border-dashed border-white/10 bg-[#0d0f1a]/20 p-8 rounded-2xl text-center space-y-4 max-w-xl mx-auto">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">Enter the Arena</h3>
          <p className="text-xs font-sans text-gray-500 leading-relaxed">
            Ready to download pristine assets, monitor elite live streams, or spin up your own customized competitive bracket matrices?
          </p>
          <div className="pt-2">
            <button className="px-6 py-2.5 cursor-pointer bg-white text-black hover:bg-cyan-400 hover:text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 [clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]">
              Initialize Connection
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}