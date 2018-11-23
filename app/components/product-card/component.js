import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['product-card'],

  price: computed('product.price', function() {
    return this.product.price.toFixed(2);
  }),

  installments: computed('product.price', 'product.installments', function() {
    let fullPrice = this.product.price;
    let currency = this.product.currencyFormat;
    let installments = this.product.installments;
    let price = (fullPrice / installments).toFixed(2);

    if (installments === 0) return;

    return `ou ${installments} x ${currency} ${price}`;
  })
});
