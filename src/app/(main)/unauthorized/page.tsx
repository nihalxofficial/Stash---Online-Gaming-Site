import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft, FiShield } from "react-icons/fi";

export const metadata = {
  title: "CRITICAL: 403 Forbidden | Nexus Arena",
  description: "Access denied by central terminal security protocol",
};

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen w-full bg-[#05060c] flex items-center justify-center p-4 font-mono select-none">
      
      {/* GLITCH PANEL LAYOUT */}
      <div className="w-full max-w-md bg-[#0d0f1a] border border-red-500/20 rounded p-6 text-center relative overflow-hidden shadow-2xl shadow-red-500/5 [clip-path:polygon(24px_0,100%_0,100%_calc(100%-24px),calc(100%-24px)_100%,0_100%,0_24px)]">
        
        {/* TOP DECORATIVE TECH CORNERS */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500/40" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500/40" />

        {/* ALARM SYSTEM FLAG */}
        <div className="mx-auto w-14 h-14 bg-red-500/10 border border-red-500/30 rounded flex items-center justify-center text-red-400 mb-6 animate-pulse shadow-lg shadow-red-500/10">
          <FiShield className="w-6 h-6" />
        </div>

        {/* STATUS ERROR HEADLINES */}
        <h1 className="text-sm font-black tracking-widest text-red-500 uppercase flex items-center justify-center gap-1.5">
          <FiAlertTriangle className="text-red-500" /> SYSTEM STATUS: 403 // FORBIDDEN
        </h1>
        
        <p className="text-xl font-black text-white mt-3 uppercase tracking-tight">
          ACCESS NODE DENIED
        </p>
        
        <p className="text-xs text-gray-500 mt-2 leading-relaxed max-w-xs mx-auto">
          Your current session authorization signature lacks the mandatory clearance level required to interface with this directory pipeline.
        </p>

        {/* METADATA DIAGNOSTICS LOG PANEL */}
        <div className="mt-5 mb-6 p-3 bg-[#05060c] border border-white/5 rounded text-[10px] text-left text-gray-500 space-y-1">
          <div><span className="text-red-500 font-bold">PROTOCOL:</span> SECURE_GATE_KEEPER</div>
          <div><span className="text-gray-400 font-bold">REASON:</span> ROLE_CLEARANCE_MISMATCH</div>
          <div><span className="text-gray-400 font-bold">ACTION:</span> REQUEST_MUTATION_REJECTED</div>
        </div>

        {/* ROUTING BUTTON OVERRIDE */}
        <Link
          href="/dashboard"
          className="w-full h-10 border border-white/10 hover:border-blue-500/40 bg-white/[0.02] hover:bg-blue-500/5 transition-all text-xs font-black tracking-wider text-gray-300 hover:text-white uppercase rounded flex items-center justify-center gap-2 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)] group"
        >
          <FiArrowLeft className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" /> 
          Return to Safe Terminal
        </Link>

      </div>
    </div>
  );
}