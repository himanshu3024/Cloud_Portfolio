import { Suspense } from 'react';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <ModernNavigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ExperienceSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 