// app/demos/cyberpunk/factions/page.tsx
"use client";

import React, { useState } from 'react';
import { ShieldAlert, Skull, Flame, Hexagon, Crosshair } from 'lucide-react';

// --- GAME LORE DATA ---
const factions = [
  {
    id: "F-01",
    name: "Kurokawa Corp",
    type: "Megacorporation",
    territory: "Upper Skyline",
    threat: "Extreme",
    theme: "cyan",
    color: "text-cyan-400",
    border: "border-cyan-400",
    bgHover: "group-hover:bg-cyan-400/10",
    icon: Hexagon,
    desc: "A ruthless syndicate wrapped in corporate silk. They monopolize neuro-implants and control the city's orbital defense grid from their glass towers."
  },
  {
    id: "F-02",
    name: "Neon Wraiths",
    type: "Street Syndicate",
    territory: "Sector 4 Slums",
    threat: "High",
    theme: "pink",
    color: "text-pink-500",
    border: "border-pink-500",
    bgHover: "group-hover:bg-pink-500/10",
    icon: Skull,
    desc: "Cyber-junkies who push their bodies past the breaking point with illegal black-market tech. They strike fast, leave no trace, and vanish into the neon fog."
  },
  {
    id: "F-03",
    name: "Rust Devils",
    type: "Nomad Clan",
    territory: "The Badlands",
    threat: "Moderate",
    theme: "yellow",
    color: "text-yellow-400",
    border: "border-yellow-400",
    bgHover: "group-hover:bg-yellow-400/10",
    icon: Flame,
    desc: "Outcasts heavily armed with scavenged military hardware. They control the smuggling routes outside the city walls and fiercely protect their own."
  }
];

export default function FactionsPage() {
  const [activeFaction, setActiveFaction] = useState("F-01");

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      
      {/* 1. HEADER */}
      <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 relative">
        <span className="bg-red-500 text-white px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-4 inline-flex items-center gap-2">
          <Crosshair size={12} /> Database Access: Classified
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Threat <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-400 to-neutral-700">Index.</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-2xl uppercase tracking-widest">
          Identify your enemies. Know their territory. Survive the night.
        </p>
      </div>

      {/* 2. FACTIONS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {factions.map((faction) => {
          const Icon = faction.icon;
          const isActive = activeFaction === faction.id;
          
          return (
            <div 
              key={faction.id}
              onMouseEnter={() => setActiveFaction(faction.id)}
              className={`group relative border ${isActive ? faction.border : 'border-white/10'} bg-[#050505] transition-all duration-500 cursor-crosshair overflow-hidden`}
            >
              {/* Background Hover Effect */}
              <div className={`absolute inset-0 ${faction.bgHover} opacity-0 ${isActive ? 'opacity-100' : ''} transition-opacity duration-500`}></div>
              
              {/* Top Bar with ID */}
              <div className={`flex justify-between items-center p-4 border-b ${isActive ? faction.border : 'border-white/10'} transition-colors`}>
                <span className={`text-xs font-mono font-bold tracking-widest ${isActive ? faction.color : 'text-white/30'}`}>
                  {faction.id}
                </span>
                <Icon size={20} className={isActive ? faction.color : 'text-white/30'} />
              </div>

              {/* Character/Faction Placeholder Image */}
              <div className="w-full aspect-[4/3] bg-neutral-900 border-b border-white/10 relative overflow-hidden">
                <div className={`absolute inset-0 mix-blend-overlay opacity-30 ${
                  faction.theme === 'cyan' ? 'bg-cyan-500' : 
                  faction.theme === 'pink' ? 'bg-pink-500' : 'bg-yellow-400'
                }`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-9xl font-black opacity-10 ${faction.color}`}>
                    {faction.id.split('-')[1]}
                  </span>
                </div>
              </div>

              {/* Faction Data */}
              <div className="p-6 md:p-8 relative z-10">
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2 group-hover:translate-x-2 transition-transform">
                  {faction.name}
                </h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border ${faction.border} ${faction.color}`}>
                    {faction.type}
                  </span>
                  <span className="text-xs font-mono text-white/50 uppercase">
                    Threat: <span className={faction.threat === 'Extreme' ? 'text-red-500' : 'text-white'}>{faction.threat}</span>
                  </span>
                </div>

                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  {faction.desc}
                </p>

                <div className="border-t border-white/10 pt-4 mt-auto">
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
                    Known Territory: <span className="text-white">{faction.territory}</span>
                  </p>
                </div>
              </div>

              {/* Animated Corner Accents */}
              {isActive && (
                <>
                  <div className={`absolute top-0 left-0 w-2 h-2 ${faction.border} border-t-2 border-l-2`}></div>
                  <div className={`absolute bottom-0 right-0 w-2 h-2 ${faction.border} border-b-2 border-r-2`}></div>
                </>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}