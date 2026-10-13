
import { LoginPage } from '../pages/LoginPage';
import { loginLocators } from '../locators/login.locators';
import { loginData } from '../test-data/login.data';

import { test, expect } from '../fixtures/baseTest';

import { takeScreenshot } from '../utils/screenshot.utils';



test('Successful login', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await login.enterUsername(loginData.validUser.username);
  await login.enterPassword(loginData.validUser.password);
  await login.clickLogin();

  await expect(page).toHaveURL(/wrong-page-url/);

  await takeScreenshot(page, 'successful-login');
});


// Verify that the logout link is visible using the loggedInPage fixture.
test('Verify logout link is visible', async ({ loggedInPage, page }) => {
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();
});




test('Invalid username', async ({ page }) => {
  const login = new LoginPage(page);

  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await login.enterUsername(loginData.invalidUser.username);
  await login.enterPassword(loginData.validUser.password);
  await login.clickLogin();

  await expect(page.locator(loginLocators.error)).toBeVisible();

  await takeScreenshot(page, 'invalid-username');
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