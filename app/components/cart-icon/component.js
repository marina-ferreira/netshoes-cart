import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'div',
  classNames: ['cart-icon'],
  cart: service('shopping-cart'),

  counter: computed('cart.items.@each.amount', function() {
    return this.cart.items.reduce((acc, item) => {
      return acc + item.amount;
    }, 0);
  }),

  imgSrc: computed('white', function() {
    return this.white ? 'img/bag.png' : 'img/bag-black.png'
  }),

  click() {
    let cart = document.querySelector('.shopping-cart');
    cart.classList.toggle('shopping-cart--visible');
  }
});
