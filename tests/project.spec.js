const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const BASE_URL = 'http://localhost:3000/'; 

test('Page loads successfully', async ({ page }) => {
  const response = await page.goto(BASE_URL);
  expect(response.status()).toBe(200);
});

test('No console errors', async ({ page }) => {
  const consoleMessages = [];
  page.on('console', msg => {
      if (msg.type() === 'error') {
          consoleMessages.push(msg.text());
      }
  });
  await page.reload();
  expect(consoleMessages.length).toBe(0);
});

test('Check Portfolio header', async ({ page }) => {
  await page.goto(BASE_URL);
  const headerText = await page.textContent('h1');
  await expect(headerText).toContain('Welcome to My Portfolio');
});

test('Check Subscription section', async ({ page }) => {
  await page.goto(BASE_URL);
  const subscribeHeaderText = await page.textContent('h2');
  await expect(subscribeHeaderText).toContain('Want to get in touch?');
});

test('Check contact links', async ({ page }) => {
  await page.goto(BASE_URL);
  const emailLink = await page.locator('a[href^="mailto"]');
  await expect(emailLink).toBeVisible();
  
  const linkedinLink = await page.locator('a[href*="linkedin.com"]');
  await expect(linkedinLink).toBeVisible();

  const twitterLink = await page.locator('a[href*="twitter.com"]');
  await expect(twitterLink).toBeVisible();

  const githubLink = await page.locator('a[href*="github.com"]');
  await expect(githubLink).toBeVisible();
});
