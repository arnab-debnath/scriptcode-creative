"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Layers, Menu, X } from 'lucide-react';
import DemoFooterCredit from '@/src/DemoFooterCredit';

export default function FintechLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // A smart helper function to highlight the active link
  const navLinkClass = (path: string) => 
    pathname === path 
      ? "text-[#635BFF] font-bold transition-colors" 
      : "text-[#0A2540] font-medium hover:text-[#635BFF] transition-colors";

  return (
    <div className="relative">
      {/* 1. MASTER NAVBAR */}
      <nav className="absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#635BFF] flex items-center justify-center shadow-lg shadow-[#635BFF]/30">
              <Layers size={18} className="text-white" />
            </div>
            <Link href="/industries-demo/fintech" className="text-xl font-bold tracking-tight text-[#0A2540]">
              NovaTrade
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px]">
            <Link href="/industries-demo/fintech/products" className={navLinkClass("/industries-demo/fintech/products")}>Products</Link>
            <Link href="/industries-demo/fintech/solutions" className={navLinkClass("/industries-demo/fintech/solutions")}>Solutions</Link>
            <Link href="/industries-demo/fintech/developers" className={navLinkClass("/industries-demo/fintech/developers")}>Developers</Link>
            <Link href="/industries-demo/fintech/pricing" className={navLinkClass("/industries-demo/fintech/pricing")}>Pricing</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link href="/portfolio-demos/fintech" className="text-[15px] font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors">
              Sign in
            </Link>
            <button className="px-4 py-1.5 rounded-full bg-[#0A2540] text-white text-[15px] font-bold hover:bg-[#425466] transition-colors shadow-sm">
              Contact Sales
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-[#0A2540]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* 2. MOBILE MENU OVERLAY */}
        <div className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-2xl border-b border-gray-100 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] pb-8" : "max-h-0"}`}>
            <div className="pt-24 px-6 flex flex-col gap-6 text-lg font-medium text-[#0A2540]">
                <Link href="/industries-demo/fintech/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                <Link href="/industries-demo/fintech/solutions" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
                <Link href="/industries-demo/fintech/developers" onClick={() => setIsMobileMenuOpen(false)}>Developers</Link>
                <Link href="/industries-demo/fintech/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                <hr className="border-gray-100" />
                <Link href="/portfolio-demos/fintech" onClick={() => setIsMobileMenuOpen(false)} className="text-[#635BFF] font-bold">
                    Sign in to Dashboard
                </Link>
                <button className="w-full py-3 rounded-full bg-[#0A2540] text-white font-bold">
                    Contact Sales
                </button>
            </div>
        </div>
      </nav>

      {/* 3. PAGE CONTENT GOES HERE */}
      <main>
          {children}
      </main>
      <DemoFooterCredit  brand="main"/>
    </div>
  );
}