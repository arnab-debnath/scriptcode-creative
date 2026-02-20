import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Project Estimate & Blueprint',
  description: 'Calculate your software engineering timeline and budget. Select your tech requirements for custom software, web apps, or cloud architecture to get a precise quote.',
  keywords: ['software development estimate', 'app development cost', 'custom software quote', 'IT project budget', 'hire development team'],
};

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}