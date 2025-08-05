import { Suspense } from 'react';
import ProjectsSection from '@/components/sections/ProjectsSection';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <Header />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 