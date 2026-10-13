
import { test, expect } from '@playwright/test';

test('Successful login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator('#username').fill('student');
  await page.locator('#password').fill('Password123');
  await page.locator('#submit').click();

  await expect(page).toHaveURL(/logged-in-successfully/);
});

test('Invalid login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.locator('#username').fill('wrongUser');
  await page.locator('#password').fill('wrongPassword');
  await page.locator('#submit').click();

  await expect(page.locator('#error')).toBeVisible();
});
