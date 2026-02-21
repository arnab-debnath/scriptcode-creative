"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, BookOpen, ChevronDown, Layers, Terminal, MessageSquare } from 'lucide-react';

// IMPORT DATA
import { capabilities } from '../../../src/data/glossary';
import { faqs } from '../../../src/data/faqs';

function ResourcesContent() {
  const searchParams = useSearchParams();
  
  const [activeTab, setActiveTab] = useState<"glossary" | "qa">("glossary");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    const searchParam = searchParams.get("search");

    if (tabParam === "glossary" || tabParam === "qa") {
      setActiveTab(tabParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const filteredCapabilities = capabilities.filter(cap => 
    cap.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cap.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cap.def.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold mb-6">
            <BookOpen size={16} />
            <span>ScriptCode Innovation</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
            Domain <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">
                Solutions
            </span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Explore our technical glossary and frequently asked questions across key enterprise industries.
        </p>
      </section>

      <section className="max-w-5xl mx-auto mb-16">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button 
                onClick={() => {setActiveTab("glossary"); setSearchQuery("");}}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                    activeTab === "glossary" 
                    ? "bg-cyan-600/20 text-cyan-400 border border-cyan-500/50" 
                    : "bg-[#0B1215] text-gray-400 border border-white/10 hover:bg-white/5"
                }`}
            >
                <Layers size={18} /> Technical Glossary
            </button>
            <button 
                onClick={() => {setActiveTab("qa"); setSearchQuery("");}}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                    activeTab === "qa" 
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/50" 
                    : "bg-[#0B1215] text-gray-400 border border-white/10 hover:bg-white/5"
                }`}
            >
                <MessageSquare size={18} /> Q&A
            </button>
        </div>

        <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center bg-[#0B1215] border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                <Search className="text-gray-500 mr-4" size={20} />
                <input 
                    type="text" 
                    placeholder={
                        activeTab === "glossary" ? "Search solutions (e.g., EMR, LMS)..." :
                        "Search questions or topics..."
                    }
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent w-full focus:outline-none text-white placeholder-gray-600"
                />
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto min-h-[400px]">
          {activeTab === "glossary" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-in fade-in duration-500">
                {filteredCapabilities.length > 0 ? (
                    filteredCapabilities.map((cap) => (
                        <div key={cap.id} className="bg-[#0B1215] border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-colors group cursor-default">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 uppercase tracking-wider font-bold">
                                <Terminal size={14} className="text-cyan-500" />
                                {cap.industry}
                            </div>
                            <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                                {cap.term}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {cap.def}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-gray-500">No solutions found for "{searchQuery}".</div>
                )}
            </div>
          )}

          {activeTab === "qa" && (
            <div className="max-w-4xl mx-auto space-y-4 animate-in fade-in duration-500">
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => {
                        const isOpen = activeAccordion === index;
                        return (
                            <div key={index} onClick={() => toggleAccordion(index)} className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "bg-[#0f1921] border-blue-500/30" : "bg-[#0B1215] border-white/5 hover:border-white/10"}`}>
                                <div className="p-6 flex items-center justify-between">
                                    <h3 className={`font-bold text-lg transition-colors pr-8 ${isOpen ? "text-blue-400" : "text-white"}`}>{faq.question}</h3>
                                    <div className={`p-2 shrink-0 rounded-full transition-all ${isOpen ? "bg-blue-500/20 text-blue-400 rotate-180" : "bg-white/5 text-gray-400"}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </div>
                                <div className={`px-6 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] pb-6 opacity-100" : "max-h-0 opacity-0"}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="py-20 text-center text-gray-500">No questions found matching "{searchQuery}".</div>
                )}
            </div>
          )}
      </div>
    </>
  );
}

export default function ResourcesPage() {
  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[500px]">
          <div className="text-cyan-400 font-bold tracking-widest uppercase animate-pulse">
            Loading Domain Solutions...
          </div>
        </div>
      }>
        <ResourcesContent />
      </Suspense>
    </div>
  );
}