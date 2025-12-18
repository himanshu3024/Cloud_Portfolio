import { Suspense } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent relative">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>
    </div>
  );
}