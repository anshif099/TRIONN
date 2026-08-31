const { test, expect } = require('playwright/test');

test('public routes render without browser errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });

  for (const route of ['/', '/work/', '/services/', '/about/', '/contact/', '/trionn-story/', '/work/myworker-ai/']) {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response.status(), route).toBe(200);
    await expect(page.locator('body')).toHaveClass(/trionn-native-theme/);
  }
  expect(errors).toEqual([]);
});

test('team member drag runs identifying and detected reveal', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/about/', { waitUntil: 'networkidle' });
  const lab = page.locator('[data-team-lab]');
  await lab.scrollIntoViewIfNeeded();
  const card = page.locator('[data-team-card]').first();
  const scanner = page.locator('[data-scanner]');
  const cardBox = await card.boundingBox();
  const scannerBox = await scanner.boundingBox();
  expect(cardBox).not.toBeNull();
  expect(scannerBox).not.toBeNull();
  await page.mouse.move(cardBox.x + cardBox.width / 2, cardBox.y + cardBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(scannerBox.x + scannerBox.width / 2, scannerBox.y + scannerBox.height / 2, { steps: 15 });
  await page.mouse.up();
  await expect(scanner).toHaveClass(/is-detected/, { timeout: 5000 });
  await expect(scanner.locator('.scanner__identity strong')).toContainText('Prabhatsinh Maka');
  await expect(scanner.locator('video')).toHaveAttribute('src', /video\/team\/prabhat\.mp4/);
});

test('contact form stores an inquiry through WordPress AJAX', async ({ page }) => {
  await page.goto('/contact/', { waitUntil: 'networkidle' });
  const form = page.locator('#contact-inquiry');
  await form.locator('[name=name]').fill('Theme Test');
  await form.locator('[name=email]').fill('theme-test@example.com');
  await form.locator('[name=company]').fill('TRIONN QA');
  await form.locator('[name=service]').selectOption({ label: 'Web Development' });
  await form.locator('[name=message]').fill('This is a WordPress theme verification inquiry with enough detail.');
  await form.locator('[name=budget]').selectOption({ label: '$15K - $30K' });
  await form.locator('button[type=submit]').click();
  await expect(form).toHaveClass(/is-success/, { timeout: 10000 });
  await expect(form.locator('.form-status')).toContainText('conversation begins');
});

test('mobile header controls stay inside the viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/contact/', { waitUntil: 'networkidle' });
  const headerBox = await page.locator('.site-header').boundingBox();
  const actionsBox = await page.locator('.site-header__actions').boundingBox();
  const soundBox = await page.locator('.sound-toggle').boundingBox();
  const menuBox = await page.locator('.menu-toggle').boundingBox();
  console.log({ headerBox, actionsBox, soundBox, menuBox, viewport: page.viewportSize() });
  expect(menuBox.x + menuBox.width).toBeLessThanOrEqual(390);
});
