import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Selected Works & Case Studies',
  description: 'Explore our portfolio of custom software, scalable web applications, and enterprise mobile apps. See how we drive growth through elite engineering and design.',
  keywords: ['software development portfolio', 'web development case studies', 'mobile app projects', 'engineering agency work', 'tech stack examples'],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}