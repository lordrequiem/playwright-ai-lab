import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartContainer: Locator;
  readonly cartTotal: Locator;
  readonly cartSubtotal: Locator;
  readonly cartTax: Locator;
  readonly checkoutButton: Locator;
  readonly promoInput: Locator;
  readonly promoApply: Locator;
  readonly cartCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartContainer = page.getByTestId('cart-container');
    this.cartTotal = page.getByTestId('cart-total');
    this.cartSubtotal = page.getByTestId('cart-subtotal');
    this.cartTax = page.getByTestId('cart-tax');
    this.checkoutButton = page.getByTestId('cart-checkout-button');
    this.promoInput = page.getByTestId('cart-promo-input');
    this.promoApply = page.getByTestId('cart-promo-apply');
    this.cartCount = page.getByTestId('cart-count');
  }

  async goto() {
    await this.page.goto('/#/cart');
  }

  async applyPromoCode(code: string) {
    await this.promoInput.fill(code);
    await this.promoApply.click();
  }

  cartItem(slug: string) {
    return this.page.getByTestId(`cart-item-${slug}`);
  }

  removeItem(slug: string) {
    return this.page.getByTestId(`cart-remove-${slug}`);
  }
}