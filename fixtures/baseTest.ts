
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginData } from '../test-data/login.data';

type MyFixtures = {
  loggedInPage: void;
};

export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    await page.goto(
      'https://practicetestautomation.com/practice-test-login/'
    );

    await login.enterUsername(loginData.validUser.username);
    await login.enterPassword(loginData.validUser.password);
    await login.clickLogin();

    await use();
  },
});

export { expect };



export function normalizeText(text: string): string {
  return text.trim().toLowerCase();
}



