"use client";

import React, { useState, useEffect } from 'react';
import { 
  Activity, LineChart, Zap, 
  Wallet, Settings, Bell, Search, Menu, X 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NovaTradeLayout({ children }: { children: React.ReactNode }) {
  // We now have two states: one for desktop collapsing, one for mobile sliding
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Automatically close the mobile menu when a user clicks a link and the route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Live Terminal', icon: Activity, path: '/portfolio-demos/fintech' },
    { name: 'Ledger', icon: LineChart, path: '/portfolio-demos/fintech/ledger' },
    { name: 'AI Insights', icon: Zap, path: '#' },
    { name: 'Wallets', icon: Wallet, path: '#' },
    { name: 'Settings', icon: Settings, path: '#' },
  ];

  return (
    <div className="bg-[#020617] text-slate-300 min-h-screen flex overflow-hidden font-sans">
      
      {/* 1. MOBILE OVERLAY BACKDROP */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 2. SIDEBAR (Responsive) */}
      <aside className={`
        fixed md:relative z-50 h-full flex flex-col border-r border-slate-800 bg-[#0f172a] transition-all duration-300
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isDesktopExpanded ? 'w-64' : 'w-20'}
      `}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-800">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg mr-3 shadow-[0_0_15px_rgba(34,211,238,0.4)] flex-shrink-0"></div>
            {isDesktopExpanded && <span className="font-black text-xl tracking-tight text-white md:block">NovaTrade <span className="text-cyan-400">AI</span></span>}
          </div>
          {/* Mobile Close Button */}
          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path; // Dynamic active state!
            
            return (
              <Link key={link.name} href={link.path} className={`flex items-center px-3 py-3 rounded-xl transition-all ${
                isActive 
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]' 
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`}>
                <Icon size={20} className={isDesktopExpanded ? 'mr-3' : 'mx-auto'} />
                {/* Hide text if desktop is collapsed, but always show on mobile */}
                <span className={`font-medium text-sm ${!isDesktopExpanded ? 'hidden md:hidden' : 'block'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 lg:px-10 z-10 w-full">
          <div className="flex items-center gap-4 w-full max-w-xl">
            
            {/* Mobile Hamburger Button */}
            <button 
              onClick={() => setIsMobileOpen(true)} 
              className="md:hidden text-slate-400 hover:text-white transition"
            >
              <Menu size={24} />
            </button>

            {/* Desktop Collapse Button */}
            <button 
              onClick={() => setIsDesktopExpanded(!isDesktopExpanded)} 
              className="hidden md:block text-slate-400 hover:text-white transition"
            >
              <Menu size={24} />
            </button>

            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="text" 
                placeholder="Search assets, symbols, or wallets..." 
                className="w-full bg-[#0f172a] border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <button className="p-2 hover:bg-white/5 rounded-full transition relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border border-white/20"></div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
}