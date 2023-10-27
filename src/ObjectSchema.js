export default class ObjectSchema {
  constructor() {
    this.id = null;
    this.basket = null;
  }

  isValid({ id, basket }) {
    return this.id.isValid(id) && this.basket.isValid(basket);
  }

  shape({ id, basket }) {
    this.id = id;
    this.basket = basket;
    return this;
  }
}
