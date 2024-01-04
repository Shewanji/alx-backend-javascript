import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing.validateNumber(amount, 'Amount');
    this._currency = Pricing.validateCurrency(currency, 'Currency');
  }

  // Getter and setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = Pricing.validateNumber(newAmount, 'Amount');
  }

  // Getter and setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = Pricing.validateCurrency(newCurrency, 'Currency');
  }

  // Method to display full price format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  static validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  static validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }
}
