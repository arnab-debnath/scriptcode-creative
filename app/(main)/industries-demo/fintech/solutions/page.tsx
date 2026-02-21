"use client";

import React from 'react';
import Link from 'next/link';
import { Layers, ShoppingBag, Box, Users, ArrowRight } from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="bg-[#F6F9FC] min-h-screen font-sans selection:bg-[#635BFF]/30 text-[#425466] overflow-hidden">
      
      {/* HERO */}
      <section className="pt-40 pb-24 px-6 max-w-7xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-black text-[#0A2540] mb-8 tracking-tight">
          Engineered for <br className="hidden md:block"/> any business model.
        </h1>
        <p className="text-xl leading-relaxed font-medium max-w-2xl mx-auto mb-10">
          Whether you are selling physical goods, digital subscriptions, or building a multi-sided marketplace, we have a solution stack for you.
        </p>
      </section>

      {/* USE CASES */}
      <section className="px-6 max-w-5xl mx-auto pb-32 space-y-24">
        
        {/* eCommerce */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="w-12 h-12 bg-white text-[#635BFF] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <ShoppingBag size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-4">E-commerce</h2>
                <p className="text-lg leading-relaxed mb-6">Unify your online and offline sales. Optimize your checkout experience to increase conversion rates globally, and manage fraud intelligently.</p>
                <button className="text-[#635BFF] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore E-commerce solutions <ArrowRight size={16} />
                </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 h-64 flex flex-col justify-center items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#635BFF]/5 to-transparent"></div>
                <div className="w-full max-w-xs bg-[#F6F9FC] rounded-lg p-4 border border-gray-100 shadow-sm relative z-10">
                    <div className="h-4 w-24 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 w-full bg-white border border-gray-200 rounded flex items-center px-3 mb-2 text-sm text-gray-400">Card number</div>
                    <button className="w-full py-2 bg-[#0A2540] text-white text-sm font-bold rounded">Pay $120.00</button>
                </div>
            </div>
        </div>

        {/* SaaS */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-[#0A2540] p-8 rounded-2xl shadow-xl shadow-[#0A2540]/20 h-64 flex flex-col justify-center items-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4FF]/10 to-transparent"></div>
                 <div className="w-full max-w-xs bg-[#1A365D] rounded-lg p-4 border border-gray-700 shadow-lg relative z-10">
                    <div className="flex justify-between items-center mb-4">
                        <div className="h-4 w-16 bg-gray-600 rounded"></div>
                        <div className="text-emerald-400 text-sm font-bold">Active</div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">$49.00<span className="text-sm text-gray-400 font-normal">/mo</span></div>
                    <div className="h-2 w-full bg-gray-700 rounded-full mt-4 overflow-hidden"><div className="w-3/4 h-full bg-[#00D4FF]"></div></div>
                </div>
            </div>
            <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-white text-[#00D4FF] rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Box size={24} />
                </div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-4">SaaS & Subscriptions</h2>
                <p className="text-lg leading-relaxed mb-6">Manage recurring billing, recover failed payments automatically, and let customers manage their own plans via a secure portal.</p>
                <button className="text-[#635BFF] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Explore SaaS solutions <ArrowRight size={16} />
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}