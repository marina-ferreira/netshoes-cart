import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { observer, set } from '@ember/object';

export default Service.extend({
  store: service(),

  init() {
    this._super(...arguments);

    let cartItems = JSON.parse(window.localStorage.getItem('shoppingCart')) || [];
    this.set('items', cartItems);
  },

  updateStorage: observer('items.{[],@each.amount}', function() {
    window.localStorage.setItem('shoppingCart', JSON.stringify(this.items));
  }),

  add(product, size) {
    let addedProduct = this.items.find(item => {
      return item.sku === product.sku && item.chosenSize === size;
    });

    addedProduct ? this._increaseAmount(addedProduct) : this._pushToCart(product, size);
  },

  remove(item) {
    this.items.removeObject(item);
    item.deleteRecord && item.deleteRecord();
  },

  empty() {
    this.items.clear();
    this.store.unloadAll('item');
  },

  // private

  _increaseAmount(product) {
    let amount = product.amount + 1;
    set(product, 'amount', amount);
  },

  _pushToCart(product, size) {
    let item = this.store.createRecord('item', product.toJSON());
    item.setProperties({chosenSize: size, amount: 1});

    this.items.pushObject(item);
  }
});
