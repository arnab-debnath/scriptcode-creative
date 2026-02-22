// src/components/home/ServiceCard.tsx
import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
    id: string;          
    title: string;
    description: string;
    image: string;
    icon?: LucideIcon;
    externalLink?: string; 
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, image, icon: Icon, externalLink }) => {
    const isExternal = !!externalLink;

    const CardInner = (
        <section className="group relative w-full h-[320px] md:h-[280px] rounded-2xl overflow-hidden border border-white/10 bg-[#060b10] cursor-pointer shadow-lg hover:shadow-xl transition-shadow">
            {/* Inside CardInner, replace the img tag with this: */}
                <div className="absolute inset-0">
                    <Image 
                        src={image} 
                        alt={title} 
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover opacity-90 group-hover:scale-110 group-hover:opacity-70 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020609] via-[#020609]/90 to-transparent"></div>
                </div>
            
            <div className="relative z-10 h-full p-8 flex flex-col justify-end items-start">
                <div className="mb-auto -mt-2 p-3 bg-black/50 backdrop-blur-md rounded-xl border border-white/20 shadow-lg transition-colors">
                    {Icon && <Icon size={24} className="text-white group-hover:text-red-500 transition-colors duration-300" />}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                    {title}
                </h3>
                
                <p className="text-gray-300 text-sm line-clamp-2 mb-4 drop-shadow-md">
                    {description}
                </p>

                <div className="flex items-center gap-2 text-sm font-bold text-red-500 group-hover:text-white transition-colors">
                    <span>{isExternal ? "Visit Digital Agency" : "Explore Service"}</span>
                    <ArrowUpRight size={16} />
                </div>
            </div>
        </section>
    );

    if (isExternal) {
        return (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                {CardInner}
            </a>
        );
    }

    return (
        <Link href={`/services/${id}`} className="block w-full">
            {CardInner}
        </Link>
    );
};

export default ServiceCard;