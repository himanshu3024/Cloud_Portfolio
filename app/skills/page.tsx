import { Suspense } from 'react';
import SkillsSection from '@/components/sections/SkillsSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <SkillsSection />
      </Suspense>
    </main>
  );
} 