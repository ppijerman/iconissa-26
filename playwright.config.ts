import { defineConfig, devices } from '@playwright/test';

// Use process.env.PORT or fallback to 3000 (Next.js default)
const PORT = process.env.PORT || '3000';

const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',

  // Match test files
  testMatch: '*.@(spec|e2e).?(c|m)[jt]s?(x)',

  timeout: 30 * 1000,

  forbidOnly: !!process.env.CI,

  reporter: process.env.CI ? 'github' : 'list',

  expect: {
    timeout: 15 * 1000,
  },

  webServer: {
    command: 'npm run dev',
    url: baseURL,
    timeout: 60 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    baseURL,
    trace: process.env.CI ? 'on' : 'retain-on-failure',
    video: process.env.CI ? 'retain-on-failure' : 'off',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});