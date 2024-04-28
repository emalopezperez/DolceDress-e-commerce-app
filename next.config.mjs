/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        protocol: "https",
      },
    ],
    domains: ["images.unsplash.com", "hongotheme.myshopify.com"],
  },
};

export default nextConfig;
