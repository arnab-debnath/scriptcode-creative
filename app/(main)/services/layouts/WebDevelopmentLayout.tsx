// src/components/services/layouts/WebDevelopmentLayout.tsx
import React from 'react';
import { Globe, Zap, Layout, Smartphone, ArrowLeft, Code2, Server } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function WebDevelopmentLayout() {
  return (
    <div className="bg-[#030712] min-h-screen text-white pt-32 font-sans relative overflow-hidden selection:bg-blue-500/30">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Globe size={16} /> <span className="text-xs font-bold uppercase tracking-widest">Next-Gen Web Apps</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            High-Performance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Web Engineering.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We build lightning-fast, scalable web applications and PWAs. No clunky templates—just pure, optimized code engineered for speed and reliability.
          </p>
        </div>

        {/* The Responsiveness Showcase (Using your uploaded image) */}
        <div className="relative mb-32 group">
            {/* Glow behind the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-[3rem] group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-700"></div>
            
            <div className="relative bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 backdrop-blur-sm overflow-hidden text-center">
                <div className="absolute top-4 left-8 flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <h3 className="text-2xl font-bold mt-8 mb-2">Engineered for Every Screen</h3>
                <p className="text-gray-400 text-sm mb-10">Flawless responsive architecture from 4K monitors down to mobile devices.</p>
                
                <img 
                    src="/services/responsive-mockup.png" 
                    alt="Responsive Web Design across iMac, MacBook, iPad, and iPhone" 
                    className="w-full max-w-5xl mx-auto rounded-xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
            </div>
        </div>

        {/* Core Capabilities Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Zap, title: "Server-Side Rendering", desc: "Next.js architecture for instant load times and perfect SEO." },
                { icon: Layout, title: "Headless CMS", desc: "Decoupled frontends connected to powerful content backends." },
                { icon: Smartphone, title: "Progressive Web Apps", desc: "Websites that install and feel like native mobile apps." },
                { icon: Server, title: "Edge Computing", desc: "Deploying code globally to edge networks for zero-latency." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-300">
                    <feat.icon className="text-blue-400 mb-6" size={32} />
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* The Stack */}
        <div className="text-center mb-10 border-t border-white/5 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">The Modern Stack</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "Vercel"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-300 font-mono text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA */}
      <EstimateCTA themeColor="cyan" title="Calculate Your Web App Build" />
    </div>
  );
}