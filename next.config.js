/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

// Initialize bundle analyzer only when needed
const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : config => config;

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: '',
        pathname: '/dms/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  optimizeFonts: true,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  trailingSlash: false,
  webpack: (config, { dev, isServer }) => {
    // Production-only webpack config
    if (!dev) {
      // Add production optimizations here
    }

    // Client-side webpack config
    if (!isServer) {
      // Add client-side specific config here
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
