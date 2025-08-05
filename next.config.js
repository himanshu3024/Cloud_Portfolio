/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for deployment (REQUIRED for Azure Static Web Apps)
  output: 'export',
  
  // Image configuration for static export
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'via.placeholder.com', 'avatars.githubusercontent.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Enable static exports for deployment
  trailingSlash: true,
  
  // Optimize for performance
  compress: true,
  poweredByHeader: false,
  
  // Security headers (Note: Some may not work with static hosting)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Handle ESLint and TypeScript for static builds
  eslint: {
    ignoreDuringBuilds: false, // Keep ESLint checking enabled
  },
  typescript: {
    ignoreBuildErrors: false, // Keep TypeScript checking enabled
  }
};

module.exports = nextConfig;