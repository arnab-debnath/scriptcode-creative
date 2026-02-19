// src/components/home/Marquee.tsx
"use client";

import React from 'react';

interface MarqueeProps {
    items: string[];
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  return (
    <div className="w-full overflow-hidden bg-black/20 border-y border-white/5 relative py-6 md:py-10 backdrop-blur-sm">
        
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes scroll-left-tech {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
          }
          .animate-marquee-tech {
              animation: scroll-left-tech 40s linear infinite;
              display: flex;
              width: max-content;
              align-items: center;
          }
          .tech-stroke {
              -webkit-text-stroke: 1px rgba(255, 255, 255, 0.15);
              color: transparent;
          }
          .tech-stroke:hover {
              -webkit-text-stroke: 1px #38bdf8;
              color: #38bdf8;
              text-shadow: 0 0 25px rgba(56, 189, 248, 0.5);
          }
        `}} />

        {/* Subtle Edge Fades */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#062b30] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#071B23] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee-tech">
            {/* Render the whole array 4 times to ensure a seamless -50% loop */}
            {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter tech-stroke transition-all duration-300 mx-6 md:mx-12 cursor-default whitespace-nowrap">
                                {item}
                            </span>
                            <span className="text-cyan-500 font-black text-4xl md:text-5xl shrink-0 italic opacity-40">/</span>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  );
};

export default Marquee;