import { Suspense } from 'react';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <ScrollIndicator />

      <Suspense fallback={<LoadingSpinner />}>
        <CertificationsSection />
      </Suspense>
    </main>
  );
} 