// src/data/portfolio.ts

export interface Project {
  id: string;
  title: string;
  category: "Web Dev" | "App Dev" | "Branding" | "Marketing";
  image: string;
  description: string;
  techStack: string[];
  link?: string;
  status: "Completed" | "In Development" | "Concept";
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NovaTrade AI",
    category: "Web Dev",
    image: "/portfolio/fintech.jpg", // Make sure this is a Landscape image
    description: "High-frequency trading platform with real-time data.",
    techStack: ["Next.js", "Python", "WebSockets"],
    status: "In Development",
    link: "#"
  },
  {
    id: "2",
    title: "Aura Aesthetics",
    category: "Branding",
    image: "/portfolio/fashion.jpg", // Make sure this is a Portrait (Tall) image
    description: "Luxury streetwear label identity.",
    techStack: ["Shopify", "React", "Framer"],
    status: "Concept",
    link: "#"
  },
  {
    id: "3",
    title: "Vitality Health",
    category: "App Dev",
    image: "/portfolio/health.jpg", // Square image
    description: "Telemedicine platform for secure video consults.",
    techStack: ["React Native", "Node.js"],
    status: "Concept",
    link: "#"
  },
  {
    id: "4",
    title: "Neon Architect",
    category: "Web Dev",
    image: "/portfolio/arch.jpg", // Tall image
    description: "Portfolio for a futuristic architecture firm.",
    techStack: ["Three.js", "WebGL", "Vue"],
    status: "Completed",
    link: "#"
  },
  {
    id: "5",
    title: "Zenith Bank",
    category: "Web Dev",
    image: "/portfolio/bank.jpg", // Landscape image
    description: "Corporate banking portal redesign.",
    techStack: ["Angular", "Java", "AWS"],
    status: "Completed",
    link: "#"
  },
  {
    id: "6",
    title: "Cyber Punk",
    category: "Marketing",
    image: "/portfolio/game.jpg", // Square image
    description: "Game launch landing page.",
    techStack: ["GSAP", "HTML5", "CSS"],
    status: "Concept",
    link: "#"
  },
];