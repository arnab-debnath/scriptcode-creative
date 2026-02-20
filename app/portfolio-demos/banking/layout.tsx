// app/demos/banking/layout.tsx
"use client";

import React, { useState } from 'react';
import { 
  ShieldCheck, LogOut, MessageSquare, 
  Building2, CreditCard, ArrowRightLeft, FileText, Menu, X, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ZenithBankLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const mainNav = [
    { name: 'Accounts Overview', path: '/portfolio-demos/banking' },
    { name: 'Wire Transfers & ACH', path: '/portfolio-demos/banking/transfers' },
    { name: 'Commercial Cards', path: '#' },
    { name: 'Statements & Reports', path: '#' },
    { name: 'Administration', path: '#' },
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans selection:bg-blue-900 selection:text-white flex flex-col">
      
      {/* 1. UTILITY BAR (Top most, ultra-secure vibe) */}
      <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center z-20 relative">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck size={14} /> Secure Session
          </span>
          <span className="hidden md:inline border-l border-slate-700 pl-4">
            Last login: Feb 20, 2026 at 08:14 AM IST
          </span>
        </div>
        <div className="flex items-center gap-4 md:gap-6 font-medium">
          <button className="hover:text-white transition-colors flex items-center gap-1.5">
            <MessageSquare size={14} /> Support
          </button>
          <button className="hover:text-white transition-colors flex items-center gap-1.5">
            <LogOut size={14} /> Secure Sign Out
          </button>
        </div>
      </div>

      {/* 2. MAIN HEADER (Branding & Desktop Nav) */}
      <header className="bg-white border-b border-slate-200 z-10 relative shadow-sm">
        <div className="px-4 md:px-8 h-20 flex items-center justify-between">
          
          {/* Bank Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0A192F] text-white flex items-center justify-center rounded-sm">
              <Building2 size={24} />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-[#0A192F] block leading-none">ZENITH</span>
              <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Commercial Banking</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center h-full">
            {mainNav.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`h-full flex items-center px-4 text-sm font-semibold border-b-2 transition-colors ${
                    isActive 
                      ? 'border-[#0A192F] text-[#0A192F]' 
                      : 'border-transparent text-slate-600 hover:text-[#0A192F]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* 3. MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 absolute top-[116px] left-0 w-full z-30 shadow-xl">
          <nav className="flex flex-col">
            {mainNav.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="px-6 py-4 border-b border-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* 4. MAIN CONTENT AREA */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
        {children}
      </main>

    </div>
  );
}