// src/components/services/layouts/ITConsultingLayout.tsx
import React from 'react';
import { Lightbulb, TrendingUp, Workflow, Users, ArrowLeft, Target, Network, Briefcase } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function ITConsultingLayout() {
  return (
    <div className="bg-[#03030A] min-h-screen text-white pt-32 font-sans relative overflow-hidden selection:bg-indigo-500/30">
      
      {/* Background Ambience (Deep Executive Indigo) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-indigo-900/15 blur-[150px] rounded-[100%] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-6 text-xs uppercase tracking-widest font-bold">
              <Briefcase size={16} /> Virtual CTO Services
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Align Tech with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                Business Vision.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Stop guessing on your technology stack. We provide executive-level IT strategy, guiding your company through digital transformation, cloud migrations, and team scaling without the cost of a full-time CTO.
            </p>

            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-[#070714] border border-indigo-900/40 p-5 rounded-2xl flex flex-col gap-2">
                    <TrendingUp className="text-indigo-400" size={24} />
                    <span className="font-bold text-white text-lg">ROI Focused</span>
                    <span className="text-xs text-gray-500">Tech investments tied to revenue.</span>
                 </div>
                 <div className="bg-[#070714] border border-indigo-900/40 p-5 rounded-2xl flex flex-col gap-2">
                    <Target className="text-violet-400" size={24} />
                    <span className="font-bold text-white text-lg">Future-Proof</span>
                    <span className="text-xs text-gray-500">Scalable architecture design.</span>
                 </div>
            </div>
          </div>

          {/* Right Visual: The "Strategic Roadmap" Mockup (Built with Tailwind) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-lg bg-[#0A0A14] border border-white/10 p-8 rounded-2xl shadow-2xl relative">
                
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Network className="text-indigo-400" /> Digital Transformation Plan
                </h3>

                {/* Simulated Nodes & Paths */}
                <div className="relative pl-6 space-y-8 before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:to-gray-800">
                    
                    {/* Node 1 */}
                    <div className="relative z-10">
                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-[#0A0A14] shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
                        <h4 className="font-bold text-white text-lg">Phase 1: Discovery & Audit</h4>
                        <p className="text-sm text-gray-500 mt-1">Analyze current legacy systems and identify operational bottlenecks.</p>
                        <div className="mt-3 flex gap-2">
                            <span className="bg-white/5 border border-white/10 text-xs px-2 py-1 rounded text-gray-400">2 Weeks</span>
                            <span className="bg-indigo-500/20 border border-indigo-500/30 text-xs px-2 py-1 rounded text-indigo-300">Complete</span>
                        </div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative z-10">
                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-violet-500 border-4 border-[#0A0A14] shadow-[0_0_15px_rgba(139,92,246,0.6)]"></div>
                        <h4 className="font-bold text-white text-lg">Phase 2: Architecture Design</h4>
                        <p className="text-sm text-gray-500 mt-1">Map out cloud infrastructure (AWS/Azure) and microservices transition.</p>
                        <div className="mt-3 flex gap-2">
                            <span className="bg-white/5 border border-white/10 text-xs px-2 py-1 rounded text-gray-400">4 Weeks</span>
                            <span className="bg-violet-500/20 border border-violet-500/30 text-xs px-2 py-1 rounded text-violet-300 animate-pulse">In Progress</span>
                        </div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative z-10 opacity-50">
                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-gray-700 border-4 border-[#0A0A14]"></div>
                        <h4 className="font-bold text-white text-lg">Phase 3: Execution & Scaling</h4>
                        <p className="text-sm text-gray-500 mt-1">Oversee vendor management, CI/CD setup, and agile team restructuring.</p>
                        <div className="mt-3 flex gap-2">
                            <span className="bg-white/5 border border-white/10 text-xs px-2 py-1 rounded text-gray-400">Ongoing</span>
                            <span className="bg-gray-800 text-xs px-2 py-1 rounded text-gray-500">Pending</span>
                        </div>
                    </div>

                </div>

             </div>
          </div>
        </div>

        {/* Consulting Areas Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Executive Consulting Areas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Lightbulb, title: "Tech Strategy", desc: "We translate your business goals into a concrete technological roadmap that guarantees ROI." },
                { icon: Workflow, title: "Cloud Migration", desc: "Expert guidance on moving legacy on-premise servers to AWS, Azure, or Google Cloud securely." },
                { icon: Users, title: "Agile Transformation", desc: "Restructuring your engineering teams and workflows to increase deployment velocity and morale." },
                { icon: Briefcase, title: "Vendor Management", desc: "We act as your technical shield, vetting third-party software and managing external dev agencies." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-indigo-900/30 p-8 rounded-2xl hover:bg-indigo-950/20 hover:border-indigo-500/50 transition-all duration-300 group">
                    <feat.icon className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Frameworks & Methodologies */}
        <div className="text-center mb-10 border-t border-indigo-900/30 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">Methodologies & Frameworks</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Agile / Scrum", "TOGAF", "ITIL", "DevSecOps", "Microservices", "System Design", "Cost Optimization"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-indigo-950/30 border border-indigo-900/50 text-indigo-300 font-medium text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Indigo Theme */}
      <EstimateCTA themeColor="indigo" title="Book a Strategic Consultation" />
    </div>
  );
}