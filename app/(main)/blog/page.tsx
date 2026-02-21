"use client";

import React, { useState } from 'react';
import { Search, FileText, Clock, Tag, ArrowRight } from 'lucide-react';
import PremiumCTA from '@/src/component/PremiumCTA';
import Link from 'next/link';
import Image from 'next/image';

// Import your articles data
import { articles } from '../../../src/data/articles';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter logic for articles
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-sm font-bold mb-6">
            <FileText size={16} />
            <span>ScriptCode Innovation</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
            Insights & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-600">
                Engineering
            </span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Deep dives into custom software architecture, digital marketing ROI, and scaling your business in 2026.
        </p>

        {/* SEARCH BAR */}
        <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center bg-[#0B1215] border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                <Search className="text-gray-500 mr-4" size={20} />
                <input 
                    type="text" 
                    placeholder="Search articles, topics, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent w-full focus:outline-none text-white placeholder-gray-600"
                />
            </div>
        </div>
      </section>

      {/* 2. ARTICLE GRID */}
      <section className="max-w-7xl mx-auto min-h-[500px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                    <article key={article.id} className="group bg-[#0B1215] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:translate-y-[-5px] flex flex-col h-full">
                        
                        {/* Image Section */}
                        <div className="h-56 w-full relative overflow-hidden bg-black shrink-0">
                            <Image 
                                src={article.image} 
                                alt={article.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1215] via-transparent to-transparent opacity-80"></div>
                        </div>

                        {/* Text Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                <span className="flex items-center gap-1 text-cyan-400 font-bold bg-cyan-900/20 px-2 py-1 rounded">
                                    <Tag size={12} /> {article.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {article.readTime}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-purple-400 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                                {article.excerpt}
                            </p>
                            
                            {/* Link to Dynamic Route */}
                            <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-cyan-400 hover:gap-3 transition-all mt-auto pt-4 border-t border-white/5">
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))
            ) : (
                <div className="col-span-full py-20 text-center text-gray-500 text-lg">
                    No articles found matching "{searchQuery}".
                </div>
            )}
        </div>
      </section>
      <PremiumCTA />
    </div>
  );
}