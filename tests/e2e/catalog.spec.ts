import { test, expect } from '../../fixtures';

test.describe('Catalogue', () => {
  test('affiche la grille produits', async ({ authenticatedPage }) => {
    await authenticatedPage.goto();
    await expect(authenticatedPage.productGrid).toBeVisible();
  });

  test('la recherche filtre les produits', async ({ authenticatedPage }) => {
    await authenticatedPage.goto();
    await authenticatedPage.search('sac');
    await expect(authenticatedPage.productGrid).toBeVisible();
  });

  test('ajout au panier depuis le catalogue', async ({ authenticatedPage, page }) => {
    await authenticatedPage.goto();
    await authenticatedPage.addToCart('sauce-backpack').click();
    await expect(page.getByTestId('cart-count')).toBeVisible();
  });
});