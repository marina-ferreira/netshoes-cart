import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'div',
  classNames: ['cart-icon'],
  cart: service('shopping-cart'),

  counter: computed('cart.items.[]', function() {
    return this.cart.items.length;
  })
});
