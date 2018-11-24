import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'div',
  classNames: ['shopping-cart'],
  cart: service('shopping-cart'),

  actions: {
    closeCart() {
      this.element.classList.remove('shopping-cart--visible');
    }
  }
});
