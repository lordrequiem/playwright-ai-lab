import { test, expect } from '../../fixtures';
import { users } from '../../data/users';

test.describe('Login', () => {
  test('standard user can log in', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL(/catalog/);
  });

  test('banned user triggers an error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.banned.username, users.banned.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });

  test('empty fields block submission', async ({ loginPage, page }) => {
    await loginPage.goto();
    await loginPage.submitButton.click();
    await expect(page).toHaveURL(/login/);
  });
});