import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  items: null,

  init() {
    this._super(...arguments);
    this.set('items', []);
  },

  add(product, size) {
    let addedProduct = this.items.find(item => {
      return item.sku === product.sku && item.chosenSize === size;
    });

    if (addedProduct) {
      let amount = addedProduct.amount + 1;
      return addedProduct.set('amount', amount);
    }

    let item = this.store.createRecord('item', product.get('data'));
    item.setProperties({chosenSize: size, amount: 1});

    this.items.pushObject(item);
  },

  remove(item) {
    this.items.removeObject(item);
    item.deleteRecord();
  },

  empty() {
    this.items.clear();
  }
});
