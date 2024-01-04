export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
    this._students = HolbertonCourse.validateArray(students, 'Students');
  }

  // Getter and setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateString(newName, 'Name');
  }

  // Getter and setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateNumber(newLength, 'Length');
  }

  // Getter and setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateArray(newStudents, 'Students');
  }

  static validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  static validateNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  static validateArray(value, attribute) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attribute} must be an array`);
    }
    return value;
  }
}
