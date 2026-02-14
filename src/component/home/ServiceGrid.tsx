// src/components/home/ServicesGrid.tsx
import React from 'react';
import { services } from "../../data/services"; // Ensure path correct
import ServiceCard from "./ServiceCard";
import ServiceHeroCard from "./ServiceHeroCard";
import ServicesIntro from "./ServicesIntro";

const ServicesGrid: React.FC = () => {
    
    // Logic to identify Hero items
    const isHeroItem = (index: number, title: string) => {
        return index === 0 || title === "Digital Marketing";
    };

    return (
        <section className="max-full mx-auto">
            <ServicesIntro />
            
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {services.map((service, index) => {
                    const isHero = isHeroItem(index, service.title);

                    return (
                        <div 
                            key={index} 
                            className={isHero ? "col-span-1 md:col-span-2" : "col-span-1"}
                        >
                            {isHero ? (
                                <>
                                    {/* MOBILE VIEW */}
                                    <div className="block md:hidden">
                                        <ServiceCard 
                                            title={service.title}
                                            description={service.description}
                                            image={service.image}
                                            icon={service.icon}
                                            type={service.type}
                                        />
                                    </div>

                                    {/* DESKTOP VIEW */}
                                    <div className="hidden md:block h-full">
                                        <ServiceHeroCard 
                                            title={service.title}
                                            description={service.description}
                                            image={service.image}
                                            icon={service.icon}
                                        />
                                    </div>
                                </>
                            ) : (
                                <ServiceCard 
                                    title={service.title}
                                    description={service.description}
                                    image={service.image}
                                    icon={service.icon}
                                    type={service.type}
                                />
                            )}
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default ServicesGrid;