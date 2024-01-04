export default class Currency {
  constructor(code, name) {
    this._code = Currency.validateString(code, 'Code');
    this._name = Currency.validateString(name, 'Name');
  }

  // Getter and setter for 'code'
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = Currency.validateString(newCode, 'Code');
  }

  // Getter and setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = Currency.validateString(newName, 'Name');
  }

  // Method to display full currency format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  static validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}
