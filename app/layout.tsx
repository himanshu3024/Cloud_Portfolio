import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'react-hot-toast';
import './globals.css';

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
        <link rel="preload" as="font" href="/fonts/inter.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Himanshu Gandhi',
            url: 'https://himanshu-gandhi.vercel.app',
            jobTitle: 'Cloud & DevOps Engineer',
            sameAs: [
              'https://github.com/himanshu-gandhi',
              'https://linkedin.com/in/himanshu-gandhi'
            ]
          })}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
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