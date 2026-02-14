"use client";
import React, {useState} from 'react';
import { services } from '../../src/data/services';
import ServiceCard from '../../src/component/home/ServiceCard';


export default function ServiceClient() {
    const [activeTab, setActiveTab] = useState<'premium' | 'budget'>('premium');
    const filteredServices = services.filter(service => service.type === activeTab);

    return (
        <div className="bg-[#010506] text-white min-h-screen">
            {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
        {/* Background Glow */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-all duration-700 ${activeTab === 'premium' ? 'bg-red-800/30' : 'bg-blue-500/20'}`}></div>

        <h1 className="relative z-10 text-5xl md:text-7xl font-bold mb-6">
          Choose Your <br />
          <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-500 ${activeTab === 'premium' ? 'from-red-600 to-pink-700' : 'from-blue-800 to-blue-400'}`}>
            Digital Path
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
          Whether you need a custom-engineered software ecosystem or a rapid-growth digital marketing solution, we have the expertise.
        </p>

        {/* 2. THE TOGGLE SWITCH */}
        <div className="flex justify-center mb-16">
            <div className="relative bg-white/5 border border-white/10 p-1 rounded-full flex items-center">
                
                {/* Sliding Background Pill */}
                <div className={`absolute top-1 bottom-1 w-[140px] rounded-full transition-all duration-300 ease-in-out ${
                    activeTab === 'premium' ? 'left-1 bg-gradient-to-r from-red-600 to-pink-800' : 'left-[145px] bg-gradient-to-r from-blue-900 to-blue-600'
                }`}></div>

                {/* Premium Button */}
                <button 
                    onClick={() => setActiveTab('premium')}
                    className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'premium' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    PREMIUM DEV
                </button>

                {/* Budget Button */}
                <button 
                    onClick={() => setActiveTab('budget')}
                    className={`relative z-10 w-[140px] py-3 rounded-full text-sm font-bold tracking-wide transition-colors duration-300 ${activeTab === 'budget' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                    GROWTH & CMS
                </button>
            </div>
        </div>
      </section>

      {/* 3. DYNAMIC GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
         {/* Animated Grid Wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {filteredServices.map((service, index) => (
                <ServiceCard 
                    key={index} // Ideally use a unique ID if available
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    icon={service.icon}
                    // Pass type for specific styling inside card if needed
                    type={service.type} 
                />
            ))}
        </div>

        {/* Empty State (Just in case) */}
        {filteredServices.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                No services found for this category.
            </div>
        )}
      </section>
        </div>
    )

}