import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'li',
  classNames: ['product-card'],
  cart: service('shopping-cart'),

  price: computed('product.price', function() {
    return this.product.price.toFixed(2);
  }),

  installments: computed('product.{price,installments}', function() {
    let fullPrice = this.product.price;
    let currency = this.product.currencyFormat;
    let installments = this.product.installments;
    let price = (fullPrice / installments).toFixed(2);

    if (installments === 0) return;

    return `ou ${installments} x ${currency} ${price}`;
  }),

  actions: {
    addToCart() {
      this.cart.add(this.product);
    }
  }
});
