/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      // Case-only changes (dr-manasi-Das, dr-Asutosh-Rout) are redirected by proxy.ts:
      // Next.js matches redirects case-insensitively, so listing them here would loop.
      { source: "/doctors/dr-abhash-dash", destination: "/doctors/dr-abhas-dash", permanent: true },
    ];
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

module.exports = nextConfig;
