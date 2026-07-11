"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "@heroui/react";
import { NavLinkItem } from "@/types";

const navLinks: NavLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Tournament", href: "/tournament" },
  { label: "Pages", href: "/pages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function RepositoryNavbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ==========================================
           MAIN NAVBAR CONTAINER WITH CYBER PANEL BACKGROUND
           ========================================== */}
      <header className="w-full bg-[#05060c] border-b border-gray-900 relative z-50">
        
        {/* Subtle Tech Grid / Scanline Mesh Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        {/* Premium Linear Blue/Purple Top Horizon Accent Line */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-[0_1px_10px_rgba(99,102,241,0.5)]" />

        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20 bg-[#0d0f1a]/80 backdrop-blur-md rounded-xl overflow-hidden border border-white/5 shadow-2xl">
            
            {/* LOGO BLOCK (Slanted Right with Cyber Pulse Glow) */}
            <div 
              className="h-full flex items-center pl-6 pr-14 md:pl-8 md:pr-20 bg-[#121420] border-r border-gray-800/60 shadow-xl shrink-0 group relative cursor-pointer"
              style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0% 100%)" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:via-indigo-600/10 group-hover:to-purple-600/10 transition-all duration-500 pointer-events-none" />
              
              <Link href="/" className="font-sans tracking-wider uppercase select-none relative z-10">
                <span className="text-xl md:text-2xl font-black text-white font-mono tracking-widest transition-transform duration-300 inline-block group-hover:-translate-y-[1px]">ST</span>
                <span className="text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-mono tracking-widest transition-all duration-300 inline-block group-hover:scale-105 filter group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">ASH</span>
              </Link>
            </div>

            {/* DESKTOP CONTENT & RIGHT MENU BLOCK (Slanted Left) */}
            <div 
              className="flex-1 h-full bg-[#090b14]/90 flex items-center justify-between pl-8 pr-6 md:px-12 border-l border-gray-800/40 relative"
              style={{ clipPath: "polygon(2% 0, 100% 0, 100% 100%, 0% 100%)" }}
            >
              {/* Desktop Link Routing Navigation */}
              <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-xs font-bold font-mono tracking-widest">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs font-bold font-mono tracking-widest uppercase relative py-2 transition-colors duration-300 group ${
                        isActive 
                          ? "text-indigo-400 font-black" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      
                      {/* Animated Sliding Underline Effect */}
                      <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 origin-left ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`} />
                    </Link>
                  );
                })}
              </nav>

              {/* UTILITY ACTION ITEMS CONTROLS */}
              <div className="ml-auto flex items-center space-x-4 md:space-x-6">
                
                {/* Search Trigger with Pop & Spin Hover */}
                <button aria-label="Search Vault" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 cursor-pointer py-2 hover:scale-110 transform">
                  <svg className="w-4 h-4 transition-transform duration-300 hover:rotate-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>

                {/* Flat Text Login Button with Underline Fade */}
                <Link 
                  href="/login" 
                  className="text-xs font-bold font-mono tracking-widest uppercase text-gray-300 hover:text-white transition-all duration-300 hidden sm:inline-flex relative py-1 group"
                >
                  <span>Login</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </Link>

                {/* Direct Cyber Link Element (3D Shimmer, Glow & Skew Pop Hover) */}
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center bg-transparent border border-indigo-500/80 text-indigo-400 hover:text-white transition-all duration-300 text-[11px] font-bold font-mono tracking-widest px-4 md:px-5 h-9 min-w-0 relative overflow-hidden group/btn shadow-[0_0_15px_rgba(99,102,241,0)] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                  style={{ clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)" }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500 transform -translate-x-full slope-clip group-hover/btn:translate-x-0 ease-out z-0" />
                  <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform skew-x-12 transition-all duration-1000 group-hover/btn:left-[200%]" />
                  <span className="relative z-10 transition-transform duration-300 group-hover/btn:scale-105">JOIN NOW</span>
                </Link>

                {/* Mobile Hamburger Drawer Trigger */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer"
                  aria-label="Toggle Navigation Drawer"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>

              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ==========================================
           MOBILE FULL-SCREEN REPOSITORY OVERLAY DRAWER
           ========================================== */}
      <div className={`fixed inset-0 bg-[#05060c]/98 z-50 lg:hidden flex flex-col transition-all duration-300 transform ${
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      }`}>
        <div className="flex items-center justify-between p-6 border-b border-gray-900">
          <span className="text-xl font-black text-white font-mono tracking-widest">
            ST<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ASH</span>
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 space-y-6 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold font-mono tracking-widest uppercase transition-colors duration-200 ${
                  isActive ? "text-indigo-400 font-black" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="w-full px-12 pt-8 flex flex-col items-center gap-4 border-t border-gray-900/60">
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold font-mono tracking-widest uppercase text-gray-300 py-2 hover:text-white transition-colors"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}