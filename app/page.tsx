import { Suspense } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <Header />
      
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 