import { Suspense } from 'react';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <ProjectsSection />
      </Suspense>
    </main>
  );
} 