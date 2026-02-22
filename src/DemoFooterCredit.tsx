import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface DemoFooterCreditProps {
  brand?: 'main' | 'creative';
}

export default function DemoFooterCredit({ brand = 'main' }: DemoFooterCreditProps) {
  // Config to switch between your two domains automatically
  const config = {
    main: {
      url: "https://scriptcode.in",
      name: "ScriptCode Innovation",
      accentDot: "text-blue-500",
      hoverBorder: "hover:border-blue-500/50",
    },
    creative: {
      url: "https://creative.scriptcode.in",
      name: "ScriptCode Creative",
      accentDot: "text-pink-500",
      hoverBorder: "hover:border-pink-500/50",
    }
  };

  const current = config[brand];

  return (
    <section className="w-full bg-[#020609] border-t border-white/5 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Text and Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-gray-500 text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Designed & Engineered By
          </p>
          <h4 className="text-white font-bold text-2xl flex items-center">
            {current.name}
            <span className={`${current.accentDot} ml-[2px] text-3xl leading-none`}>.</span>
          </h4>
        </div>

        {/* Right Side: Button */}
        <a 
          href={current.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`group flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${current.hoverBorder} hover:bg-white/10`}
        >
          <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">
            Visit Agency
          </span>
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        </a>

      </div>
    </section>
  );
}