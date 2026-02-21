"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartPulse, Menu, X, ShieldCheck } from 'lucide-react';

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path: string) => 
    pathname === path 
      ? "text-blue-600 font-semibold transition-colors" 
      : "text-slate-600 font-medium hover:text-blue-600 transition-colors";

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-blue-200">
      {/* 1. MASTER NAVBAR */}
      <nav className="absolute top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        
        {/* Top utility bar (Classic Healthcare UI pattern) */}
        <div className="bg-slate-900 text-white text-xs py-2 px-6 flex justify-between items-center hidden md:flex">
            <div className="max-w-7xl mx-auto w-full flex justify-between">
                <span className="flex items-center gap-1.5 font-medium"><ShieldCheck size={14} className="text-blue-400" /> HIPAA Compliant & SOC2 Certified</span>
                <span className="font-medium">24/7 Support: 1-800-MEDIX-CARE</span>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-600/20">
              <HeartPulse size={24} className="text-white" />
            </div>
            <Link href="/industries-demo/healthcare" className="text-2xl font-bold tracking-tight text-slate-900">
              Medix
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <Link href="/industries-demo/healthcare/patients" className={navLinkClass("/industries-demo/healthcare/patients")}>For Patients</Link>
            <Link href="/industries-demo/healthcare/providers" className={navLinkClass("/industries-demo/healthcare/providers")}>For Providers</Link>
            <Link href="/industries-demo/healthcare/security" className={navLinkClass("/industries-demo/healthcare/security")}>Security & Trust</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/portfolio-demos/healthcare" className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              Provider Login
            </Link>
            <button className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-[15px] font-semibold hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
              Book Consultation
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 2. MOBILE MENU OVERLAY */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-b border-slate-200 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[600px] pb-8" : "max-h-0"}`}>
            <div className="pt-8 px-6 flex flex-col gap-6 text-lg font-semibold text-slate-900 text-center">
                <Link href="/industries-demo/healthcare/patients" onClick={() => setIsMobileMenuOpen(false)}>For Patients</Link>
                <Link href="/industries-demo/healthcare/providers" onClick={() => setIsMobileMenuOpen(false)}>For Providers</Link>
                <Link href="/industries-demo/healthcare/security" onClick={() => setIsMobileMenuOpen(false)}>Security & Trust</Link>
                <hr className="border-slate-100 my-2" />
                <Link href="/portfolio-demos/healthcare" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600">
                    Provider Login
                </Link>
                <button className="w-full py-4 rounded-full bg-blue-600 text-white font-semibold shadow-md mt-2">
                    Book Consultation
                </button>
            </div>
        </div>
      </nav>

      <main>
          {children}
      </main>
    </div>
  );
}