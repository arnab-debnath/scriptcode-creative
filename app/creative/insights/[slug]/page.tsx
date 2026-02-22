"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { creativeArticles } from '@/src/data/CreativeInsights';



export default function CreativeArticleDetail() {
  const params = useParams();
  const slug = params?.slug as string;

  const article = creativeArticles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="bg-[#050511] text-white min-h-screen pt-40 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">404: Article Not Found</h1>
        <p className="text-gray-400">The URL slug found was: <span className="text-pink-500 font-mono">"{slug}"</span></p>
        <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Available Slugs in TS File:</p>
            {creativeArticles.map(a => (
                <code key={a.id} className="block text-blue-400">{a.slug}</code>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 flex flex-col">
      <div className="max-w-4xl mx-auto px-6 flex-grow pb-20">
        <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">{article.title}</h1>
            <div className="flex gap-4 text-gray-500 text-sm font-bold uppercase tracking-widest">
                <span className="text-pink-500">{article.category}</span>
                <span>•</span>
                <span>{article.readTime}</span>
            </div>
        </header>
        <div className="prose prose-invert prose-pink max-w-none text-gray-300 text-lg leading-relaxed border-t border-white/10 pt-12">
            {article.excerpt}
        </div>
        <div className="prose prose-invert prose-pink max-w-none text-gray-300 text-lg leading-relaxed border-t border-white/10 pt-12">
            {article.content}
        </div>
      </div>
      
      
    </div>
  );
}