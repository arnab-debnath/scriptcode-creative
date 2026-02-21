"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X, Search, ShoppingCart, Globe } from 'lucide-react';

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path: string) => 
    pathname === path 
      ? "text-blue-600 font-bold transition-colors" 
      : "text-[#1C1D1F] font-normal hover:text-blue-600 transition-colors";

  return (
    <div className="bg-white min-h-screen text-[#1C1D1F] font-sans">
      {/* 1. MASTER NAVBAR (Crisp, White, E-commerce style) */}
      <nav className="absolute top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-50">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-blue-600">
              <GraduationCap size={28} strokeWidth={2.5} />
            </div>
            <Link href="/industries-demo/education" className="text-xl font-bold tracking-tight text-[#1C1D1F] font-serif">
              EduFuture
            </Link>
          </div>

          {/* Search Bar (Very Udemy) */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
            </div>
            <input 
                type="text" 
                placeholder="Search for anything" 
                className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-900 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/industries-demo/education/catalog" className={navLinkClass("/industries-demo/education/catalog")}>Categories</Link>
            <Link href="/industries-demo/education/enterprise" className={navLinkClass("/industries-demo/education/enterprise")}>EduFuture Business</Link>
            <Link href="/industries-demo/education/pricing" className={navLinkClass("/industries-demo/education/pricing")}>Pricing</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 ml-6">
            <button className="text-[#1C1D1F] hover:text-blue-600 transition-colors">
                <ShoppingCart size={20} />
            </button>
            <div className="h-6 w-px bg-gray-300 mx-1"></div>
            <Link href="/portfolio-demos/education" className="px-4 py-2 text-sm font-bold text-[#1C1D1F] border border-gray-900 hover:bg-gray-50 transition-colors">
              Log in
            </Link>
            <button className="px-4 py-2 text-sm font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors">
              Sign up
            </button>
            <button className="border border-gray-900 p-2 hover:bg-gray-50 transition-colors">
                <Globe size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="md:hidden text-[#1C1D1F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 2. MOBILE MENU OVERLAY */}
        <div className={`md:hidden absolute top-0 left-0 w-full bg-white shadow-xl border-b border-gray-200 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[600px] pb-6" : "max-h-0"}`}>
            <div className="pt-20 px-6 flex flex-col gap-4 text-base text-[#1C1D1F]">
                <Link href="/portfolio-demos/education" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-bold">Log in</Link>
                <Link href="/portfolio-demos/education" onClick={() => setIsMobileMenuOpen(false)} className="font-bold">Sign up</Link>
                <hr className="border-gray-200 my-2" />
                <Link href="/industries-demo/education/catalog" onClick={() => setIsMobileMenuOpen(false)}>Categories</Link>
                <Link href="/industries-demo/education/enterprise" onClick={() => setIsMobileMenuOpen(false)}>EduFuture Business</Link>
                <Link href="/industries-demo/education/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            </div>
        </div>
      </nav>

      <main className="pt-16">
          {children}
      </main>
    </div>
  );
}