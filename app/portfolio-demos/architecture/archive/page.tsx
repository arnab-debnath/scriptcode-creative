// app/demos/architecture/archive/page.tsx
"use client";

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// --- ARCHITECTURAL PROJECT DATA ---
const archiveData = [
  { id: "PRJ-089", name: "The Obsidian Spire", category: "Commercial", location: "Neo-Tokyo, JP", year: "2028", status: "In Progress" },
  { id: "PRJ-088", name: "Aero-Garden Phase III", category: "Public Space", location: "Singapore, SG", year: "2027", status: "Completed" },
  { id: "PRJ-087", name: "Quantum Data Center", category: "Infrastructure", location: "Reykjavik, IS", year: "2029", status: "Concept" },
  { id: "PRJ-086", name: "Luminescent Hub", category: "Commercial", location: "Seoul, KR", year: "2026", status: "Completed" },
  { id: "PRJ-085", name: "Vertex Residential", category: "Residential", location: "New York, US", year: "2025", status: "Completed" },
  { id: "PRJ-084", name: "Echo Pavilion", category: "Public Space", location: "London, UK", year: "2024", status: "Completed" },
  { id: "PRJ-083", name: "Stellar Observatory", category: "Infrastructure", location: "Atacama, CL", year: "2026", status: "In Progress" },
];

export default function ArchitectureArchivePage() {
  const [filterCategory, setFilterCategory] = useState("All");

  // Filter Logic
  const filteredProjects = archiveData.filter(project => 
    filterCategory === "All" || project.category === filterCategory
  );

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      
      {/* 1. HEADER & FILTERS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Project Archive</h1>
          <p className="text-white/50 text-sm max-w-md font-mono">
            A comprehensive index of spatial experiments, completed structures, and theoretical frameworks from 2024–Present.
          </p>
        </div>

        {/* Minimalist Tab Filters */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-white/20 pb-2 w-full md:w-auto">
          {["All", "Commercial", "Public Space", "Residential", "Infrastructure"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-widest pb-2 transition-all relative ${
                filterCategory === cat ? 'text-cyan-400' : 'text-white/50 hover:text-white'
              }`}
            >
              {cat}
              {filterCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 translate-y-[3px]"></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 2. ARCHIVE LIST (Minimalist Rows) */}
      <div className="flex flex-col border-t border-white/10">
        
        {/* Desktop Header Row */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <div className="col-span-2">ID / Year</div>
          <div className="col-span-4">Project Title</div>
          <div className="col-span-3">Location</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-1 text-right">Status</div>
        </div>

        {/* Interactive Data Rows */}
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 py-6 md:py-8 border-b border-white/10 hover:border-cyan-400/50 transition-colors cursor-pointer items-center relative"
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

              <div className="col-span-1 md:col-span-2 flex justify-between md:block relative z-10">
                <span className="text-xs font-mono text-white/50 group-hover:text-cyan-400 transition-colors">{project.id}</span>
                <span className="text-xs font-mono text-white/30 md:hidden">{project.year}</span>
              </div>
              
              <div className="col-span-1 md:col-span-4 flex items-center justify-between md:justify-start gap-4 relative z-10">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.name}
                </h3>
                {/* Arrow only shows on mobile */}
                <ArrowRight size={16} className="md:hidden text-white/30 group-hover:text-cyan-400 transition-colors" />
              </div>
              
              <div className="col-span-1 md:col-span-3 text-sm text-white/60 hidden md:block relative z-10">
                {project.location}
              </div>
              
              <div className="col-span-1 md:col-span-2 hidden md:block relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 border border-white/10 px-2 py-1 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-colors">
                  {project.category}
                </span>
              </div>
              
              <div className="col-span-1 md:col-span-1 text-right hidden md:block relative z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-auto mr-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-24 text-center text-white/30 text-sm uppercase tracking-widest">
            No projects found in this category.
          </div>
        )}
      </div>

    </div>
  );
}