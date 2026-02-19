// src/components/services/EstimateCTA.tsx
import React from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight } from 'lucide-react';

interface EstimateCTAProps {
  themeColor: string; // e.g., 'cyan', 'fuchsia', 'emerald'
  title?: string;
}

export default function EstimateCTA({ themeColor, title = "Ready to build your system?" }: EstimateCTAProps) {
  // Dynamic color mapping for Tailwind
  const colorMap: Record<string, string> = {
    cyan: "from-cyan-500/20 to-blue-600/20 border-cyan-500/30 text-cyan-400 hover:shadow-cyan-500/20",
    fuchsia: "from-fuchsia-500/20 to-purple-600/20 border-fuchsia-500/30 text-fuchsia-400 hover:shadow-fuchsia-500/20",
    emerald: "from-emerald-500/20 to-teal-600/20 border-emerald-500/30 text-emerald-400 hover:shadow-emerald-500/20",
  };

  const selectedStyle = colorMap[themeColor] || colorMap.cyan;

  return (
    <section className=" py-4 md:py-24 px-6 relative z-10">
      <div className={`max-w-4xl mx-auto px-2 py-4 md:p-12 rounded-[2.5rem] bg-gradient-to-br ${selectedStyle} border backdrop-blur-md text-center group transition-all duration-500`}>
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-white/5 rounded-full border border-white/10">
            <Calculator size={32} className="text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Stop guessing costs and timelines. Get a precise, data-backed estimate for your specific engineering requirements in minutes.
        </p>
        <Link href="/estimate" className="inline-flex items-center gap-3 px-3 md:px-10 py-3 md:py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-[12px] md:text-sm hover:scale-105 transition-transform">
          Get Custom Estimate <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}