// app/demos/architecture/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  { 
    id: "01", 
    name: "The Obsidian Spire", 
    location: "Neo-Tokyo", 
    year: "2028", 
    image: "/portfolio/demo/image1.jpg" 
  },
  { 
    id: "02", 
    name: "Aero-Garden Phase III", 
    location: "Singapore", 
    year: "2027", 
    image: "/portfolio/demo/image2.jpg" 
  },
  { 
    id: "03", 
    name: "Quantum Data Center", 
    location: "Reykjavik", 
    year: "2029", 
    image: "/portfolio/demo/image3.jpg" 
  },
];

export default function NeonArchitectPage() {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-12 lg:px-24">
      
      {/* 1. HERO SECTION */}
      {/* Adjusted height for mobile browsers to prevent awkward scrolling */}
      <div className="min-h-[60vh] md:h-[70vh] flex flex-col justify-center relative">
        
        {/* Scaled typography specifically for mobile (text-5xl) up to desktop (text-[10rem]) */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.9] mb-6 relative z-10">
          Shaping <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">Tomorrow</span>
        </h1>
        
        <p className="max-w-md text-xs sm:text-sm md:text-base text-white/60 font-medium leading-relaxed md:ml-24 relative z-10">
          We are an avant-garde architectural studio pushing the boundaries of spatial design, material science, and computational geometry.
        </p>

        {/* Made the 3D element visible on mobile, but smaller and more transparent */}
        <div className="absolute top-1/2 right-0 md:right-24 -translate-y-1/2 w-48 h-48 md:w-96 md:h-96 border border-white/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none opacity-40 md:opacity-100 z-0">
          <div className="absolute inset-0 border border-cyan-500/20 md:border-cyan-500/30 rounded-full scale-110 -rotate-45 blur-[2px]"></div>
          <div className="absolute inset-0 border border-purple-500/20 md:border-purple-500/30 rounded-full scale-90 rotate-45"></div>
        </div>
      </div>

      {/* 2. SELECTED WORKS GRID */}
      <div className="mt-16 md:mt-32">
        
        {/* Changed to flex-col on mobile so the button doesn't squish against the title */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-4 mb-12 md:mb-16 border-b border-white/10 pb-6 md:pb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">Selected Works</h2>
          <button className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors flex items-center gap-2">
            View Archive <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Adjusted vertical gap for mobile so there isn't massive empty space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="w-full aspect-[4/5] bg-neutral-900 relative overflow-hidden mb-4 md:mb-6 border border-white/5">
                
                <Image 
                  src={project.image} 
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                
                {/* Fixed for touch devices: Button is always visible on mobile, but animates on hover for desktop */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                    Explore Project
                  </span>
                </div>
              </div>

              {/* Scaled text slightly for mobile */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1 md:mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                  <p className="text-xs md:text-sm text-white/50 font-medium">{project.location}</p>
                </div>
                <span className="text-lg md:text-xl font-light text-white/30 font-mono">{project.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}