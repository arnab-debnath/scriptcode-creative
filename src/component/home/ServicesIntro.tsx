// src/components/home/ServicesIntro.tsx
import React from 'react';

const ServicesIntro: React.FC = () => {
  return (
    <section className="relative w-full mt-16 py-10 md:py-12 bg-[#020609] overflow-hidden">
      
      {/* 1. CENTER BACKGROUND IMAGE */}
      <div className="absolute inset-0 flex justify-center items-center">
        
        {/* ANIMATION WRAPPER */}
        <div className="relative float w-[300px] md:w-[600px] aspect-square flex justify-center items-center">
            
            {/* 1. THE GLOSSY LENS */}
            <div className="absolute inset-25 md:inset-50 glass-sphere z-0 animate-pulse-slow"></div>

            {/* 2. THE RING IMAGE */}
            <img 
              src="/images/service-ring.png" 
              alt="Abstract Ring" 
              className="relative z-10 w-full h-full object-contain opacity-100"
            />
            
        </div>
      </div>

      {/* 2. CONTENT CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-left">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter">
            The Services <br />
            <span className="relative inline-block">
                    We Offer
                    <span className="relative inline-block after:absolute after:top-1/2 after:-translate-y-1/2 after:translate-x-1/2 after:right-0 after:mr-2 after:w-1 after:h-1 md:after:w-2 md:after:h-2 after:bg-gradient-to-r after:from-red-500 after:to-red-900 ml-6"></span>
            </span>
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-end ">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md text-right font-medium">
            We dare to innovate, inspire, and create solutions that ignite emotions 
            and stand out in a world flooded with templates. At ScriptCode, we invite 
            you to join us in crafting something truly unique and impactful.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesIntro;