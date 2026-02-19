"use client";
import React, { useState } from 'react';
import { services } from '../../../src/data/services';
import ServiceCard from '../../../src/component/home/ServiceCard';
import GrowthBanner from '../../../src/component/home/GrowthBanner'; // Ensure you created this file
import Link from 'next/link'; 
import { ArrowRight, Sparkles } from 'lucide-react'; 

export default function ServiceClient() {
    // 1. Updated Toggle State
    const [activeTab, setActiveTab] = useState<'engineering' | 'consulting'>('engineering');
    
    // 2. Filter logic: Excludes 'creative-handoff' from the grid
    const filteredServices = services.filter(service => service.type === activeTab);

    return (
        <div className="bg-[#010506] text-white min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-all duration-700 ${activeTab === 'engineering' ? 'bg-red-800/30' : 'bg-blue-600/20'}`}></div>

                <h1 className="relative z-10 text-5xl md:text-7xl font-bold mb-6">
                    Engineering <br />
                    <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${activeTab === 'engineering' ? 'from-red-600 to-pink-700' : 'from-blue-600 to-cyan-500'}`}>
                        Excellence
                    </span>
                </h1>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
                    Focused on scalable architecture, cloud-native performance, and strategic technical consulting.
                </p>

                {/* THE TOGGLE SWITCH */}
                <div className="flex justify-center mb-10">
                    <div className="relative bg-white/5 border border-white/10 p-1 rounded-full flex items-center">
                        <div className={`absolute top-1 bottom-1 w-[140px] rounded-full transition-all duration-300 ease-in-out ${
                            activeTab === 'engineering' ? 'left-1 bg-gradient-to-r from-red-600 to-pink-800' : 'left-[145px] bg-gradient-to-r from-blue-600 to-cyan-600'
                        }`}></div>

                        <button 
                            onClick={() => setActiveTab('engineering')}
                            className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'engineering' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            ENGINEERING
                        </button>
                        <button 
                            onClick={() => setActiveTab('consulting')}
                            className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'consulting' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                        >
                            CONSULTING
                        </button>
                    </div>
                </div>
            </section>

            {/* DYNAMIC GRID SECTION */}
            <section className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                    {filteredServices.map((service) => (
                        // Removed the <Link> wrapper because ServiceCard handles routing now
                        <ServiceCard 
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            description={service.description}
                            image={service.image}
                            icon={service.icon}
                            externalLink={service.externalLink}
                        />
                    ))}
                </div>
            </section>

            {/* THE HANDOFF BANNER (Digital Marketing Redirect) */}
            <GrowthBanner />

            {/* CUSTOM SOLUTIONS CTA */}
            <section className="max-w-5xl mx-auto px-6 pb-32">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-black border border-white/10 p-10 md:p-16 text-center group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="bg-white/10 p-4 rounded-full mb-6">
                            <Sparkles className="w-8 h-8 text-yellow-400" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Building something complex?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mb-10 leading-relaxed">
                            We specialize in <span className="text-white font-semibold">custom-engineered solutions</span> for unique business challenges. If you can dream it, we can code it.
                        </p>
                        <Link href="/contact">
                            <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2">
                                Talk to an Architect <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}