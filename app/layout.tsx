import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import GlobalBackground from '@/components/layout/GlobalBackground';
import ModernNavigation from '@/components/layout/ModernNavigation';
import Footer from '@/components/layout/Footer';
import '../styles/app.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Himanshu Gandhi - Cloud & DevOps Professional',
  description: 'Cloud computing professional with expertise in AWS, Azure, GCP, Kubernetes, Docker, and DevOps practices. Specializing in infrastructure as code, CI/CD pipelines, and cloud-native solutions.',
  keywords: [
    'Cloud Computing',
    'DevOps',
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'Docker',
    'Terraform',
    'CI/CD',
    'Infrastructure as Code',
    'Cloud Security',
    'Toronto',
    'Canada'
  ],
  authors: [{ name: 'Himanshu Gandhi' }],
  creator: 'Himanshu Gandhi',
  publisher: 'Himanshu Gandhi',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://himanshu-gandhi.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Himanshu Gandhi - Cloud & DevOps Professional',
    description: 'Cloud computing professional with expertise in AWS, Azure, GCP, Kubernetes, Docker, and DevOps practices.',
    url: 'https://himanshu-gandhi.vercel.app',
    siteName: 'Himanshu Gandhi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Himanshu Gandhi - Cloud & DevOps Professional',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himanshu Gandhi - Cloud & DevOps Professional',
    description: 'Cloud computing professional with expertise in AWS, Azure, GCP, Kubernetes, Docker, and DevOps practices.',
    images: ['/og-image.jpg'],
    creator: '@himanshu_gandhi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Himanshu Gandhi',
            url: 'https://himanshu-gandhi.vercel.app',
            jobTitle: 'Cloud & DevOps Engineer',
            sameAs: [
              'https://github.com/himanshu3024',
              'https://www.linkedin.com/in/himanshu-gandhi-891204160/'
            ]
          })}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalBackground />
          <ModernNavigation />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}