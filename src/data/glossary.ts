// src/data/glossary.ts

export interface GlossaryTerm {
  id: string;
  term: string;
  def: string;
  industry: string;
}

export const capabilities: GlossaryTerm[] = [
  // --- eLearning ---
  { id: "c1", term: "LMS", def: "Custom platforms for delivering, tracking, and managing educational courses or corporate training programs.", industry: "eLearning" },
  { id: "c2", term: "LXP", def: "AI-driven learning environments that curate personalized content and track learner engagement.", industry: "eLearning" },
  { id: "c3", term: "mLearning", def: "Mobile-first educational applications designed for micro-learning and offline access.", industry: "eLearning" },

  // --- Healthcare ---
  { id: "c4", term: "Telemedicine", def: "Secure, HIPAA-compliant video consultation and remote patient monitoring portals.", industry: "Healthcare" },
  { id: "c5", term: "EMR / EHR", def: "Electronic Medical/Health Records systems for digitized patient history, prescriptions, and lab results.", industry: "Healthcare" },
  { id: "c6", term: "Hospital Management", def: "End-to-end ERP solutions for managing staff, beds, billing, and clinical workflows.", industry: "Healthcare" },

  // --- Real Estate ---
  { id: "c7", term: "Property Management", def: "Dashboards for landlords to automate rent collection, maintenance requests, and tenant screening.", industry: "Real Estate" },
  { id: "c8", term: "MLS Integration", def: "API connections that sync real-time property inventories across regional real estate brokerages.", industry: "Real Estate" },
  { id: "c9", term: "PropTech", def: "Innovative property technology utilizing automated valuation models (AVMs) and smart contracts.", industry: "Real Estate" },

  // --- Fintech ---
  { id: "c10", term: "P2P Lending", def: "Secure fintech platforms connecting borrowers directly with investors, featuring automated risk scoring.", industry: "Fintech" },
  { id: "c11", term: "WealthTech", def: "Robo-advisory and portfolio management dashboards for modern investment firms.", industry: "Fintech" },
  { id: "c12", term: "Payment APIs", def: "Custom gateway integrations ensuring PCI-DSS compliant, high-frequency transaction processing.", industry: "Fintech" },

  // --- Enterprise ---
  { id: "c13", term: "ERP Systems", def: "Enterprise Resource Planning software custom-built to unify finance, HR, and operations into one dashboard.", industry: "Enterprise" },
  { id: "c14", term: "CRM Customization", def: "Bespoke Customer Relationship Management tools tailored to your exact sales pipeline.", industry: "Enterprise" },
  { id: "c15", term: "BI Dashboards", def: "Business Intelligence interfaces that turn complex datasets into actionable, real-time visual insights.", industry: "Enterprise" },

  // --- Sports ---
  { id: "c16", term: "Fitness", def: "Wearable integrations and custom performance tracking apps for athletes and trainers.", industry: "Sports" },
  { id: "c17", term: "Cricket", def: "Specialized scoring algorithms, coaching portals, and league management software for cricket associations.", industry: "Sports" },
  { id: "c18", term: "Fantasy Engines", def: "High-concurrency platforms that handle real-time match stats, draft mechanics, and secure payouts.", industry: "Sports" },

  // --- Travel ---
  { id: "c19", term: "OTA Platforms", def: "Online Travel Agency booking engines with dynamic pricing algorithms and secure payment gateways.", industry: "Travel" },
  { id: "c20", term: "Booking Engines", def: "Direct-to-consumer reservation systems for hotels, airlines, and local experiences.", industry: "Travel" },
  { id: "c21", term: "GDS Integration", def: "Global Distribution System connections (Amadeus, Sabre) for real-time flight and hotel inventory syncing.", industry: "Travel" },

  // --- Social ---
  { id: "c22", term: "Real-time Chat", def: "Low-latency messaging architecture using WebSockets for instant, secure communication.", industry: "Social" },
  { id: "c23", term: "Live Streaming", def: "Scalable video broadcasting architecture with adaptive bitrate streaming for massive audiences.", industry: "Social" },
  { id: "c24", term: "Community Hubs", def: "Custom forum and membership platforms designed specifically for high user engagement and retention.", industry: "Social" },

  // --- Supply Chain ---
  { id: "c25", term: "Fleet Tracking", def: "Real-time GPS routing and telematics dashboards for logistics and delivery networks.", industry: "Supply Chain" },
  { id: "c26", term: "WMS", def: "Warehouse Management Systems featuring barcode scanning, inventory tracking, and logistics automation.", industry: "Supply Chain" },
  { id: "c27", term: "Logistics ERP", def: "End-to-end resource planning tools specifically engineered for global supply chain operations.", industry: "Supply Chain" },

  // --- Insurance ---
  { id: "c28", term: "InsurTech", def: "Digital transformation solutions for the insurance sector, including secure customer portals.", industry: "Insurance" },
  { id: "c29", term: "Claims Automation", def: "AI-driven workflows that process, verify, and expedite insurance claims with minimal human intervention.", industry: "Insurance" },
  { id: "c30", term: "Policy Admin", def: "Core systems for managing the entire lifecycle of insurance policies, from quoting to renewal.", industry: "Insurance" }
];