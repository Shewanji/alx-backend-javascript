export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    if (this.constructor.name === 'AllCar') return new Car(this._brand, this._motor, this._color);
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
