/* eslint class-methods-use-this: 0 */
/* eslint max-classes-per-file: 0 */

import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  number() {
    this.schema = new NumberSchema();
    return this.schema;
  }

  array() {
    this.schema = new ArraySchema();
    return this.schema;
  }

  object() {
    return new ObjectSchema();
  }
}
