/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Removed to support Server Actions (Hybrid Mode on Azure SWA)

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

  // Note: headers() function doesn't work with static export
  // Use staticwebapp.config.json instead for Azure Static Web Apps

  // Handle ESLint and TypeScript for static builds
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore due to upstream peer conflicts
  },
  typescript: {
    ignoreBuildErrors: false, // Keep TypeScript checking enabled
  }
};

module.exports = nextConfig;