import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly postalCodeInput: Locator;
  readonly deliveryStandard: Locator;
  readonly deliveryExpress: Locator;
  readonly deliveryPickup: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('checkout-first-name');
    this.lastNameInput = page.getByTestId('checkout-last-name');
    this.emailInput = page.getByTestId('checkout-email');
    this.postalCodeInput = page.getByTestId('checkout-postal-code');
    this.deliveryStandard = page.getByTestId('delivery-standard');
    this.deliveryExpress = page.getByTestId('delivery-express');
    this.deliveryPickup = page.getByTestId('delivery-pickup');
    this.continueButton = page.getByTestId('checkout-continue');
    this.cancelButton = page.getByTestId('checkout-cancel');
  }

  async fillShippingInfo(data: {
    firstName: string;
    lastName: string;
    email: string;
    postalCode: string;
  }) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.postalCodeInput.fill(data.postalCode);
  }
}