"use client";

import React from 'react';
import Link from 'next/link';
import { Layers, Terminal, Code, Cpu, BookOpen, ArrowRight } from 'lucide-react';

export default function DevelopersPage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-[#635BFF]/30 text-[#425466]">
      

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-[#425466] text-sm font-bold mb-6">
                <Terminal size={16} /> Developer First
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-[#0A2540] mb-6 tracking-tight">
                The world's most powerful payments API.
            </h1>
            <p className="text-xl leading-relaxed font-medium mb-8">
                Build precisely what you need. Our APIs are meticulously designed to be predictable, RESTful, and easy to integrate into any stack.
            </p>
            <div className="flex gap-4">
                <button className="px-6 py-3 rounded-full bg-[#635BFF] text-white font-bold hover:bg-[#5851DE] transition-colors shadow-lg shadow-[#635BFF]/25">
                    Read the Docs
                </button>
                <button className="px-6 py-3 rounded-full bg-[#F6F9FC] text-[#0A2540] font-bold hover:bg-gray-100 transition-colors border border-gray-200">
                    Get API Keys
                </button>
            </div>
        </div>

        {/* Big Code Block */}
        <div className="bg-[#0A2540] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <div className="flex bg-[#1A365D] border-b border-gray-700/50 text-sm">
                <div className="px-6 py-3 border-r border-gray-700/50 text-gray-300 bg-[#0A2540]">Node.js</div>
                <div className="px-6 py-3 border-r border-gray-700/50 text-gray-500 hover:text-gray-300 cursor-pointer">Python</div>
                <div className="px-6 py-3 text-gray-500 hover:text-gray-300 cursor-pointer">cURL</div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
                <p><span className="text-pink-400">import</span> NovaTrade <span className="text-pink-400">from</span> <span className="text-yellow-300">'novatrade'</span>;</p>
                <br/>
                <p><span className="text-pink-400">const</span> nova = <span className="text-pink-400">new</span> NovaTrade(<span className="text-yellow-300">'sk_test_12345'</span>);</p>
                <br/>
                <p className="text-gray-500">// Create a secure customer profile</p>
                <p><span className="text-pink-400">const</span> customer = <span className="text-pink-400">await</span> nova.customers.create(&#123;</p>
                <p className="pl-4">email: <span className="text-yellow-300">'developer@example.com'</span>,</p>
                <p className="pl-4">name: <span className="text-yellow-300">'Jane Doe'</span>,</p>
                <p>&#125;);</p>
            </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
        <h2 className="text-2xl font-bold text-[#0A2540] mb-10">Explore the platform</h2>
        <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <BookOpen size={20} className="text-[#635BFF]" />
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#635BFF] transition-colors">Documentation</h3>
                </div>
                <p className="text-sm leading-relaxed">Comprehensive guides, tutorials, and deep-dives into our architecture.</p>
            </div>
            <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <Code size={20} className="text-[#00D4FF]" />
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#00D4FF] transition-colors">API Reference</h3>
                </div>
                <p className="text-sm leading-relaxed">Explore every endpoint, parameter, and error code in detail.</p>
            </div>
            <div className="group cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                    <Cpu size={20} className="text-[#FF7A59]" />
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#FF7A59] transition-colors">SDKs & Libraries</h3>
                </div>
                <p className="text-sm leading-relaxed">Official client libraries for React, Vue, Python, Go, and more.</p>
            </div>
        </div>
      </section>
    </div>
  );
}