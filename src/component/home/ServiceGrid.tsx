// src/components/home/ServicesGrid.tsx
import React from 'react';
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";
import ServiceHeroCard from "./ServiceHeroCard";
import ServicesIntro from "./ServicesIntro";
import GrowthBanner from "./GrowthBanner"; // Import the new banner

const ServicesGrid: React.FC = () => {
    return (
        <section className="max-full mx-auto">
            <ServicesIntro />
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => {
                    // Logic: First item is Hero
                    const isHero = index === 0;

                    return (
                        <div key={service.id} className={isHero ? "col-span-1 md:col-span-2" : "col-span-1"}>
                            {isHero ? (
                                <>
                                    <div className="block md:hidden"><ServiceCard {...service} /></div>
                                    <div className="hidden md:block h-full"><ServiceHeroCard {...service} /></div>
                                </>
                            ) : (
                                <ServiceCard {...service} />
                            )}
                        </div>
                    );
                })}
            </div>
            
            {/* ADDED: The Handoff Banner */}
            <GrowthBanner />
        </section>
    );
};
export default ServicesGrid;