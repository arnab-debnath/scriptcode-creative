"use client";

import React from 'react';
import Image from 'next/image';
import { Instagram, Twitter } from 'lucide-react';

export default function TrainersPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      
      {/* HEADER */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-6">
          Meet The <span className="text-[#DFFF00]">Elite</span>
        </h1>
        <p className="text-lg text-gray-400 font-medium tracking-wide">
          Former Olympians. Pro fighters. Biomechanics experts. Our roster is unmatched.
        </p>
      </div>

      {/* TRAINERS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Trainer 1 */}
        <div className="group relative overflow-hidden bg-[#111] h-[500px]">
            <Image 
                src="/industries/industries-demos/sports-demo/trainer-1.png"
                alt="Marcus Thorne"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="text-[#DFFF00] text-[10px] font-black uppercase tracking-widest mb-2">Head of Strength</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Marcus <br/> Thorne</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-300 text-xs font-medium leading-relaxed mb-4">Former Olympic powerlifter specializing in max-effort programming and injury prevention.</p>
                    <div className="flex gap-4">
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Instagram size={18} /></button>
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Twitter size={18} /></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Trainer 2 */}
        <div className="group relative overflow-hidden bg-[#111] h-[500px]">
            <Image 
                src="/industries/industries-demos/sports-demo/trainer-2.png"
                alt="Sarah Jenkins"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="text-[#DFFF00] text-[10px] font-black uppercase tracking-widest mb-2">Lead Conditioning</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Sarah <br/> Jenkins</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-300 text-xs font-medium leading-relaxed mb-4">Triathlete and HIIT specialist. If you want to build an engine that never quits, Sarah is your coach.</p>
                    <div className="flex gap-4">
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Instagram size={18} /></button>
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Twitter size={18} /></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Trainer 3 */}
        <div className="group relative overflow-hidden bg-[#111] h-[500px]">
            <Image 
                src="/industries/industries-demos/sports-demo/trainer-3.png"
                alt="Dr. Leo Vance"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="text-[#DFFF00] text-[10px] font-black uppercase tracking-widest mb-2">Recovery Specialist</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Dr. Leo <br/> Vance</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-300 text-xs font-medium leading-relaxed mb-4">Doctor of Physical Therapy focused on biomechanics, mobility protocols, and joint longevity.</p>
                    <div className="flex gap-4">
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Instagram size={18} /></button>
                    </div>
                </div>
            </div>
        </div>

        {/* Trainer 4 */}
        <div className="group relative overflow-hidden bg-[#111] h-[500px]">
            <Image 
                src="/industries/industries-demos/sports-demo/trainer-4.png"
                alt="Elena Rios"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                <div className="text-[#DFFF00] text-[10px] font-black uppercase tracking-widest mb-2">Combat/Boxing</div>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-4">Elena <br/> Rios</h3>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-gray-300 text-xs font-medium leading-relaxed mb-4">Former Golden Gloves champion. High-speed striking and defensive mechanics.</p>
                    <div className="flex gap-4">
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Instagram size={18} /></button>
                        <button className="text-white hover:text-[#DFFF00] transition-colors"><Twitter size={18} /></button>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}