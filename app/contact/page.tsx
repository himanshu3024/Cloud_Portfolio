import { Suspense } from 'react';
import ContactSection from '@/components/sections/ContactSection';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollIndicator />
      <ModernNavigation />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
      
      <Footer />
    </main>
  );
} 