import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from "@ember/runloop";

module('Unit | Service | shopping-cart', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    this.service = this.owner.lookup('service:shopping-cart');

    let productParams = { sku: 8552515751438644 };
    this.product = run(() => this.store.createRecord('product', productParams));

    window.localStorage.setItem('shoppingCart', []);
    this.service.set('items', []);
  });

  test('it adds an item to cart', function(assert) {
    assert.expect(1);

    this.service.add(this.product, 'S');

    let itemList = this.store.peekAll('item');
    let item = itemList.find(item => item.sku === this.product.sku);

    assert.equal(this.service.items[0], item, 'it adds item to cart');
  });

  test('it removes an item from cart', function(assert) {
    assert.expect(2);

    this.service.add(this.product);

    let itemList = this.store.peekAll('item');
    let item = itemList.find(item => item.sku === this.product.sku);

    assert.equal(this.service.items[0], item, 'it adds product to cart');

    this.service.remove(item);
    assert.equal(this.service.items.length, 0, 'it removes product from cart');
  });

  test('it stores cart items in local storage', function(assert) {
    assert.expect(1);

    this.service.add(this.product);

    let itemList = this.store.peekAll('item');
    let item = itemList.find(item => item.sku === this.product.sku);

    let storageItems = JSON.parse(window.localStorage.getItem('shoppingCart'));
    assert.equal(storageItems[0].sku, item.toJSON().sku, 'it adds item to local storage');
  });

  test('it removes cart items from local storage', function(assert) {
    assert.expect(2);

    this.service.add(this.product);

    let itemList = this.store.peekAll('item');
    let item = itemList.find(item => item.sku === this.product.sku);

    let storageItems = JSON.parse(window.localStorage.getItem('shoppingCart'));
    assert.equal(storageItems[0].sku, item.toJSON().sku, 'it adds item to local storage');

    this.service.remove(item);
    storageItems = JSON.parse(window.localStorage.getItem('shoppingCart'));

    assert.equal(storageItems.length, 0, 'it removes item from local storage');
  });
});
