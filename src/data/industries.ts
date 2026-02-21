// src/data/industries.ts

// 1. Define the shape of a single Tag
export interface Tag {
  name: string;
  link: string;
}

// 2. Define the shape of the Related Site object
export interface RelatedSite {
  name: string;
  link: string;
}

// 3. Define the main Industry object
export interface Industry {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  featured: boolean;
  tags?: Tag[];             
  relatedSite?: RelatedSite; 
}

// 4. The Data Array (Typed as Industry[])
export const industries: Industry[] = [
  {
    id: "education",
    title: "eLearning",
    shortDescription: "Architecting scalable digital learning environments, from corporate training portals to AI-driven student experiences.",
    image: "/industries/elearning.jpg",
    featured: true,
    tags: [
      { name: "LMS", link: "/resources?tab=glossary&search=LMS" },
      { name: "LXP", link: "/resources?tab=glossary&search=LXP" },
      { name: "mLearning", link: "/resources?tab=glossary&search=mLearning" }
    ],
    // Points to a demo or contact page if you don't have a demo yet
    relatedSite: { name: "EduFuture", link: "/industries-demo/education" } 
  },
  {
    id: "sports",
    title: "Sports",
    shortDescription: "Engineering high-concurrency platforms for real-time sports analytics, fantasy league drafting, and immersive fan engagement.",
    image: "/industries/sports.jpg",
    featured: true,
    tags: [
      { name: "Fitness", link: "/resources?tab=glossary&search=Fitness" },
      { name: "Cricket", link: "/resources?tab=glossary&search=Cricket" },
      { name: "Fantasy Engines", link: "/resources?tab=glossary&search=Fantasy%20Engnines" }
    ],
    relatedSite: { name: "ELITE FITNESS", link: "/industries-demo/sports" }
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortDescription: "Building secure, HIPAA-compliant digital health infrastructure, telemedicine portals, and advanced patient data systems.",
    image: "/industries/healthcare.jpg",
    featured: true,
    tags: [
      { name: "Telemedicine", link: "/resources?tab=glossary&search=Telemedicine" },
      { name: "EMR / EHR", link: "/resources?tab=glossary&search=EMR%20/%20EHR" },
      { name: "Hospital Management", link: "/resources?tab=glossary&search=Hospital%20Managemant" }
    ],
    relatedSite: { name: "Medix", link: "/industries-demo/healthcare" }
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortDescription: "Developing intelligent property technology, automated valuation models, and seamless brokerage management tools.",
    image: "/industries/realestate.jpg",
    featured: true,
    tags: [
      { name: "Property Management", link: "/resources?tab=glossary&search=Property%20Management" },
      { name: "MLS Integration", link: "/resources?tab=glossary&search=MLS%20Integration" },
      { name: "PropTech", link: "/resources?tab=glossary&search=PropTech" }
    ],
    relatedSite: { name: "LuxEstate", link: "/industries-demo/real-estate" }
  },
  {
    id: "enterprise",
    title: "Enterprise",
    shortDescription: "Designing robust, highly secure bespoke software to streamline complex corporate workflows and automate data processing.",
    image: "/industries/enterprise.jpg",
    featured: true,
    tags: [
      { name: "ERP Systems", link: "/resources?tab=glossary&search=ERP%20Systems" },
      { name: "CRM Customization", link: "/resources?tab=glossary&search=CRM%20Customization" },
      { name: "BI Dashboards", link: "/resources?tab=glossary&search=BI%20Dashboards" }
    ]
  },
  {
    id: "fintech",
    title: "Fintech",
    shortDescription: "Architecting secure, high-frequency financial platforms, custom payment gateways, and compliant lending systems.",
    image: "/industries/fintech.jpg",
    featured: true,
    tags: [
      { name: "P2P Lending", link: "/resources?tab=glossary&search=P2P%20Lending" },
      { name: "WealthTech", link: "/resources?tab=glossary&search=WealthTech" },
      { name: "Payment APIs", link: "/resources?tab=glossary&search=Payment%20APIs" }
    ],
    relatedSite: { name: "NovaTrade", link: "/industries-demo/fintech" }
  },
  {
    id: "travel",
    title: "Travel",
    shortDescription: "Engineering high-performance booking engines and dynamic inventory management systems for the modern hospitality industry.",
    image: "/industries/travel.jpg",
    featured: false,
    tags: [
      { name: "OTA Platforms", link: "/resources?tab=glossary&search=OTA%20Platforms" },
      { name: "Booking Engines", link: "/resources?tab=glossary&search=Booking%20Engines" },
      { name: "GDS Integration", link: "/resources?tab=glossary&search=GDS%20Integration" }
    ]
  },
  {
    id: "social",
    title: "Social",
    shortDescription: "Building real-time, highly concurrent social networking applications with seamless video streaming and chat architecture.",
    image: "/industries/social.jpg",
    featured: false,
    tags: [
      { name: "Real-time Chat", link: "/resources?tab=glossary&search=Real-time%20Chat" },
      { name: "Live Streaming", link: "/resources?tab=glossary&search=Live%20Streaming" },
      { name: "Community Hubs", link: "/resources?tab=glossary&search=Community%20Hubs" }
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    shortDescription: "Developing comprehensive logistics dashboards, warehouse management systems, and real-time fleet tracking solutions.",
    image: "/industries/supplychain.jpg",
    featured: false,
    tags: [
      { name: "Fleet Tracking", link: "/resources?tab=glossary&search=Fleet%20Tracking" },
      { name: "WMS", link: "/resources?tab=glossary&search=WMS" },
      { name: "Logistics ERP", link: "/resources?tab=glossary&search=Logistics%20ERP" }
    ]
  },
  {
    id: "insurance",
    title: "Insurance",
    shortDescription: "Automating underwriting processes and building seamless claims management portals for forward-thinking InsurTech firms.",
    image: "/industries/insurance.jpg",
    featured: false,
    tags: [
      { name: "InsurTech", link: "/resources?tab=glossary&search=InsurTech" },
      { name: "Claims Automation", link: "/resources?tab=glossary&search=Claims%20Automation" },
      { name: "Policy Admin", link: "/resources?tab=glossary&search=Policy%20Admin" }
    ]
  },
];