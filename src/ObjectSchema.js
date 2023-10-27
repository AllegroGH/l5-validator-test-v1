/* eslint class-methods-use-this: 0 */

export default class ObjectSchema {
  constructor(shapes) {
    this.validators = shapes;
  }

  shape(fields) {
    return new ObjectSchema(fields);
  }

  isValid(data) {
    const dataKeys = Object.keys(data).sort();
    const validatorsKeys = Object.keys(this.validators).sort();
    if (dataKeys.length !== validatorsKeys.length) return false;
    if (dataKeys.filter((key, index) => key !== validatorsKeys[index]).length) return false;
    return dataKeys.every((key) => this.validators[key].isValid(data[key]));
  }
}
