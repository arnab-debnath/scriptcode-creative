// src/data/services.ts
import { 
  Globe, Code2, Smartphone, Rocket, Search, ShieldCheck, 
  Cpu, Layout, PenTool, CheckCircle, Eye, Terminal, Briefcase, BarChart 
} from "lucide-react";

export interface Service {
    id: string;
    title: string;
    description: string;
    type: "engineering" | "creative-handoff" | "consulting"; 
    image: string;
    icon: any;
    externalLink?: string;
}

export const services: Service[] = [
    // --- CORE ENGINEERING ---
    {
        id: "custom-software",
        title: "Custom Software Development",
        description: "Enterprise-grade architecture built with modern stacks (React, Node.js, Python). Specialized in solving complex business logic.",
        type: "engineering",
        image: "/services/services-card/custom-sw.webp",
        icon: Code2,
    },
    {
        id: "web-development",
        title: "Web Development",
        description: "High-performance, scalable web applications and progressive web apps (PWAs) engineered for speed and reliability.",
        type: "engineering",
        image: "/services/services-card/web-dev.webp",
        icon: Globe,
    },
    {
        id: "mobile-development",
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android built for seamless performance.",
        type: "engineering",
        image: "/services/services-card/mobile-dev.webp",
        icon: Smartphone,
    },
    {
        id: "devops-as-a-service",
        title: "DevOps as a Service",
        description: "Automating deployment pipelines, cloud infrastructure management, and monitoring for 99.9% uptime.",
        type: "engineering",
        image: "/services/services-card/dev-ops.webp",
        icon: Terminal,
    },

    // --- DESIGN & ACCESSIBILITY ---
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        description: "User-centric interface design and experience mapping to ensure your product is intuitive and engaging.",
        type: "engineering",
        image: "/services/services-card/ui-ux.webp",
        icon: PenTool,
    },
    {
        id: "web-accessibility",
        title: "Web Accessibility",
        description: "Ensuring your digital products are WCAG compliant and usable for everyone, regardless of ability.",
        type: "engineering",
        image: "/services/services-card/web-access.webp",
        icon: Eye,
    },

    // --- QUALITY & STRATEGY ---
    {
        id: "quality-assurance",
        title: "Quality Assurance",
        description: "Rigorous manual and automated testing to ensure your software is bug-free and production-ready.",
        type: "engineering",
        image: "/services/services-card/quality-assurance.webp",
        icon: CheckCircle,
    },
    {
        id: "code-audit",
        title: "Code Audit",
        description: "Deep-dive technical reviews of existing codebases to identify security risks and performance bottlenecks.",
        type: "engineering",
        image: "/services/services-card/code-audit2.webp",
        icon: ShieldCheck,
    },
    {
        id: "it-consulting",
        title: "IT Consulting",
        description: "Strategic guidance on technology adoption, digital transformation, and technical roadmap planning.",
        type: "consulting",
        image: "/services/services-card/it-consult.webp",
        icon: Briefcase,
    },
    {
        id: "business-analysis",
        title: "Business Analysis",
        description: "Bridging the gap between business goals and technical execution through detailed requirement gathering.",
        type: "consulting",
        image: "/services/services-card/business-analysis.webp",
        icon: BarChart,
    },

    

    // --- EXTERNAL HANDOFF ---
   {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Scale your reach with our specialized creative division. Visit our Digital Agency for SEO, Social Media, and Ads.",
        type: "creative-handoff",
        image: "/services/digital-marketing.png",
        icon: Search,
        externalLink: "https://creative.scriptcode.in" 
    },
];