import { Page } from '@playwright/test';
import { loginLocators } from '../locators/login.locators';

export class LoginPage {
  constructor(private page: Page) {}

  async enterUsername(username: string) {
    await this.page.locator(loginLocators.username).fill(username);
  }

  async enterPassword(password: string) {
    await this.page.locator(loginLocators.password).fill(password);
  }

  async clickLogin() {
    await this.page.locator(loginLocators.submit).click();
  }
}