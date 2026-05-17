import { Page, Locator } from '@playwright/test';

export class CatalogPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productGrid: Locator;
  readonly sortSelect: Locator;
  readonly filterInStock: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByTestId('search-input');
    this.searchButton = page.getByTestId('search-button');
    this.productGrid = page.getByTestId('product-grid');
    this.sortSelect = page.getByTestId('sort-select');
    this.filterInStock = page.getByTestId('filter-in-stock');
  }

  async goto() {
    await this.page.goto('/#/catalog');
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  productCard(slug: string) {
    return this.page.getByTestId(`product-card-${slug}`);
  }

  addToCart(slug: string) {
    return this.page.getByTestId(`add-to-cart-${slug}`);
  }

  productPrice(slug: string) {
    return this.page.getByTestId(`product-price-${slug}`);
  }

  qtyIncrease(slug: string) {
    return this.page.getByTestId(`qty-increase-${slug}`);
  }

  qtyValue(slug: string) {
    return this.page.getByTestId(`qty-value-${slug}`);
  }
}