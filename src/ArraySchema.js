export default class ArraySchema {
  constructor() {
    this.checkedLength = -1;
  }

  isValid(data) {
    if (!Array.isArray(data)) return false;
    return this.checkedLength < 0 || this.checkedLength === data.length;
  }

  length(value) {
    this.checkedLength = value;
    return this;
  }
}
