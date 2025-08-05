'use client';

import dynamic from 'next/dynamic';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import Header from '@/components/layout/Header';
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
        <Header />
        <AboutSection />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}