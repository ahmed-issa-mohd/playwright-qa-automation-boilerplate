
import { Page } from '@playwright/test';

export async function takeScreenshot(
  page: Page,
  fileName: string
): Promise<void> {
  await page.screenshot({
    path: `screenshots/${fileName}.png`,
    fullPage: true,
  });
}
