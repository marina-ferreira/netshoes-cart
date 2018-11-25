import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from "@ember/runloop";

module('Unit | Component | shopping-cart', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    this.store = this.owner.lookup('service:store');
    this.cartService = this.owner.lookup('service:shopping-cart');

    let productParams = { sku: 8552515751438644, price: 250 };
    this.product = run(() => this.store.createRecord('product', productParams));

    window.localStorage.setItem('shoppingCart', []);
    this.cartService.set('items', []);
  });

  test('it updates total price when item is added to cart', function(assert) {
    assert.expect(1);

    let component = this.owner.factoryFor('component:shopping-cart').create();
    this.cartService.add(this.product, 'S');

    assert.equal(component.totalPrice, this.product.price, 'it updates totalPrice');
  });

  test('it calls emptyCart action', function(assert) {
    assert.expect(1);

    let component = this.owner.factoryFor('component:shopping-cart').create();
    this.cartService.empty = () => assert.ok(true, 'it calls cart service empty');

    component.send('emptyCart');
  });
});
