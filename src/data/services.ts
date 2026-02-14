// src/data/services.ts
import { Globe, ShoppingBag, Code, Server, LucideIcon, Rocket, Megaphone, PenTool } from "lucide-react";

export interface Service {
    title: string;
    description: string;
    // We limit this to exactly two types for the toggle logic
    type: "premium" | "budget"; 
    image: string;
    icon: LucideIcon;
}

export const services: Service[] = [
    // --- PREMIUM SERVICES (High Tech, Custom) ---
    {
        title: "Custom Software Development",
        description: "Enterprise-grade web applications built with React, Node.js, and Python. Tailored exactly to your business logic.",
        type: "premium",
        image: "/services/custom-sw.png", // Make sure these images exist
        icon: Code,
    },
    {
        title: "SaaS Product Engineering",
        description: "End-to-end development of scalable Software-as-a-Service platforms, from MVP to IPO-ready architecture.",
        type: "premium",
        image: "/services/product-marketing.png",
        icon: Rocket,
    },
    {
        title: "Enterprise Mobile Apps",
        description: "High-performance native and cross-platform mobile applications for iOS and Android.",
        type: "premium",
        image: "/services/custom-sw.png",
        icon: Server,
    },

    // --- BUDGET / ESSENTIALS (Marketing, CMS, Shopify) ---
    {
        title: "Shopify & E-Commerce",
        description: "Rapidly deployed, high-converting stores using Shopify or WooCommerce templates.",
        type: "budget",
        image: "/services/shopify.png",
        icon: ShoppingBag,
    },
    {
        title: "WordPress & CMS",
        description: "Beautiful, easy-to-manage websites perfect for portfolios, blogs, and small businesses.",
        type: "budget",
        image: "/services/wordpress.png",
        icon: Globe,
    },
    {
        title: "Digital Marketing",
        description: "SEO, Social Media, and PPC campaigns designed to drive immediate traffic and leads.",
        type: "budget",
        image: "/services/digital-marketing.png",
        icon: Megaphone,
    },
    {
        title: "Branding & Identity",
        description: "Logo design, color palettes, and brand guidelines to give your business a professional look.",
        type: "budget",
        image: "/services/branding.png",
        icon: PenTool,
    },
    {
        title: "Content Creation",
        description: "Engaging copywriting and visuals to tell your brand's story effectively.",
        type: "budget",
        image: "/services/custom-sw.png",
        icon: PenTool,
    },
];