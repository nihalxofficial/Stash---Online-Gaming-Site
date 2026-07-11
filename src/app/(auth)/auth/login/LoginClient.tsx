"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

export default function LoginClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  const handleGoogleLogin = () => {
    console.log("Redirecting to Google Auth Protocol...");
  };

  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 select-none overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="w-full max-w-md relative group/card">
        <div 
          className="absolute inset-0 p-[1.5px] shadow-[0_0_50px_rgba(99,102,241,0.1)]"
          style={{ 
            background: "linear-gradient(135deg, #2563eb, #6366f1, #9333ea)",
            clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)" 
          }}
        />

        <div 
          className="w-full bg-[#0d0f1a]/95 backdrop-blur-xl p-8 md:p-10 relative flex flex-col"
          style={{ clipPath: "polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)" }}
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          {/* Header */}
          <div className="flex flex-col items-center text-center mt-2 mb-8">
            <h2 className="text-sm font-black font-mono tracking-[0.2em] uppercase text-indigo-400">
              Access Portal
            </h2>
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Stash Cybernetics Division</p>
          </div>

          {/* Social Auth */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full cursor-pointer flex items-center justify-center gap-3 bg-[#05060c] border border-white/10 hover:border-indigo-500/50 text-gray-300 hover:text-white font-mono text-xs tracking-widest h-12 mb-6 transition-all duration-300 uppercase rounded-lg"
          >
            <FaGoogle className="text-indigo-400" />
            Sign in with Google
          </button>

          {/* Separator */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
            <span className="bg-[#0d0f1a] px-3 text-[10px] text-gray-600 font-mono uppercase tracking-widest">Or Secure Login</span>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[9px] font-mono tracking-widest text-gray-500 uppercase pl-1">Email</label>
              <div className="relative flex items-center bg-[#05060c] border border-white/5 focus-within:border-indigo-500/50 rounded-lg px-4 py-3">
                <FaEnvelope className="text-gray-600 text-xs mr-3" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-transparent text-xs font-mono focus:outline-none text-white" />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center px-1">
                <label className="text-[9px] font-mono tracking-widest text-gray-500 uppercase">Password</label>
                <Link href="#" className="text-[9px] font-mono tracking-wider text-indigo-400 hover:text-white transition-colors">Forgot Password?</Link>
              </div>
              <div className="relative flex items-center bg-[#05060c] border border-white/5 focus-within:border-indigo-500/50 rounded-lg px-4 py-3">
                <FaLock className="text-gray-600 text-xs mr-3" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-transparent text-xs font-mono focus:outline-none text-white" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-600 hover:text-white">
                  {showPassword ? <FaEyeSlash className="text-xs" /> : <FaEye className="text-xs" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              isLoading={isLoading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black font-mono text-xs tracking-widest h-12 mt-4 hover:scale-[1.02] transition-transform"
              style={{ clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}
            >
              {isLoading ? "AUTHENTICATING..." : "INITIALIZE SESSION"}
            </Button>
          </form>

          {/* Footer Registration Link */}
          <div className="mt-8 text-center">
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Not joined yet? {" "}
              <Link href='/auth/register' className="text-indigo-400 hover:text-white font-bold transition-colors">Join now</Link>
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}