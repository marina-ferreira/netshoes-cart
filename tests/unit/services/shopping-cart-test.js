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
  });

  test('it adds an item to cart', function(assert) {
    assert.expect(1);

    this.service.add(this.product);
    assert.equal(this.service.items[0], this.product, 'it adds product to cart');
  });

  test('it removes an item from cart', function(assert) {
    assert.expect(2);

    this.service.add(this.product);
    assert.equal(this.service.items[0], this.product, 'it adds product to cart');

    this.service.remove(this.product);
    assert.equal(this.service.items.length, 0, 'it removes product from cart');
  });
});
