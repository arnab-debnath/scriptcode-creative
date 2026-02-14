// src/components/home/ServiceHeroCard.tsx
import React from 'react';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceHeroCardProps {
    title: string;
    description: string;
    image: string;
    icon?: LucideIcon;
}

const ServiceHeroCard: React.FC<ServiceHeroCardProps> = ({ title, description, image, icon: Icon }) => {
    return (
        <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#060b10] group min-h-[400px] flex items-center">
            
            {/* 1. BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                 <img 
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#010407] via-[#010407]/70 to-[#010407]/40"></div>
            </div>

            {/* 2. MAIN CONTAINER */}
            <div className="relative z-10 w-full h-full p-8 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                
                {/* LEFT SIDE */}
                <div className="flex flex-col justify-center items-start">
                     {/* Floating Icon */}
                     <div className="mb-6 w-fit p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
                        {Icon && <Icon size={32} className="text-cyan-400" />}
                    </div>

                    <h3 className="w-full md:w-2/3 text-4xl md:text-6xl font-black text-white uppercase leading-[0.95] tracking-tighter mb-6 drop-shadow-lg">
                        {title}
                    </h3>
                    
                    <p className="text-gray-200 text-lg md:text-lg font-normal max-w-lg leading-relaxed drop-shadow-md">
                        {description}
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="w-full md:w-auto flex justify-start md:justify-end mt-4 md:mt-0">
                    <button className="group/btn relative lg:absolute flex items-center gap-4 pl-6 pr-6 py-5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-gradient-to-r from-red-500 to-red-900 transition-all duration-300 cursor-pointer">
                        <div className="relative flex flex-col items-start">
                            <span className="text-lg font-bold text-white leading-none">
                                Explore Now
                            </span>
                        </div>
                        {/* Animated Circle Arrow */}
                        <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black group-hover/btn:rotate-45 transition-transform duration-300">
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ServiceHeroCard;