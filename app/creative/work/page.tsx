"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, Layout, PenTool, Smartphone } from 'lucide-react';

const demoProjects = [
  {
    id: "frenzy",
    title: "Frenzy Streetwear",
    category: "Branding",
    type: "Shopify Store",
    heroImage: "/services/creative-project/frenzystreet.png",
    desc: "A bold 'Dark Mode' e-commerce store designed for high conversion.",
    link: "/creative/demos/frenzy" 
  },
  {
    id: "medicore",
    title: "MediCore Health",
    category: "Web Design",
    type: "WordPress & SEO",
    heroImage: "/services/creative-project/medicorehealth.png",
    desc: "A modern, digital-first brand transformation for clinics.",
    link: "/creative/demos/medicore"
  },
  {
    id: "techstart",
    title: "TechStart Growth",
    category: "Growth",
    type: "Social Media Strategy",
    heroImage: "/services/creative-project/techstart.png",
    desc: "Data-backed organic growth strategy using high-contrast typography.",
    link: "/creative/demos/techstart"
  }
];

export default function ConceptLab() {
  return (
    <div className="bg-[#050511] text-white min-h-screen pt-32 pb-20 px-6">
      <div className="text-center mb-16 max-w-3xl mx-auto">
         <h1 className="text-5xl md:text-7xl font-black mb-6">Concept <span className="text-purple-500">Lab</span></h1>
         <p className="text-gray-400 text-lg">Direct access to our interactive design prototypes and live demos.</p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoProjects.map((project) => (
            <Link key={project.id} href={project.link} target="_blank" className="group bg-[#0B0B1A] border border-white/10 rounded-[2rem] overflow-hidden hover:-translate-y-2 transition-all">
                <div className="h-64 relative">
                    <Image src={project.heroImage} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100" />
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-6">{project.desc}</p>
                    <div className="flex items-center gap-2 text-sm font-bold text-purple-400">
                        Launch Demo <ExternalLink size={16} />
                    </div>
                </div>
            </Link>
        ))}
      </div>
    </div>
  );
}