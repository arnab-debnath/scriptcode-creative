// src/components/services/layouts/UiUxLayout.tsx
import React from 'react';
import { PenTool, Eye, Layout, ArrowLeft, MousePointer2 } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function UiUxLayout() {
  return (
    <div className="bg-[#0A0510] min-h-screen text-white pt-32 font-sans selection:bg-fuchsia-500/30 relative overflow-hidden">
      
      {/* Fluid Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-fuchsia-600/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-800/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero: Highly Visual, Large Typography */}
        <div className="text-center md:text-left mb-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 mb-6">
              <PenTool size={16} /> <span className="text-xs font-bold uppercase tracking-widest">Experience Mapping</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
              Design That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Converts.</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-xl leading-relaxed">
              We craft user-centric interfaces that reduce friction and increase product adoption. Beautiful pixels backed by deep user psychology.
            </p>
          </div>
          
          {/* Abstract Floating UI Element */}
          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 to-purple-500/30 blur-2xl rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="w-full h-32 bg-white/5 rounded-2xl mb-4 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-fuchsia-500/50"></div>
                <div className="flex-1 bg-white/5 rounded-xl"></div>
              </div>
              <MousePointer2 className="absolute -bottom-6 -right-6 text-white w-12 h-12 drop-shadow-2xl" />
            </div>
          </div>
        </div>

        {/* Features: Soft Glassmorphism Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Eye, title: "User Research", desc: "Data-driven personas and journey mapping to understand your exact target audience." },
            { icon: Layout, title: "Wireframing", desc: "Rapid prototyping to establish visual hierarchy before writing a single line of code." },
            { icon: PenTool, title: "Design Systems", desc: "Scalable component libraries (Figma) to ensure consistency across your entire platform." }
          ].map((feat, i) => (
            <div key={i} className="bg-white/[0.02] backdrop-blur-sm border border-white/5 p-10 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-fuchsia-500/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-fuchsia-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <feat.icon className="text-fuchsia-400" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feat.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic CTA */}
      <EstimateCTA themeColor="fuchsia" title="Calculate Your Design Sprint" />
    </div>
  );
}