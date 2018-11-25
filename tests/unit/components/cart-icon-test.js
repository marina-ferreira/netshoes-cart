import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from "@ember/runloop";

module('Unit | Component | cart-icon', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    this.cartService = this.owner.lookup('service:shopping-cart');

    let productParams = { sku: 8552515751438644 };
    this.product = run(() => this.store.createRecord('product', productParams));

    window.localStorage.setItem('shoppingCart', []);
    this.cartService.set('items', []);
  });

  test('it increases counter when item is added to cart', function(assert) {
    assert.expect(1);

    let component = this.owner.factoryFor('component:cart-icon').create();

    this.cartService.add(this.product);
    assert.equal(component.counter, 1, 'it increases counter');
  });

  test('it increases counter when item is added to cart', function(assert) {
    assert.expect(2);

    let component = this.owner.factoryFor('component:cart-icon').create();

    this.cartService.add(this.product);
    assert.equal(component.counter, 1, 'it increases counter');

    let itemList = this.store.peekAll('item');
    let item = itemList.find(item => item.sku === this.product.sku);

    this.cartService.remove(item);
    assert.equal(component.counter, 0, 'it decreases counter');
  });
});
