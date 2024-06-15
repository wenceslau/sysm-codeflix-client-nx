/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'], // Add the domain for the images, allow the images to be loaded from the domain
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};


export default nextConfig;
