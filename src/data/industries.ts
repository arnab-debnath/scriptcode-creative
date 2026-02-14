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
  tags?: Tag[];             // Optional: Not every industry has tags
  relatedSite?: RelatedSite; // Optional: Not every industry has a related site
}

// 4. The Data Array (Typed as Industry[])
export const industries: Industry[] = [
  {
    id: "education",
    title: "eLearning",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/elearning.jpg",
    featured: true,
    tags: [
      { name: "LMS", link: "/" },
      { name: "LPX", link: "/" },
      { name: "mLearning", link: "/" }
    ],
    relatedSite: { name: "EduFuture", link: "/" }
  },
  {
    id: "sports",
    title: "Sports",
    shortDescription: "Delivering cutting-edge sports software solutions to improve athlete performance, fan engagement, and data analysis for better results.",
    image: "/industries/sports.jpg",
    featured: true,
    tags: [
      { name: "Fitness", link: "/" },
      { name: "Cricket", link: "/" },
      { name: "Fantasy", link: "/" }
    ],
    relatedSite: { name: "ELITE FITNESS", link: "/" }
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/healthcare.jpg",
    featured: true,
    tags: [
      { name: "Telemedicine", link: "/" },
      { name: "EMR/EHR", link: "/" },
      { name: "Hospital Management", link: "/" }
    ],
    relatedSite: { name: "Medix", link: "/" }
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/realestate.jpg",
    featured: true,
    tags: [
      { name: "Property Management", link: "/" },
      { name: "Multiple Listing", link: "/" }
    ],
    relatedSite: { name: "LuxEstate", link: "/" }
  },
  {
    id: "enterprise",
    title: "Enterprise",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/enterprise.jpg",
    featured: true,
    // tags and relatedSite are missing here, which is fine because we made them optional (?)
  },
  {
    id: "fintech",
    title: "Fintech",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/fintech.jpg",
    featured: true,
    tags: [
      { name: "P2P Lending", link: "/" }
    ],
  },
  {
    id: "travel",
    title: "Travel",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/travel.jpg",
    featured: false,
  },
  {
    id: "social",
    title: "Social",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/social.jpg",
    featured: false,
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/supplychain.jpg",
    featured: false,
  },
  {
    id: "insurance",
    title: "Insurance",
    shortDescription: "We create interactive eLearning platforms.",
    image: "/industries/insurance.jpg",
    featured: false,
  },
];