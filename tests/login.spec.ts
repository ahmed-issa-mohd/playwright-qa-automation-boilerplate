import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginLocators } from '../locators/login.locators';
import { loginData } from '../test-data/login.data';


test('Successful login', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterUsername(loginData.validUser.username);
  await login.enterPassword(loginData.validUser.password);
  await login.clickLogin();

  await expect(page).toHaveURL(/logged-in-successfully/);

  await page.screenshot({
    path: 'screenshots/successful-login.png',
    fullPage: true,
  });
});


test('Invalid username', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterUsername(loginData.invalidUser.username);
  await login.enterPassword(loginData.validUser.password);
  await login.clickLogin();

  await expect(page.locator(loginLocators.error)).toBeVisible();
});

test('Invalid password', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterUsername(loginData.validUser.username);
  await login.enterPassword('wrongPassword');
  await login.clickLogin();

  await expect(page.locator(loginLocators.error)).toBeVisible();
});

test('Empty username', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterPassword(loginData.validUser.password);
  await login.clickLogin();

  await expect(page.locator(loginLocators.error)).toBeVisible();
});

test('Empty password', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterUsername(loginData.validUser.username);
  await login.clickLogin();

  await expect(page.locator(loginLocators.error)).toBeVisible();
}); 