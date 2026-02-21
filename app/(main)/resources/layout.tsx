// app/(main)/resources/layout.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights, Domain Solutions & Technical Resources',
  description: 'Explore the ScriptCode Innovation hub. Read our latest articles, browse our industry-specific tech glossary (LMS, EMR, Fintech), and find FAQs on digital growth.',
  keywords: [
    'software development blog', 
    'tech insights', 
    'industry tech glossary', 
    'custom software FAQs', 
    'digital agency resources',
    'LMS development',
    'telemedicine software'
  ],
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}