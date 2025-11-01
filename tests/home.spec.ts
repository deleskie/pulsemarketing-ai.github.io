import { test, expect } from '@playwright/test';

test('home hero renders with call to action', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Stage cinematic brand moments with an AI-powered launch studio.',
  );

  await expect(page.getByRole('link', { name: 'Explore Programs' })).toBeVisible();
  await expect(page.getByText('Pulse Marketing AI', { exact: true }).first()).toBeVisible();
});
