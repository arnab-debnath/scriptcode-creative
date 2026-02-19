// src/app/portfolio/page.tsx
"use client";

import React, { useState } from 'react';
import { projects } from "../../../src/data/portfolio";
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Categories
const categories = ["All", "Web Dev", "App Dev", "Branding", "Marketing"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-[#010506] text-white min-h-screen overflow-x-hidden">
      
      {/* 1. HEADER SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center z-10">
        <h1 className="text-6xl md:text-8xl font-black mb-6 uppercase tracking-tighter">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Works</span>
        </h1>
        
        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
            {categories.map((cat) => (
            <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white"
                }`}
            >
                {cat}
            </button>
            ))}
        </div>
      </section>

      {/* 2. SKEWED PORTFOLIO LIST */}
      <section className=" flex flex-col gap-0"> {/* Gap is 0 because margin handles the spacing */}
        
        {filteredProjects.map((project, index) => (
          
          <Link key={project.id}
                href={project.link || "#"} 
                target={project.link ? "_blank" : "_self"}
                rel="nooopenr noreferrer"
                
                className="block group relative w-full"
            >
            
            {/* THE SKEWED CONTAINER (Creates the diagonal cut) */}
            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden transform -skew-y-3 border-y border-white/10 my-[-1px]">
              
              {/* THE UNSKEWED CONTENT (Fixes the image/text perspective) */}
              <div className="absolute inset-0 w-full h-full transform skew-y-3 scale-110 origin-center">
                  
                  {/* BACKGROUND IMAGE */}
                  <div className="absolute inset-0 w-full h-full bg-[#060b10]">
                     {/* Use your real images here. 
                        Added 'group-hover:scale-110' for the zoom effect you asked for.
                     */}
                     <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
                        style={{ backgroundColor: '#0B1215' }} // Fallback color if image missing
                     />
                     
                     {/* Dark Gradient Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent group-hover:opacity-80 transition duration-500"></div>
                  </div>

                  {/* TEXT CONTENT (Centered & Straight) */}
                  <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-center items-start z-10 pointer-events-none">
                      
                      {/* Project Index (e.g., 01, 02) */}
                      <span className="text-6xl md:text-8xl font-black text-white/5 absolute right-6 md:right-20 top-1/2 -translate-y-1/2 group-hover:text-yellow-400/20 transition duration-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="text-cyan-400  text-sm font-bold uppercase tracking-[0.2em] mb-4 ml-6 pl-2 border-l-2 border-cyan-500">
                        {project.category}
                      </span>
                      
                      <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 transform translate-x-0 pl-6 group-hover:translate-x-4 group-hover:text-yellow-400 transition duration-500">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-400 max-w-xl text-lg mb-8 pl-6 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-3 pl-6">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-mono text-gray-300">
                                {tech}
                            </span>
                        ))}
                      </div>

                      {/* "View Project" Button (Only appears on hover) */}
                      <div className="mt-8 flex items-center gap-2 pl-6 text-white md:group-hover:text-yellow-400 transition duration-500 delay-100
                            opacity-100 translate-y-0
                            md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0   
                        ">
                            <span className="font-bold text-lg ">View Project</span>
                            <ArrowUpRight className="w-6 h-6" />
                        </div>

                  </div>
              </div>

            </div>
          </Link>
        ))}

      </section>

      {/* 3. BOTTOM CTA */}
      {/* 3. BOTTOM CTA WITH BACKGROUND */}
      <section className="relative py-40  flex flex-col items-center justify-center overflow-hidden mt-20">
        
        {/* A. BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
            <img 
                // You can change this to a local image like "/images/cta-bg.jpg"
                src="/portfolio/ctabutton1.jpg" 
                alt="Workspace background"
                className="w-full h-full object-cover opacity-50 -skew-y-3"
            />
            {/* Dark Gradient Overlay (Crucial for text readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#010506] via-[#010506]/20 to-[#010506]/30"></div>
        </div>

        {/* B. CONTENT (Relative z-10 to sit ON TOP of image) */}
        <div className="relative z-10 text-center px-6">
            <h2 className="text-2xl md:text-5xl font-semibold text-white mb-6">
                Looking for more?
            </h2>
            
            <Link href="/estimate">
                <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] cursor-pointer">
                    Start a Project
                </button>
            </Link>
        </div>

      </section>

    </div>
  );
}