// app/demos/healthcare/layout.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  HeartPulse, Calendar, Video, 
  ClipboardList, MessageSquare, Bell, Search, Menu, X 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function VitalityHealthLayout({ children }: { children: React.ReactNode }) {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);


  const navLinks = [
    { name: 'Patient Dashboard', icon: HeartPulse, path: '/portfolio-demos/healthcare' },
    { name: 'Appointments', icon: Calendar, path: '#' },
    { name: 'Video Consult', icon: Video, path: '#' },
    { name: 'Medical Records', icon: ClipboardList, path: '/portfolio-demos/healthcare/records' }, // <-- UPDATE THIS LINE
    { name: 'Secure Messages', icon: MessageSquare, path: '#' },
  ];
  return (
    // Notice the subtle off-white background: bg-slate-50
    <div className="bg-slate-50 text-slate-800 min-h-screen flex overflow-hidden font-sans selection:bg-blue-100">
      
      {/* 1. MOBILE OVERLAY BACKDROP */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 2. SIDEBAR (Pristine White, Crisp Borders) */}
      <aside className={`
        fixed md:relative z-50 h-full flex flex-col border-r border-slate-200 bg-white transition-all duration-300 shadow-[4px_0_24px_rgba(0,0,0,0.02)]
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        ${isDesktopExpanded ? 'w-64' : 'w-20'}
      `}>
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-100">
          <div className="flex items-center">
            {/* Premium Logo Mark */}
            <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3 flex items-center justify-center shadow-md shadow-blue-600/20 flex-shrink-0">
              <HeartPulse size={18} className="text-white" />
            </div>
            {isDesktopExpanded && <span className="font-bold text-xl tracking-tight text-slate-900 md:block">Vitality<span className="text-blue-600 font-black">Health</span></span>}
          </div>
          <button className="md:hidden text-slate-400 hover:text-slate-600" onClick={() => setIsMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path; 
            
            return (
              <Link key={link.name} href={link.path} className={`flex items-center px-3 py-3 rounded-xl transition-all font-medium ${
                isActive 
                  ? 'bg-blue-50 text-blue-700 shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}>
                <Icon size={20} className={isDesktopExpanded ? 'mr-3' : 'mx-auto'} />
                <span className={`text-sm ${!isDesktopExpanded ? 'hidden md:hidden' : 'block'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Doctor Profile Mini */}
        {/* Doctor Profile Mini (No External Images) */}
        <div className="p-4 border-t border-slate-100 flex items-center bg-slate-50/50">
          <div className="w-10 h-10 rounded-full bg-blue-600 border border-white shadow-sm flex items-center justify-center flex-shrink-0 text-white font-bold text-sm tracking-wider">
             AS
          </div>
          {isDesktopExpanded && (
            <div className="ml-3 truncate">
              <p className="text-sm font-bold text-slate-900">Dr. A. Sharma</p>
              <p className="text-xs text-slate-500">Chief Cardiologist</p>
            </div>
          )}
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-4 md:px-6 lg:px-10 z-10 w-full">
          <div className="flex items-center gap-4 w-full max-w-xl">
            
            <button onClick={() => setIsMobileOpen(true)} className="md:hidden text-slate-400 hover:text-slate-600 transition">
              <Menu size={24} />
            </button>

            <button onClick={() => setIsDesktopExpanded(!isDesktopExpanded)} className="hidden md:block text-slate-400 hover:text-slate-600 transition">
              <Menu size={24} />
            </button>

            {/* Premium Search Input */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search patient records, IDs, or appointments..." 
                className="w-full bg-slate-100/50 border border-slate-200 rounded-full py-2.5 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-5">
             <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                HIPAA Compliant
             </div>
            <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-full transition relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="flex-1 overflow-y-auto scroll-smooth">
          {children}
        </div>
      </main>
    </div>
  );
}