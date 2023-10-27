/* eslint class-methods-use-this: 0 */
const even = 0;
const odd = 1;

export default class NumberSchema {
  constructor(parity = null) {
    this.requiredParity = parity;
  }

  isValid(data) {
    if (typeof data !== 'number') return false;
    return this.requiredParity !== null ? data % 2 === this.requiredParity : true;
  }

  even() {
    return new NumberSchema(even);
  }

  odd() {
    return new NumberSchema(odd);
  }
}
