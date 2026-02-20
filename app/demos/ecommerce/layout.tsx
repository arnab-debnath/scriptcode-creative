// app/demos/ecommerce/layout.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Tag, Users, BarChart, 
  Settings, Search, Menu, X, Box 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AuraEcommerceLayout({ children }: { children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  
  const navLinks = [
    { name: 'Storefront Overview', icon: BarChart, path: '/demos/ecommerce' },
    { name: 'Orders', icon: ShoppingBag, path: '/demos/ecommerce/orders' }, // <-- UPDATE THIS LINE
    { name: 'Products', icon: Tag, path: '#' },
    { name: 'Customers', icon: Users, path: '#' },
    { name: 'Inventory', icon: Box, path: '#' },
    { name: 'Settings', icon: Settings, path: '#' },
  ];

  return (
    // Stark, minimalist background
    <div className="bg-[#fcfcfc] text-neutral-900 min-h-screen flex overflow-hidden font-sans selection:bg-black selection:text-white">
      
      {/* 1. MOBILE OVERLAY */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 2. SIDEBAR (Minimalist, sharp edges) */}
      <aside className={`
        fixed md:relative z-50 h-full w-64 flex flex-col border-r border-neutral-200 bg-[#fcfcfc] transition-transform duration-300
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="h-20 flex items-center justify-between px-8 border-b border-neutral-200 bg-white">
          <div className="flex items-center">
            {/* Minimalist Logo */}
            <span className="font-black text-2xl tracking-tighter uppercase">AURA.</span>
          </div>
          <button className="md:hidden text-neutral-400 hover:text-black" onClick={() => setIsMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 py-8 px-6 space-y-1 overflow-y-auto">
          <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">Management</p>
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path; 
            
            return (
              <Link key={link.name} href={link.path} className={`flex items-center px-4 py-3 transition-colors ${
                isActive 
                  ? 'bg-black text-white font-medium shadow-md' 
                  : 'text-neutral-500 hover:bg-neutral-100 hover:text-black font-medium'
              }`}>
                <Icon size={18} className="mr-4 stroke-[2px]" />
                <span className="text-sm tracking-wide">
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Store Admin Profile */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition-colors">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider shrink-0">
               AD
            </div>
            <div className="ml-3 truncate">
              <p className="text-xs font-bold uppercase tracking-wider text-black">Admin</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Superuser</p>
            </div>
          </div>
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative bg-[#f4f4f5]">
        
        {/* Top Header */}
        <header className="h-20 border-b border-neutral-200 bg-white flex items-center justify-between px-6 lg:px-10 z-10 w-full shrink-0">
          <div className="flex items-center gap-4 w-full max-w-xl">
            <button onClick={() => setIsMobileOpen(true)} className="md:hidden text-neutral-500 hover:text-black transition">
              <Menu size={24} />
            </button>

            {/* Stark Search Input */}
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
              <input 
                type="text" 
                placeholder="Search orders, customers, or SKUs..." 
                className="w-full bg-neutral-100 border-none rounded-none py-2.5 pl-12 pr-4 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition-all placeholder:text-neutral-500 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
             <Link href="#" className="hidden lg:block text-xs font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4">
                View Storefront ↗
             </Link>
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