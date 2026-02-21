"use client";

import React from 'react';
import Link from 'next/link';
import { Layers, CreditCard, Repeat, FileText, Smartphone, Globe, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#635BFF]/30 text-[#425466]">

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight leading-tight">
                A fully integrated suite of payments products.
            </h1>
            <p className="text-xl leading-relaxed font-medium">
                We bring together everything that's required to build websites and apps that accept payments and send payouts globally.
            </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            
            {/* Product 1 */}
            <div className="group">
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] text-[#635BFF] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#635BFF] group-hover:text-white transition-colors">
                    <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Payments</h3>
                <p className="text-[#425466] mb-4 leading-relaxed">Online and in-person payment processing for internet businesses.</p>
                <span className="text-[#635BFF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Explore Payments <ArrowRight size={16} />
                </span>
            </div>

            {/* Product 2 */}
            <div className="group">
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] text-[#00D4FF] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#00D4FF] group-hover:text-white transition-colors">
                    <Repeat size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Billing</h3>
                <p className="text-[#425466] mb-4 leading-relaxed">Build and scale your recurring revenue and subscription models.</p>
                <span className="text-[#635BFF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Explore Billing <ArrowRight size={16} />
                </span>
            </div>

            {/* Product 3 */}
            <div className="group">
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] text-[#FF7A59] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#FF7A59] group-hover:text-white transition-colors">
                    <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Connect</h3>
                <p className="text-[#425466] mb-4 leading-relaxed">Payments for software platforms and multi-sided marketplaces.</p>
                <span className="text-[#635BFF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Explore Connect <ArrowRight size={16} />
                </span>
            </div>

            {/* Product 4 */}
            <div className="group">
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] text-[#0A2540] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0A2540] group-hover:text-white transition-colors">
                    <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Invoicing</h3>
                <p className="text-[#425466] mb-4 leading-relaxed">Built-in invoice generation, delivery, and automated payment collection.</p>
                <span className="text-[#635BFF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Explore Invoicing <ArrowRight size={16} />
                </span>
            </div>

            {/* Product 5 */}
            <div className="group">
                <div className="w-12 h-12 rounded-xl bg-[#F6F9FC] text-[#00D4FF] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#00D4FF] group-hover:text-white transition-colors">
                    <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">Terminal</h3>
                <p className="text-[#425466] mb-4 leading-relaxed">Programmable point-of-sale hardware for unified commerce.</p>
                <span className="text-[#635BFF] font-bold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Explore Terminal <ArrowRight size={16} />
                </span>
            </div>
        </div>
      </section>
    </div>
  );
}