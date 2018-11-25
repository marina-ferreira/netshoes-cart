import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | product-card', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    assert.expect(1);

    let component = this.owner.factoryFor('component:product-card').create();

    component.cart.add = () => {
      assert.ok(true, 'it calls addToCart');
    }

    component.send('addToCart');
  });
});
