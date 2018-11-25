import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | shopping-cart-item', function(hooks) {
  setupTest(hooks);

  test('it calls deleteItem action', function(assert) {
    assert.expect(1);

    let component = this.owner.factoryFor('component:shopping-cart-item').create();
    component.cartService = this.owner.lookup('service:shopping-cart');

    component.cartService.remove = () => assert.ok(true, 'it calls cart service remove');

    component.send('deleteItem');
  });
});
