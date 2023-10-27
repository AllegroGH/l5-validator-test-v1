export default class NumberSchema {
  constructor() {
    this.checkEven = false;
    this.checkOdd = false;
  }

  isValid(data) {
    if (typeof data !== 'number') return false;
    if (this.checkEven) return !(data % 2);
    if (this.checkOdd) return !!(data % 2);
    return true;
  }

  even() {
    this.checkOdd = false;
    this.checkEven = true;
    return this;
  }

  odd() {
    this.checkEven = false;
    this.checkOdd = true;
    return this;
  }
}
