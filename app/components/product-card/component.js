import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'li',
  classNames: ['product-card'],
  cart: service('shopping-cart'),

  didInsertElement() {
    let className = 'product-card-available-sizes';
    let availableSizes = this.element.querySelector(`.${className}`);

    this.element.addEventListener('mouseleave', () => {
      availableSizes.classList.remove(`${className}--visible`)
    });
  },

  actions: {
    addToCart(size) {
      this.cart.add(this.product, size);
    },

    displaySizes() {
      let className = 'product-card-available-sizes';
      let availableSizes = this.element.querySelector(`.${className}`);

      availableSizes.classList.add(`${className}--visible`);
    }
  }
});
