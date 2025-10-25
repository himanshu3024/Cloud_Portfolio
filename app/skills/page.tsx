import { Suspense } from 'react';
import SkillsSection from '@/components/sections/SkillsSection';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <ModernNavigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <SkillsSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 