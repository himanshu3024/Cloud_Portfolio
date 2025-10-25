import { Suspense } from 'react';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function CertificationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <ModernNavigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <CertificationsSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 