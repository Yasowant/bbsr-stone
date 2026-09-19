import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Optional escape hatch: if you would rather serve the photographs straight
    // from the legacy host instead of running `npm run fetch:assets`, you can
    // reference https://bbsrstone.com/images/... URLs directly.
    remotePatterns: [
      { protocol: "https", hostname: "bbsrstone.com", pathname: "/images/**" },
      { protocol: "https", hostname: "www.bbsrstone.com", pathname: "/images/**" },
    ],
  },
  // Keep the old .html URLs alive so existing links and search rankings
  // carry over to the rebuild.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/products.html", destination: "/products", permanent: true },
      { source: "/gallery.html", destination: "/gallery", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
