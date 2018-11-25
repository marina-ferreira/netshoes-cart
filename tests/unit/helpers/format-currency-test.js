import { formatCurrency } from 'netshoes-cart/helpers/format-currency';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | format-currency', function(hooks) {
  setupTest(hooks);

  test('it formats currency', function(assert) {
    assert.expect(5);

    let [value, currency, className] = [249, 'R$', 'product-card__'];
    let result = formatCurrency([value, currency, className]);

    assert.ok(result.classList.contains(`${className}price`), 'it has a wrapper element');
    assert.ok(result.children[0].classList.contains(`${className}currency`), 'it adds currency class');
    assert.equal(result.children[0].textContent, currency,'it formats currency');
    assert.ok(result.children[1].classList.contains(`${className}value`), 'it adds value class');
    assert.equal(result.children[1].textContent, value.toFixed(2),'it formats value');
  });

  test('it returns general class when className is missing', function(assert) {
    assert.expect(3);

    let [value, currency] = [249, 'R$'];
    let result = formatCurrency([value, currency]);

    assert.ok(result.classList.contains('price'), 'it adds class to wrapper element');
    assert.ok(result.children[0].classList.contains('currency'), 'it adds class to currency element');
    assert.ok(result.children[1].classList.contains('value'), 'it adds class to value element');
  });

  test('it returns general symbol when currency is missing', function(assert) {
    assert.expect(1);

    let result = formatCurrency([249]);

    assert.equal(result.children[0].textContent, '$','it adds $ symbol');
  });

  test('it returns zero when value is missing', function(assert) {
    assert.expect(1);

    let result = formatCurrency([]);

    assert.equal(result.children[1].textContent, '0.00','it returns 0.00');
  });
});
