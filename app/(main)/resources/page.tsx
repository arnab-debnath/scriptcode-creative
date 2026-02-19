"use client";

import React, { useState } from 'react';
import { 
  Search, BookOpen, ChevronDown, ChevronUp, ArrowRight, 
  Clock, Tag, HelpCircle, FileText 
} from 'lucide-react';
import Link from 'next/link';

// 1. DUMMY BLOG DATA (You can replace this with real data later)
const articles = [
  {
    id: 1,
    title: "Why Your Business Needs a Custom Web App in 2026",
    excerpt: "Off-the-shelf solutions like Wix are great for starters, but custom engineering is what scales your revenue.",
    category: "Development",
    readTime: "5 min read",
    image: "bg-gradient-to-br from-purple-900 to-blue-900", // Placeholder for real image
    date: "Feb 10, 2026"
  },
  {
    id: 2,
    title: "SEO vs. Paid Ads: Where Should You Invest?",
    excerpt: "Organic traffic builds long-term assets, while ads give quick boosts. Here is the math behind the ROI.",
    category: "Marketing",
    readTime: "7 min read",
    image: "bg-gradient-to-br from-cyan-900 to-blue-900",
    date: "Feb 02, 2026"
  },
  {
    id: 3,
    title: "The Tech Stack We Use to Build Fast SaaS Products",
    excerpt: "A deep dive into Next.js 15, React Server Components, and why we chose Python for backend logic.",
    category: "Engineering",
    readTime: "10 min read",
    image: "bg-gradient-to-br from-pink-900 to-purple-900",
    date: "Jan 28, 2026"
  }
];

// 2. FAQ DATA
const faqs = [
  {
    question: "How much does a custom website cost?",
    answer: "It depends on complexity. A simple landing page starts at ₹15,000, while a full-scale SaaS application can range from ₹75,000 to ₹3 Lakhs. Use our 'Estimate' page to get a ballpark figure."
  },
  {
    question: "How long does it take to build a project?",
    answer: "Standard websites usually take 2-3 weeks. Custom web applications (MVPs) typically take 4-8 weeks depending on the features required."
  },
  {
    question: "Do you provide hosting and maintenance?",
    answer: "Yes! We offer monthly maintenance packages (Standard Care & Growth Partner) that cover hosting, security updates, and regular backups so you don't have to worry about a thing."
  },
  {
    question: "What happens after the project is finished?",
    answer: "We provide 30 days of free support to fix any bugs. after that, you can choose a maintenance plan or we can hand over the code to your internal team."
  },
  {
    question: "Do I own the code?",
    answer: "Absolutely. Once the final payment is cleared, you own 100% of the Intellectual Property (IP), source code, and design assets."
  }
];

export default function ResourcesPage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Simple search filter logic
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6">
      
      {/* 1. HERO SECTION */}
      <section className="text-center max-w-4xl mx-auto mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-bold mb-6">
            <BookOpen size={16} />
            <span>ScriptCode Intelligence</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
            Resources & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Insights
            </span>
        </h1>
        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Everything you need to know about building digital products, scaling businesses, and understanding the tech landscape.
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-center bg-[#0B1215] border border-white/10 rounded-full px-6 py-4 shadow-2xl">
                <Search className="text-gray-500 mr-4" size={20} />
                <input 
                    type="text" 
                    placeholder="Search articles (e.g., SEO, React, Cost)..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent w-full focus:outline-none text-white placeholder-gray-600"
                />
            </div>
        </div>
      </section>

      {/* 2. BLOG GRID */}
      <section className="max-w-7xl mx-auto mb-32">
        <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
                <FileText className="text-purple-500" /> Latest Articles
            </h2>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium hidden md:block">
                View All Archives &rarr;
            </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                    <article key={article.id} className="group bg-[#0B1215] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:translate-y-[-5px]">
                        {/* Image Placeholder */}
                        <div className={`h-48 w-full ${article.image} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        
                        <div className="p-8">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                                <span className="flex items-center gap-1 text-cyan-400 font-bold bg-cyan-900/20 px-2 py-1 rounded">
                                    <Tag size={12} /> {article.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} /> {article.readTime}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-purple-400 transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {article.excerpt}
                            </p>

                            <Link href={`/resources/blog/${article.id}`} className="inline-flex items-center gap-2 text-white font-bold text-sm hover:gap-3 transition-all">
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </article>
                ))
            ) : (
                <div className="col-span-full text-center py-20 text-gray-500">
                    No articles found matching "{searchQuery}".
                </div>
            )}
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto mb-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
                <HelpCircle className="text-cyan-400" /> 
                Common Questions
            </h2>
            <p className="text-gray-400">
                Answers to the most frequent questions about our process and pricing.
            </p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, index) => {
                const isOpen = activeAccordion === index;
                return (
                    <div 
                        key={index} 
                        onClick={() => toggleAccordion(index)}
                        className={`cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                            isOpen 
                                ? "bg-[#0f1921] border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.05)]" 
                                : "bg-[#0B1215] border-white/5 hover:border-white/10"
                        }`}
                    >
                        <div className="p-6 flex items-center justify-between">
                            <h3 className={`font-bold text-lg transition-colors ${isOpen ? "text-cyan-400" : "text-white"}`}>
                                {faq.question}
                            </h3>
                            <div className={`p-2 rounded-full transition-all ${isOpen ? "bg-cyan-500/20 text-cyan-400 rotate-180" : "bg-white/5 text-gray-400"}`}>
                                <ChevronDown size={20} />
                            </div>
                        </div>
                        
                        <div 
                            className={`px-6 text-gray-400 leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
                                isOpen ? "max-h-[200px] pb-6 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                )
            })}
        </div>
      </section>

      {/* 4. CTA BANNER */}
      <section className="max-w-5xl mx-auto text-center py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
        <p className="text-gray-400 mb-8">
            Can't find the answer you're looking for? Chat with our team directly.
        </p>
        <div className="flex justify-center gap-4">
            <Link href="/contact">
                <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                    Contact Support
                </button>
            </Link>
            <a href="https://wa.me/918100300910" target="_blank" className="px-8 py-3 bg-[#0B1215] border border-white/10 text-white rounded-full font-bold hover:bg-white/5 transition-colors">
                WhatsApp Us
            </a>
        </div>
      </section>

    </div>
  );
}