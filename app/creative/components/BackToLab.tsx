"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function BackToLab() {
  return (
    <div className="fixed bottom-8 left-8 z-[100] group">
      <Link href="/creative/work">
        <div className="flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/20 p-2 pr-6 rounded-full shadow-2xl hover:border-purple-500/50 transition-all duration-300">
          
          {/* THE GRADIENT ICON CIRCLE - Matches your Work Page Header */}
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
            <ArrowLeft size={18} />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
              Exit Demo
            </span>
            {/* GRADIENT TEXT - Matches the "Your Potential" text from Work Page */}
            <span className="text-sm font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 uppercase tracking-tighter leading-none">
              Back to Lab
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}