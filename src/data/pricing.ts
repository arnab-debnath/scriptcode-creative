// src/data/pricing.ts

export interface PricingTier {
  name: string;
  price: number; // Changed to number for math
  description: string;
  highlight?: boolean;
  features: { name: string; included: boolean }[];
  buttonText: string;
}

export interface PricingCategory {
  id: "seo" | "dev";
  label: string;
  tiers: PricingTier[];
}

export const pricingData: PricingCategory[] = [
  {
    id: "seo",
    label: "Monthly Retainers",
    tiers: [
      {
        name: "Standard Care",
        price: 15000,
        description: "Essential security and maintenance.",
        features: [
          { name: "24/7 Uptime Monitoring", included: true },
          { name: "Weekly Cloud Backups", included: true },
          { name: "1 Hour Dev Time Included", included: true },
          { name: "Monthly Health Report", included: true },
          { name: "SEO Ranking Improvements", included: false },
        ],
        buttonText: "Secure My Site",
      },
      {
        name: "Growth Partner",
        price: 35000,
        description: "Consistent traffic growth and leads.",
        highlight: true,
        features: [
          { name: "Everything in Standard", included: true },
          { name: "Advanced SEO (25 Keywords)", included: true },
          { name: "2 High-Quality Blogs/mo", included: true },
          { name: "Competitor Strategy Spy", included: true },
          { name: "Priority WhatsApp Support", included: true },
        ],
        buttonText: "Start Growing",
      },
      {
        name: "Market Dominance",
        price: 75000,
        description: "Aggressive expansion for national brands.",
        features: [
          { name: "Everything in Growth", included: true },
          { name: "Authority Backlink Building", included: true },
          { name: "4 Premium Articles/mo", included: true },
          { name: "Conversion Rate Optimization", included: true },
          { name: "Dedicated Account Manager", included: true },
        ],
        buttonText: "Book Consultation",
      },
    ],
  },
  {
    id: "dev",
    label: "Development",
    tiers: [
      {
        name: "Landing Page",
        price: 25000,
        description: "High-impact single page site.",
        features: [
            { name: "Custom Next.js Design", included: true }, 
            { name: "Mobile Responsive", included: true },
            { name: "Contact Form", included: true }
        ],
        buttonText: "Get Quote",
      },
      {
        name: "Business Website",
        price: 60000,
        description: "Multi-page corporate website with CMS.",
        highlight: true,
        features: [
            { name: "Up to 10 Pages", included: true }, 
            { name: "Admin Dashboard", included: true },
            { name: "Blog Section", included: true }
        ],
        buttonText: "Build My Brand",
      },
      {
        name: "Custom Platform",
        price: 150000,
        description: "Complex web apps & SaaS.",
        features: [
            { name: "Full-Stack Architecture", included: true }, 
            { name: "User Auth & Payments", included: true },
            { name: "API Development", included: true }
        ],
        buttonText: "Contact Sales",
      },
    ],
  },
];

// Separate Data for the "Hourly" Plan
export const hourlyPlan = {
    name: "Flex / Hourly",
    price: 2500, // ₹2,500 per hour
    description: "No commitment. Pay strictly for the time used to fix bugs or make small updates.",
    features: [
        "Bug Fixes & Troubleshooting",
        "Small Design Tweaks",
        "Content Updates",
        "Consultation Calls",
        "Turnaround: 48-72 Hours"
    ]
};