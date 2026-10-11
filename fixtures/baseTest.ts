import { test as base, expect } from '@playwright/test';

type MyFixtures = {
  welcomeMessage: string;
};

export const test = base.extend<MyFixtures>({
  welcomeMessage: async ({}, use) => {
    await use('Welcome to the Login Tests!');
  },
});

export { expect };

