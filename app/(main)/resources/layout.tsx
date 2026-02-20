import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights, Guides & Technical Resources',
  description: 'Explore the ScriptCode Intelligence hub. Read our latest articles, technical guides, and FAQs on software engineering, UI/UX design, and digital growth.',
  keywords: ['software development blog', 'tech insights', 'coding guides', 'custom software FAQs', 'digital agency resources'],
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}