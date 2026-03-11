import { defineConfig } from 'vitest/config';
import path from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      include: ['src/**/*'],
      exclude: [
        'src/**/*.stories.{js,jsx,ts,tsx}',
        'src/**/*.d.ts',
      ],
    },
    reporters: process.env.CI ? ['default', 'github-actions'] : ['default'],
  },
});