/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FiMail, FiMapPin, FiTerminal, FiGlobe, FiSend } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08090f] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-950/10 via-[#08090f] to-[#08090f] text-gray-200 font-mono selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        
        {/* HEADER SECTION */}
        <section className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="text-xs text-indigo-400 font-bold tracking-widest uppercase">
            // Establish Comms Link
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Connect to the Hub
          </h1>
          <p className="text-sm font-sans text-gray-400 leading-relaxed">
            Encountered a glitch in the streaming matrix? Want to sponsor an official tournament bracket, or deploy your new title onto our grid? Ping our terminals directly.
          </p>
        </section>

        <hr className="border-white/5" />

        {/* CORE INTERACTION GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* TERMINAL METADATA (LEFT SIDE) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#06070c]/50 border border-white/5 p-6 rounded-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FiTerminal className="text-cyan-400" /> System Endpoints
              </h3>

              <div className="space-y-4 text-xs">
                {/* Endpoint 1 */}
                <div className="flex items-start gap-4 p-3 bg-[#0d0f1a]/40 border border-white/[0.02] rounded-lg">
                  <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-md shrink-0">
                    <FiMail className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-gray-500 font-bold uppercase tracking-tight">General Operations</div>
                    <div className="text-white font-sans truncate hover:text-cyan-400 transition-colors cursor-pointer">
                      contact@stash.net
                    </div>
                  </div>
                </div>

                {/* Endpoint 2 */}
                <div className="flex items-start gap-4 p-3 bg-[#0d0f1a]/40 border border-white/[0.02] rounded-lg">
                  <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-md shrink-0">
                    <FiGlobe className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-gray-500 font-bold uppercase tracking-tight">Tournament & Media</div>
                    <div className="text-white font-sans truncate hover:text-cyan-400 transition-colors cursor-pointer">
                      arena@gaminghub.net
                    </div>
                  </div>
                </div>

                {/* Endpoint 3 */}
                <div className="flex items-start gap-4 p-3 bg-[#0d0f1a]/40 border border-white/[0.02] rounded-lg">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-md shrink-0">
                    <FiMapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <div className="text-gray-500 font-bold uppercase tracking-tight">Physical Node</div>
                    <div className="text-gray-400 font-sans leading-relaxed">
                      Grid Sector 7, Suite 404<br />Tech District, Cyber City
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RESPONSE EXPECTATION MATRIX */}
            <div className="border border-dashed border-white/10 p-5 rounded-xl text-center md:text-left bg-[#0d0f1a]/10">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Telemetry Metrics</h4>
              <p className="text-[11px] font-sans text-gray-500 leading-normal">
                Standard processing delay: <span className="text-emerald-400 font-mono">&lt; 12 Hours</span>.<br />
                Critical transmission routes are continuously audited by live platform moderators.
              </p>
            </div>
          </div>

          {/* TRANSMISSION FORM (RIGHT SIDE) */}
          <div className="lg:col-span-7 bg-[#0d0f1a]/60 border border-white/5 p-6 md:p-8 rounded-2xl backdrop-blur-md shadow-xl relative group hover:border-indigo-500/20 transition-all duration-300 [clip-path:polygon(0_0,calc(100%-24px)_0,100%_24px,100%_100%,24px_100%,0_calc(100%-24px))]">
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 opacity-40 group-hover:opacity-100 transition-opacity" />
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Input 1 */}
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                    Identity Call Sign
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., PLAYER_01"
                    className="w-full bg-[#06070c]/80 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-sans transition-colors placeholder:text-gray-700"
                  />
                </div>

                {/* Input 2 */}
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                    Comms Address (Email)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., user@domain.com"
                    className="w-full bg-[#06070c]/80 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-sans transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                  Transmission Routing Topic
                </label>
                <select className="w-full bg-[#06070c]/80 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 transition-colors uppercase font-bold tracking-wide">
                  <option value="streaming">Stream Matrix Outage / Glitch</option>
                  <option value="tournament">Tournament Bracket Setup</option>
                  <option value="licensing">Game Distribution & Uploads</option>
                  <option value="business">Corporate / Sponsorship Protocol</option>
                </select>
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                  Encrypted Payload (Message)
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Input packet payload detail here..."
                  className="w-full bg-[#06070c]/80 border border-white/10 rounded px-4 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500 font-sans transition-colors placeholder:text-gray-700 resize-none leading-relaxed"
                />
              </div>

              {/* Action Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 cursor-pointer bg-white text-black hover:bg-cyan-400 hover:text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 [clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]"
                >
                  <FiSend className="w-3.5 h-3.5" />
                  <span>Transmit Payload</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}