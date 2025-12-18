import { Suspense } from 'react';
import ContactSection from '@/components/sections/ContactSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
    </main>
  );
} 