/* eslint class-methods-use-this: 0 */

export default class ArraySchema {
  constructor(length = -1) {
    this.checkedLength = length;
  }

  isValid(data) {
    if (!Array.isArray(data)) return false;
    return this.checkedLength < 0 || this.checkedLength === data.length;
  }

  length(value) {
    return new ArraySchema(value);
  }
}
