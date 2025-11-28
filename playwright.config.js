// Playwright config for the e2e safety tests
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  timeout: 30 * 1000,
});
