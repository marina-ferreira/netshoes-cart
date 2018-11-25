import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'li',
  classNames: ['shopping-cart-item'],
  cart: service('shopping-cart'),

  actions: {
    deleteItem(item) {
      this.cart.remove(item);
    }
  }
});
