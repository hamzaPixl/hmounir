/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

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
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '/gh/devicons/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/dms/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  compress: true,
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  trailingSlash: false,
};

module.exports = withBundleAnalyzer(nextConfig);
