import { Suspense } from 'react';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <ModernNavigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 