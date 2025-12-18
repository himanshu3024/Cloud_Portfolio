import { Suspense } from 'react';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-transparent">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <ExperienceSection />
      </Suspense>
    </main>
  );
} 