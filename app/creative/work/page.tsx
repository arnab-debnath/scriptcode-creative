"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Smartphone, Layout, PenTool, 
  TrendingUp, Lock 
} from 'lucide-react';

// ==========================================
// DEMO / CONCEPT DATA
// ==========================================
const projects: any = {
  "1": {
    id: "1",
    title: "MediCore Health",
    category: "Web Design",
    type: "WordPress & SEO",
    tagline: "Trust & Care: A Modern Medical Experience.",
    heroImage: "/images/portfolio/medicore-hero.jpg",
    desc: "A modern, digital-first brand transformation for clinics focusing on accessibility.",
    stat: "1.2s Load"
  },
  "2": {
    id: "2",
    title: "Frenzy Streetwear",
    category: "Branding",
    type: "Shopify Store",
    tagline: "Minimalist E-Commerce for Hype Culture.",
    heroImage: "/images/portfolio/frenzy-hero.jpg",
    desc: "A bold 'Dark Mode' e-commerce store designed for high conversion.",
    stat: "Hype Design"
  },
  "3": {
    id: "3",
    title: "TechStart Growth",
    category: "Growth",
    type: "Social Media Strategy",
    tagline: "From 0 to 10k: The Viral Blueprint.",
    heroImage: "/images/portfolio/social-hero.jpg",
    desc: "Data-backed organic growth strategy using high-contrast typography.",
    stat: "+400% Reach"
  },
  "future": {
    id: "future",
    title: "Your Brand Here",
    category: "Future",
    desc: "Be our showcase success story. We are offering special rates for our first 5 partners."
  }
};

const categories = ["All", "Web Design", "Branding", "Growth"];

export default function CreativeWork() {
  const [activeTab, setActiveTab] = useState("All");

  const projectArray = Object.values(projects);

  const filteredProjects = activeTab === "All" 
    ? projectArray 
    : projectArray.filter((p: any) => p.category === activeTab || p.category === "Future");

  // Helper function to determine the correct link
  const getProjectLink = (project: any) => {
    if (project.title === "MediCore Health") return "/creative/demos/medicore";
    if (project.title === "Frenzy Streetwear") return "/creative/demos/frenzy";
    if (project.title === "TechStart Growth") return "/creative/demos/techstart";
    return `/creative/work/${project.id}`;
  };

  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 pb-20 px-6 font-sans selection:bg-purple-500 selection:text-white">
      
      {/* 1. HEADER */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
         <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold mb-6 uppercase tracking-widest">
            <img 
                src="/images/scshortlogo.png" 
                alt="ScriptCode Mark" 
                className="w-5 h-5 object-contain brightness-0 invert" 
            /> Concept Lab
         </div>
         <h1 className="text-4xl md:text-6xl font-black mb-6">
            Our Vision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Your Potential.
            </span>
         </h1>
         <p className="text-gray-400 text-lg">
            We are a fresh agency with deep engineering roots. Here is a showcase of our design capabilities and concept work.
         </p>
      </div>

      {/* 2. FILTER TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
            <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all border cursor-pointer ${
                    activeTab === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-gray-400 border-white/10 hover:border-white hover:text-white'
                }`}
            >
                {cat}
            </button>
        ))}
      </div>

      {/* 3. GALLERY GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project: any) => (
            <div key={project.id} className={`group relative rounded-[2rem] overflow-hidden border transition-transform duration-500 cursor-pointer ${
                project.category === "Future" 
                ? "bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30 hover:scale-105 flex flex-col justify-center text-center p-8 min-h-[400px]"
                : "bg-[#0B0B1A] border-white/10 hover:-translate-y-2"
            }`}>
                
                {project.category === "Future" ? (
                    <Link href="/creative/contact" className="h-full flex flex-col items-center justify-center w-full">
                        <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 animate-pulse">
                            <Lock size={32} className="text-purple-300" />
                        </div>
                        <h3 className="text-3xl font-black mb-4">Your Brand Here</h3>
                        <p className="text-gray-300 mb-8 max-w-xs mx-auto">
                            {project.desc}
                        </p>
                        <button className="px-6 py-3 bg-white text-black rounded-full font-bold text-sm hover:bg-gray-200 transition-colors cursor-pointer">
                            Claim This Spot
                        </button>
                    </Link>
                ) : (
                    /* --- UPDATED LINK LOGIC --- */
                    <Link 
                      href={getProjectLink(project)} 
                      className="block h-full"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img 
                                src={project.heroImage} 
                                alt={project.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                            />
                            {project.stat && (
                                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                                    <TrendingUp size={12} /> {project.stat}
                                </div>
                            )}
                        </div>

                        <div className="p-8">
                            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                                {project.category === "Web Design" && <Layout size={14} />}
                                {project.category === "Branding" && <PenTool size={14} />}
                                {project.category === "Growth" && <Smartphone size={14} />}
                                {project.type}
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {project.desc}
                            </p>

                            <div className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                                {project.title === "TechStart Growth" ? "View Case Study" : "View Live Demo"} <ArrowRight size={16} />
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        ))}
      </div>
    </div>
  );
}