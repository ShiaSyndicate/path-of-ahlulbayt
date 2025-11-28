const { test, expect } = require('@playwright/test');
const path = require('path');
const fs = require('fs');

test.describe('Safety checks', () => {
  test('modal source link is safe and use noopener', async ({ page }) => {
    const index = 'http://localhost:3000/index.html';
    // Start local server externally (like using `npx serve .`).
    await page.goto(index);
    // Click the Enter Timeline to get to timeline.html
    await page.click('a.enter-btn');

    await page.waitForLoadState('networkidle');
    // Wait for timeline to render
    await page.waitForSelector('body');
    // Open first event modal by clicking an event marker
    const eventMarker = await page.$('.event-marker');
    if (eventMarker) {
      await eventMarker.click();
      await page.waitForSelector('.modal-overlay.active');
      const link = await page.$('.modal-source-link');
      if (link) {
        const href = await link.getAttribute('href');
        expect(href).not.toMatch(/^javascript:/i);
        expect(href).not.toMatch(/^data:/i);
        const rel = await link.getAttribute('rel');
        expect(rel).toContain('noopener');
        expect(rel).toContain('noreferrer');
      }
    } else {
      test.skip();
    }
  });
});
