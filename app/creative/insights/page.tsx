"use client";

import React from 'react';
import Link from 'next/link';
import { creativeArticles } from '@/src/data/CreativeInsights';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';

export default function CreativeInsights() {
  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="text-center mb-16 max-w-3xl mx-auto">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold mb-6 uppercase">
            <Sparkles size={14} /> Creative Insights
         </div>
         <h1 className="text-5xl md:text-7xl font-black mb-6">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">& Strategy</span>
         </h1>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {creativeArticles.map((article) => (
          <Link 
            key={article.id} 
            href={`/creative/insights/${article.slug}`} 
            className="group block bg-[#0B0B1A] border border-white/10 rounded-[2rem] p-8 hover:border-pink-500/30 transition-all"
          >
            {/* IMAGE AREA COMMENTED OUT
            <div className="h-48 relative mb-6 rounded-xl overflow-hidden">
                <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div> 
            */}
            
            <span className="text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-3 block">
              {article.category}
            </span>
            <h3 className="text-xl font-bold mb-4 group-hover:text-pink-400 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 line-clamp-2">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500 mt-auto">
              <Clock size={12} /> {article.readTime} • {article.date}
            </div>
           
          </Link>
        ))}
      </div>
    </div>
  );
}