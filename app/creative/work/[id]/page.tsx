"use client";

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  ArrowLeft, Check, Layers, Palette, 
  Smartphone, Monitor, Zap, ArrowRight, Target 
} from 'lucide-react';

// ==========================================
// 1. THE DATA (Expanded Details for Demos)
// ==========================================
const projectData: any = {
  "1": {
    title: "Neon Pulse Energy",
    category: "Web Design",
    tagline: "High-Voltage UI for the Next Gen Gamer.",
    heroImage: "https://images.unsplash.com/photo-1626785774573-4b799314346d?auto=format&fit=crop&q=80&w=1200",
    challenge: "Most energy drink websites look the same: messy, cluttered, and corporate. We wanted to build a digital experience that feels like a video game interface—dark, neon, and fast.",
    solution: "We utilized a 'Cyberpunk' aesthetic with glitched text effects, WebGL fluid backgrounds, and sound-reactive interactions. The tech stack focuses on Next.js for speed and Framer Motion for smooth animations.",
    palette: ["#00FF94", "#FF0055", "#111111"], // Neon Green, Pink, Black
    features: ["3D Can Rotation", "Gamified Checkout", "Dark Mode Default"],
    mockups: [
      "https://images.unsplash.com/photo-1614726365723-49cfae96a604?auto=format&fit=crop&q=80&w=800", // Abstract Neon
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"  // Cyberpunk City
    ]
  },
  "2": {
    title: "Urban Streetwear",
    category: "Branding & Shopify",
    tagline: "Minimalist E-Commerce for Hype Culture.",
    heroImage: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200",
    challenge: "Streetwear brands live or die by their 'cool factor.' A standard Shopify template kills the vibe. The goal was to create a site that feels exclusive and editorial.",
    solution: "We stripped away the clutter. Massive typography, raw photography, and a 'drop-culture' countdown timer. The UX is designed for mobile-first shoppers who buy in seconds.",
    palette: ["#FFFFFF", "#000000", "#808080"], // Black, White, Grey
    features: ["Lookbook Layout", "Stock Countdown", "One-Tap Buy"],
    mockups: [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800", // Fashion
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"  // Store
    ]
  },
  "3": {
    title: "Instagram Growth Strategy",
    category: "Marketing",
    tagline: "From 0 to 10k: The Viral Blueprint.",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
    challenge: "Organic reach is dead—or is it? We tested a hypothesis: Can a brand grow without ads using only Reels and Carousel storytelling?",
    solution: "We developed a 'Hook-Value-CTA' framework. 3-second video hooks combined with saveable carousel data. The result was a 400% increase in non-follower reach.",
    palette: ["#E1306C", "#FCAF45", "#FFFFFF"], // Insta Colors
    features: ["Reels Templates", "Hashtag Stacks", "Engagement Scripts"],
    mockups: [
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&q=80&w=800", // Phone
      "https://images.unsplash.com/photo-1516251193000-18e658485b18?auto=format&fit=crop&q=80&w=800"  // Analytics
    ]
  },
  // Default fallback for other IDs
  "default": {
    title: "Concept Project",
    category: "Design",
    tagline: "Innovation in Digital Experience.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    challenge: "Designing for the future requires breaking current patterns.",
    solution: "We applied our engineering-first mindset to solve complex user experience problems.",
    palette: ["#5865F2", "#000000", "#FFFFFF"],
    features: ["Responsive", "Fast", "Scalable"],
    mockups: []
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const id = params?.id as string;
  const project = projectData[id] || projectData["default"];

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 pb-20 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* 1. BACK BUTTON */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <Link href="/creative/work" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Lab
        </Link>
      </div>

      {/* 2. HERO HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row gap-8 md:items-end justify-between border-b border-white/10 pb-12">
            <div className="max-w-3xl">
                <span className="text-pink-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                    {project.category}
                </span>
                <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
                    {project.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 font-light">
                    {project.tagline}
                </p>
            </div>
            {/* CTA */}
            <Link href="/creative/contact">
                <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors whitespace-nowrap">
                    Start a Project Like This
                </button>
            </Link>
        </div>
      </div>

      {/* 3. HERO IMAGE */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group">
            <img 
                src={project.heroImage} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay Badge */}
            <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Zap size={12} className="text-yellow-400" /> Concept Work
            </div>
        </div>
      </div>

      {/* 4. THE DEEP DIVE (Grid Layout) */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16 mb-24">
        
        {/* Left Column: Challenge & Solution */}
        <div className="lg:col-span-2 space-y-16">
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Target size={24} className="text-red-500" /> The Challenge
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                    {project.challenge}
                </p>
            </div>
            <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Layers size={24} className="text-blue-500" /> The Solution
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                    {project.solution}
                </p>
            </div>
        </div>

        {/* Right Column: Project Specs */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-fit">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/10 pb-4">
                Design System
            </h4>
            
            {/* Color Palette */}
            <div className="mb-8">
                <h5 className="font-bold mb-4 flex items-center gap-2 text-sm"><Palette size={16}/> Color Palette</h5>
                <div className="flex gap-4">
                    {project.palette.map((color: string, idx: number) => (
                        <div key={idx} className="group relative">
                            <div 
                                className="w-12 h-12 rounded-full border border-white/20 shadow-lg cursor-pointer transform hover:scale-110 transition-transform"
                                style={{ backgroundColor: color }}
                            ></div>
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black px-2 py-1 rounded">
                                {color}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Features List */}
            <div>
                <h5 className="font-bold mb-4 flex items-center gap-2 text-sm"><Check size={16}/> Key Features</h5>
                <ul className="space-y-3">
                    {project.features.map((feature: string, idx: number) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-purple-500 mt-1">●</span> {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* 5. VISUAL GALLERY */}
      {project.mockups.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 mb-32">
            <h3 className="text-3xl font-bold mb-12 text-center">Visual Architecture</h3>
            <div className="grid md:grid-cols-2 gap-8">
                {project.mockups.map((img: string, idx: number) => (
                    <div key={idx} className="group rounded-[2rem] overflow-hidden border border-white/10 relative">
                        <img 
                            src={img} 
                            alt={`Mockup ${idx}`} 
                            className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur px-4 py-2 rounded-lg text-xs font-bold border border-white/10">
                            {idx === 0 ? <span className="flex items-center gap-2"><Monitor size={14}/> Desktop View</span> : <span className="flex items-center gap-2"><Smartphone size={14}/> Mobile View</span>}
                        </div>
                    </div>
                ))}
            </div>
          </div>
      )}

      {/* 6. NEXT PROJECT NAV */}
      <div className="border-t border-white/10 pt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Like what you see?</h2>
        <p className="text-gray-400 mb-8">This is just a demo. Imagine what we can do for your real brand.</p>
        <Link href="/creative/contact">
            <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto">
                Get Your Estimate <ArrowRight size={20} />
            </button>
        </Link>
      </div>

    </div>
  );
}