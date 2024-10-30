// next.config.mjs
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  dest: 'public', // where to output the service worker files
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development', // disable PWA in development
  // You can add other PWA-specific options here
});

// Export the configuration with other Next.js settings if needed
export default {
  ...nextConfig,
  // Add any other Next.js configurations here
};
