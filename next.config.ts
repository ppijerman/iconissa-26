import type { NextConfig } from 'next';
//import './src/libs/Env';

const nextConfig: NextConfig = {
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production',
  outputFileTracingIncludes: {
    '/': ['./migrations/**/*'],
  },
};

export default nextConfig;
