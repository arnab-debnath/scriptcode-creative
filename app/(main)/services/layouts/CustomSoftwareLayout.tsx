// src/components/services/layouts/CustomSoftwareLayout.tsx
import React from 'react';
import { Code2, Layers, Database, ArrowLeft, Terminal } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function CustomSoftwareLayout() {
  return (
    <div className="bg-[#020408] min-h-screen text-white pt-32 font-mono selection:bg-cyan-500/30 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 mb-12 transition-colors">
          <ArrowLeft size={16} /> return to_services()
        </Link>

        {/* Hero: Terminal Aesthetic */}
        <div className="border border-white/10 rounded-xl bg-black overflow-hidden mb-20 shadow-[0_0_50px_rgba(6,182,212,0.05)]">
          <div className="bg-[#0d1117] px-4 py-3 border-b border-white/10 flex gap-2 items-center">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="ml-4 text-xs text-gray-500 flex items-center gap-2"><Terminal size={12}/> root@scriptcode:~/custom-software</span>
          </div>
          <div className="p-8 md:p-16">
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Custom Software Architecture
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed mb-8 font-sans">
              We engineer bespoke digital platforms tailored to your specific business logic. From complex internal dashboards to customer-facing portals, we build React and Node.js systems that scale globally.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-cyan-400 bg-cyan-950/30 p-4 rounded-lg border border-cyan-900/50 w-fit">
              <span>[ React.js ]</span> <span>[ Node.js ]</span> <span>[ Python ]</span> <span>[ PostgreSQL ]</span> <span>[ Docker ]</span>
            </div>
          </div>
        </div>

        {/* Features: Deep Tech Focus */}
        <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-20">
          {[
            { icon: Layers, title: "Microservices", desc: "Decoupled architecture for massive scaling without breaking existing features." },
            { icon: Database, title: "API Integration", desc: "Secure RESTful and GraphQL endpoint engineering for third-party communication." },
            { icon: Code2, title: "Clean Code", desc: "Strict typing with TypeScript, full test coverage, and comprehensive documentation." }
          ].map((feat, i) => (
            <div key={i} className="bg-[#020408] p-10 hover:bg-[#0a0f18] transition-colors group">
              <feat.icon className="text-cyan-600 group-hover:text-cyan-400 mb-6 transition-colors" size={32} />
              <h3 className="text-xl font-bold mb-4 font-sans">{feat.title}</h3>
              <p className="text-gray-500 text-sm font-sans leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic CTA */}
      <EstimateCTA themeColor="cyan" title="Initialize Your Project Estimate" />
    </div>
  );
}