"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FiSearch, 
  FiBell, 
  FiChevronDown, 
  FiUser, 
  FiSettings, 
  FiLogOut, 
  FiActivity 
} from "react-icons/fi";

// DYNAMIC MENU SCHEMATICS
interface NavigationOption {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentClass: string;
}

const profileMenuOptions: NavigationOption[] = [
  {
    label: "My Operator Profile",
    href: "/dashboard/profile",
    icon: FiUser,
    accentClass: "group-hover:text-blue-400",
  },
  {
    label: "Activity Logs",
    href: "/dashboard/activity",
    icon: FiActivity,
    accentClass: "group-hover:text-indigo-400",
  },
  {
    label: "Configurations",
    href: "/dashboard/settings",
    icon: FiSettings,
    accentClass: "group-hover:text-purple-400",
  },
];

export default function DashboardNavbar() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="w-full h-16 bg-[#0d0f1a]/90 backdrop-blur-md border-b border-white/5 fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 font-mono select-none">
      <div className="w-full h-full flex items-center justify-between">
        
        {/* LEFT PROFILE: BRAND LOGO */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-linear-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-sm tracking-tighter">NX</span>
            </div>
            <span className="hidden sm:block text-sm font-black text-white uppercase tracking-widest bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
              Nexus_Arena
            </span>
          </Link>
        </div>

        {/* MIDDLE PROFILE: THE SEARCH CONTROLLER */}
        <div className="hidden md:flex items-center max-w-sm w-full relative mx-4">
          <div className="absolute left-3 text-gray-500 pointer-events-none">
            <FiSearch className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search matching rooms, logs, tokens..."
            className="w-full h-9 bg-[#05060c] border border-white/5 text-xs text-gray-300 placeholder-gray-600 pl-10 pr-4 focus:outline-none focus:border-blue-500/40 rounded transition-colors [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]"
          />
        </div>

        {/* RIGHT PROFILE: USER UTILITIES MATRIX */}
        <div className="flex items-center gap-3">
          
          {/* Mobile Search Trigger Icon */}
          <button type="button" className="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
            <FiSearch className="w-4 h-4" />
          </button>

          {/* 1. NOTIFICATIONS WRAPPER */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className={`p-2 cursor-pointer text-gray-400 hover:text-blue-400 hover:bg-[#05060c] border border-transparent rounded transition-all relative ${showNotifications ? 'bg-[#05060c] text-blue-400 border-white/5' : ''}`}
            >
              <FiBell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 ring-2 ring-[#0d0f1a] animate-pulse" />
            </button>

            {/* Notifications Menu Window */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 bg-[#0d0f1a] border border-white/5 rounded shadow-2xl p-2 z-50 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)]">
                <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between mb-1">
                  <span className="text-[10px] font-black text-gray-400 tracking-wider uppercase">LOG EVENTS</span>
                  <span className="text-[9px] text-blue-400 cursor-pointer hover:underline">Clear all</span>
                </div>
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                  <div className="p-2.5 hover:bg-[#05060c] rounded group transition-colors cursor-pointer">
                    <p className="text-xs text-gray-300 line-clamp-1 group-hover:text-white">Match deployment complete</p>
                    <span className="text-[9px] text-gray-500 font-bold block mt-0.5">2 MINS AGO</span>
                  </div>
                  <div className="p-2.5 hover:bg-[#05060c] rounded group transition-colors cursor-pointer">
                    <p className="text-xs text-gray-300 line-clamp-1 group-hover:text-white">New challenger entry in Group Delta</p>
                    <span className="text-[9px] text-gray-500 font-bold block mt-0.5">15 MINS AGO</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Separation Spacer Divider */}
          <div className="w-[1px] h-6 bg-white/5 mx-1" />

          {/* 2. USER PROFILE DROPDOWN CONTAINER */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className={`flex cursor-pointer items-center gap-2 p-1.5 pl-2 rounded border bg-[#05060c] hover:border-white/10 transition-all ${showProfileMenu ? 'border-white/10' : 'border-white/5'}`}
            >
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center rounded text-[10px] font-black text-blue-400 tracking-tighter">
                NU
              </div>
              <span className="hidden sm:block text-xs font-bold text-gray-300 tracking-wide max-w-[80px] truncate">
                Nihal_Dev
              </span>
              <FiChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${showProfileMenu ? 'rotate-180 text-white' : ''}`} />
            </button>

            {/* Profile Dropdown Items Window */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-52 bg-[#0d0f1a] border border-white/5 rounded shadow-2xl p-1 z-50 [clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)]">
                
                <div className="px-3 py-2 border-b border-white/5 mb-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Access Node</p>
                  <p className="text-xs text-white font-black tracking-wide truncate">Nihal Uddin</p>
                </div>

                {/* DYNAMIC MAP RUNNER */}
                {profileMenuOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <Link 
                      key={option.href}
                      href={option.href} 
                      onClick={() => setShowProfileMenu(false)} 
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-[#05060c] rounded transition-colors group"
                    >
                      <Icon className={`w-3.5 h-3.5 text-gray-500 transition-colors ${option.accentClass}`} />
                      <span>{option.label}</span>
                    </Link>
                  );
                })}

                <div className="h-[1px] bg-white/5 my-1" />

                <button
                  type="button"
                  onClick={() => console.log("Kill current session authorization.")}
                  className="w-full cursor-pointer flex items-center gap-2.5 px-3 py-2 text-xs text-red-400 hover:text-red-300 hover:bg-red-500/5 rounded transition-colors group text-left"
                >
                  <FiLogOut className="w-3.5 h-3.5 text-red-500/70 group-hover:text-red-400" />
                  <span>Secure Signout //</span>
                </button>

              </div>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}