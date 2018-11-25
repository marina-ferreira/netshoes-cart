import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'div',
  classNames: ['shopping-cart'],
  cart: service('shopping-cart'),

  totalPrice: computed('cart.items.{[],@each.amount}', function() {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
  }),

  actions: {
    closeCart() {
      this.element.classList.remove('shopping-cart--visible');
    },

    deleteItem(item) {
      this.cart.remove(item);
    },

    emptyCart() {
      this.cart.empty();
    }
  }
});
