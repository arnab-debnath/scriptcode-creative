// src/components/services/layouts/BusinessAnalysisLayout.tsx
import React from 'react';
import { PieChart, FileText, Users, ArrowLeft, GitMerge, Target, LineChart, ClipboardCheck, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import EstimateCTA from '../../estimate/EstimateCTA';

export default function BusinessAnalysisLayout() {
  return (
    <div className="bg-[#050302] min-h-screen text-white pt-32 font-sans relative overflow-hidden selection:bg-amber-500/30">
      
      {/* Background Ambience (Deep Amber Glow) */}
      <div className="absolute top-20 right-0 w-[700px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation */}
        <Link href="/services" className="inline-flex items-center gap-2 text-gray-500 hover:text-amber-400 mb-12 transition-colors font-bold uppercase tracking-widest text-xs">
          <ArrowLeft size={16} /> Back to Services
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-6 text-xs uppercase tracking-widest font-bold">
              <ClipboardCheck size={16} /> Requirements Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Blueprint Before <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                You Build.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              The #1 cause of software failure is misunderstood requirements. Our Business Analysts bridge the gap between your strategic vision and our engineering team, ensuring we build exactly what your market needs.
            </p>

            <div className="grid grid-cols-2 gap-4">
                 <div className="bg-[#0A0604] border border-amber-900/40 p-5 rounded-2xl flex flex-col gap-2">
                    <Target className="text-amber-400" size={24} />
                    <span className="font-bold text-white text-lg">Scope Clarity</span>
                    <span className="text-xs text-gray-500">Eliminate feature creep early.</span>
                 </div>
                 <div className="bg-[#0A0604] border border-amber-900/40 p-5 rounded-2xl flex flex-col gap-2">
                    <GitMerge className="text-orange-400" size={24} />
                    <span className="font-bold text-white text-lg">Alignment</span>
                    <span className="text-xs text-gray-500">Business logic mapped to tech.</span>
                 </div>
            </div>
          </div>

          {/* Right Visual: The "Requirements Pipeline" Mockup (Built with Tailwind) */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <div className="w-full max-w-lg bg-[#0D0805] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl relative">
                
                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-white">
                        <LineChart className="text-amber-400" size={20} /> Transformation Pipeline
                    </h3>
                    <span className="bg-amber-500/20 text-amber-400 text-[10px] uppercase font-bold px-2 py-1 rounded">Agile Ready</span>
                </div>

                {/* Simulated Flowchart */}
                <div className="space-y-4">
                    
                    {/* Step 1: Raw Idea */}
                    <div className="bg-[#140C08] border border-white/5 p-4 rounded-xl flex items-center justify-between relative z-10 hover:border-amber-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400"><Users size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Stakeholder Interviews</h4>
                                <p className="text-xs text-gray-500 mt-0.5">Gathering raw business goals.</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                    </div>

                    <div className="flex justify-center -my-2 relative z-0">
                        <ArrowDown className="text-gray-700" size={20} />
                    </div>

                    {/* Step 2: Documentation */}
                    <div className="bg-[#140C08] border border-white/5 p-4 rounded-xl flex items-center justify-between relative z-10 hover:border-amber-500/50 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400"><FileText size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">BRD & Process Mapping</h4>
                                <p className="text-xs text-gray-500 mt-0.5">BPMN diagrams & workflows.</p>
                            </div>
                        </div>
                        <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                    </div>

                    <div className="flex justify-center -my-2 relative z-0">
                        <ArrowDown className="text-gray-700" size={20} />
                    </div>

                    {/* Step 3: Technical User Stories */}
                    <div className="bg-gradient-to-r from-[#1A0F0A] to-[#140C08] border border-amber-500/30 p-4 rounded-xl relative z-10 shadow-[0_0_30px_rgba(245,158,11,0.1)]">
                        <div className="flex items-center gap-4 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400"><GitMerge size={20} /></div>
                            <div>
                                <h4 className="font-bold text-sm text-white">Engineering-Ready Epics</h4>
                                <p className="text-xs text-amber-500/70 mt-0.5">Ready for sprint planning.</p>
                            </div>
                        </div>
                        {/* Mini Jira-style cards */}
                        <div className="flex gap-2">
                            <div className="bg-black/40 px-3 py-2 rounded text-[10px] text-gray-400 flex-1 border border-white/5">As a user, I want...</div>
                            <div className="bg-black/40 px-3 py-2 rounded text-[10px] text-gray-400 flex-1 border border-white/5">Acceptance Criteria</div>
                        </div>
                    </div>

                </div>

             </div>
          </div>
        </div>

        {/* BA Methodologies Grid */}
        <div className="mb-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Core Analysis Capabilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Users, title: "Requirement Elicitation", desc: "Conducting workshops and interviews to extract the true business needs, not just surface-level wants." },
                { icon: GitMerge, title: "Process Modeling", desc: "Creating BPMN diagrams and data flow maps to visualize how the software interacts with human workflows." },
                { icon: FileText, title: "User Story Mapping", desc: "Breaking down massive product visions into actionable, testable user stories with clear acceptance criteria." },
                { icon: PieChart, title: "Feasibility Analysis", desc: "Evaluating technical constraints, third-party API limitations, and budget realities before development starts." }
            ].map((feat, i) => (
                <div key={i} className="bg-white/[0.02] border border-amber-900/30 p-8 rounded-2xl hover:bg-amber-950/20 hover:border-amber-500/50 transition-all duration-300 group">
                    <feat.icon className="text-amber-400 mb-6 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
            ))}
            </div>
        </div>

        {/* Tools & Artifacts */}
        <div className="text-center mb-10 border-t border-amber-900/30 pt-16">
            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-8">Tools & Deliverables</p>
            <div className="flex flex-wrap justify-center gap-4">
                {["Jira / Confluence", "Miro", "Lucidchart", "BPMN 2.0", "UML Diagrams", "PRDs", "Wireframes"].map((tech, idx) => (
                    <span key={idx} className="px-6 py-3 rounded-full bg-amber-950/30 border border-amber-900/50 text-amber-300 font-medium text-sm">
                        {tech}
                    </span>
                ))}
            </div>
        </div>

      </div>

      {/* Dynamic CTA using the Orange Theme */}
      <EstimateCTA themeColor="orange" title="Define Your Project Scope" />
    </div>
  );
}