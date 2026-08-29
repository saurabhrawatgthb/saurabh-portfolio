/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: blob: https:;
  font-src 'self' data: https://fonts.gstatic.com;
  connect-src 'self' https://formsubmit.co blob: data:;
  media-src 'self' data: blob:;
  object-src 'none';
  base-uri 'self';
  form-action 'self' https://formsubmit.co;
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), screen-wake-lock=()",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // Prevents X-Powered-By: Next.js server fingerprinting
  async redirects() {
    return [
      {
        source: "/.env",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.env/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.git",
        destination: "/",
        permanent: false,
      },
      {
        source: "/.git/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-admin",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-login",
        destination: "/",
        permanent: false,
      },
      {
        source: "/wp-login/:path*",
        destination: "/",
        permanent: false,
      },
      {
        source: "/phpmyadmin",
        destination: "/",
        permanent: false,
      },
      {
        source: "/phpmyadmin/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
