import { test, expect } from '../../fixtures';

test.describe('Catalog', () => {
  test('displays the product grid', async ({ authenticatedPage }) => {
    await authenticatedPage.goto();
    await expect(authenticatedPage.productGrid).toBeVisible();
  });

  test('search filters the products', async ({ authenticatedPage }) => {
    await authenticatedPage.goto();
    await authenticatedPage.search('sac');
    await expect(authenticatedPage.productGrid).toBeVisible();
  });

  test('adds a product to the cart from the catalog', async ({ authenticatedPage, page }) => {
    await authenticatedPage.goto();
    await authenticatedPage.addToCart('sauce-backpack').click();
    await expect(page.getByTestId('cart-count')).toBeVisible();
  });
});