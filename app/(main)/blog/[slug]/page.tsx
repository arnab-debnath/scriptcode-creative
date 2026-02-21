import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Tag, Calendar, User, CheckCircle2 } from 'lucide-react';
import { Metadata } from 'next';

// Import your rich data array
import { articles } from '../../../../src/data/articles';
import PremiumCTA from '@/src/component/PremiumCTA';

// Define the expected params
interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// ==========================================
// 1. SEO & SOCIAL MEDIA METADATA GENERATION
// ==========================================
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return { title: 'Article Not Found | ScriptCode Innovation' };
  }

  // Your live production domain for absolute URL generation
  const siteUrl = 'https://scriptcodeinnovation.com'; 

  return {
    title: `${article.title} | ScriptCode Innovation`,
    description: article.excerpt,
    
    // Open Graph (LinkedIn, Facebook, WhatsApp)
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      url: `${siteUrl}/blog/${article.slug}`,
      images: [
        {
          url: `${siteUrl}${article.image}`, // Forces the absolute URL for the image
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    
    // Twitter/X Cards
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [`${siteUrl}${article.image}`],
    }
  };
}

// ==========================================
// 2. THE PAGE UI COMPONENT
// ==========================================
export default async function BlogPostPage({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#010506] text-white min-h-screen pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        
        {/* Back Navigation */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-400 font-bold text-sm mb-12 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-6 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1 text-cyan-400 bg-cyan-900/20 px-3 py-1.5 rounded-full border border-cyan-500/20">
              <Tag size={14} /> {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight tracking-tight text-white">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed border-l-4 border-purple-500 pl-6 mb-12 font-medium">
            {article.excerpt}
          </p>

          {/* Hero Image */}
          <div className="w-full h-[400px] md:h-[500px] rounded-3xl relative overflow-hidden flex items-center justify-center border border-white/10 shadow-2xl bg-[#0B1215]">
             <Image 
                src={article.image}
                alt={article.title}
                fill
                priority
                className="object-cover opacity-90"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#010506] via-transparent to-transparent opacity-90"></div>
          </div>
        </header>

        {/* Article Body */}
        <div className="space-y-12">
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                {article.content.intro.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}
            </div>

            {article.content.sections.map((section, idx) => (
                <section key={idx} className="space-y-6 pt-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        {section.heading}
                    </h2>
                    {section.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="text-lg text-gray-300 leading-relaxed">
                            {para}
                        </p>
                    ))}
                    {section.listItems && (
                        <ul className="mt-8 space-y-4 bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl">
                            {section.listItems.map((item, lIdx) => (
                                <li key={lIdx} className="flex items-start gap-3 text-gray-300">
                                    <CheckCircle2 className="text-cyan-400 shrink-0 mt-1" size={20} />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}

            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-8 rounded-3xl mt-12">
                <h3 className="text-xl font-bold text-purple-400 mb-4">The Bottom Line</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                    {article.content.conclusion}
                </p>
            </div>
        </div>
      </article>

      {/* The Premium Ask */}
      <PremiumCTA />
      
    </div>
  );
}