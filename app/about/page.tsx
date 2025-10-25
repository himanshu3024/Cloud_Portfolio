'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import ErrorBoundary from '@/components/ErrorBoundary';

const AboutSection = dynamic(() => import('@/components/sections/AboutSection'), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

export default function AboutPage() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-background">
        <ScrollIndicator />
        <ModernNavigation />
        <AboutSection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}