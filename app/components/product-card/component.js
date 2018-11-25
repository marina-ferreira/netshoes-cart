import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default Component.extend({
  tagName: 'li',
  classNames: ['product-card'],
  cart: service('shopping-cart'),

  didReceiveAttrs() {
    let randomNumber = Math.floor(Math.random() * 9);
    let imgSrc = `img/product-image-${randomNumber}.jpg`;

    this.product.set('image', imgSrc);
  },

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

      this._flyImagetoCart();
    },

    displaySizes() {
      let className = 'product-card-available-sizes';
      let availableSizes = this.element.querySelector(`.${className}`);

      availableSizes.classList.add(`${className}--visible`);
    }
  },

  // private

  _flyImagetoCart() {
    let cartIcon = document.querySelector('.cart-icon');
    let flyingImg = document.createElement('img');

    flyingImg.src = this.product.image;
    flyingImg.classList.add('product-card__flying-image');
    this.element.append(flyingImg);

    let [posX, posY] = this._getElementsPosition(cartIcon, flyingImg);

    flyingImg.style.transform = `translate(${posX}, ${posY})`;
    flyingImg.style.width = 0;

    later(() => this.element.removeChild(flyingImg), 1100);
  },

  _getElementsPosition(cartIcon, flyingImg) {
    let cartIconPos = cartIcon.getBoundingClientRect();
    let flyingImgPos = flyingImg.getBoundingClientRect();

    let cartOffsetX = cartIconPos.x + cartIconPos.width / 2;
    let productOffsetX = flyingImgPos.x + flyingImgPos.width / 2;
    let cartOffsetY = cartIconPos.y + cartIconPos.height / 2;

    let posX = `${cartOffsetX - productOffsetX}px`;
    let posY = `${cartOffsetY - flyingImgPos.y}px`;

    return [posX, posY];
  }
});
