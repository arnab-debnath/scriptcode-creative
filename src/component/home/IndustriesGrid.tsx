// src/components/home/IndustriesGrid.tsx
import React from 'react';
import { industries } from "../../data/industries"; // Ensure this path is correct
import IndustryCard from "./IndustriesCard";

const featuredIndustries = industries.filter((industry) => industry.featured);

const IndustriesGrid: React.FC = () => {
  return (
    <section className="w-full mx-auto md:px-6 py-24 bg-[#010506]">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Industries We Serve
        </h2>
        <div className="w-16 h-1 bg-purple-600 mt-4 rounded-full"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {featuredIndustries.map((industry) => (
          <IndustryCard
            key={industry.id}
            name={industry.title}
            description={industry.shortDescription}
            image={industry.image}
            tags={industry.tags}
            relatedSite={industry.relatedSite}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesGrid;