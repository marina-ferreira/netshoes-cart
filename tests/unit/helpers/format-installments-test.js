import { formatInstallments } from 'netshoes-cart/helpers/format-installments';
import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Helper | format-installments', function(hooks) {
  setupTest(hooks);

  test('it formats installments', function(assert) {
    assert.expect(1);

    let [totalPrice, installments, currency] = [350, 10, 'R$'];
    let result = formatInstallments([], {totalPrice: totalPrice, installments: installments, currency: currency});
    let expectedOutput = `ou em até ${installments} x ${currency} ${(totalPrice / installments).toFixed(2)}`;

    assert.equal(result, expectedOutput, 'it formats installments');
  });

  test('it returns zero when value is missing', function(assert) {
    assert.expect(1);

    let [installments, currency] = [10, 'R$'];
    let result = formatInstallments([], {installments: installments, currency: currency});

    assert.ok(result.includes('0.00'), 'it returns 0.00');
  });

  test('it returns zero when installments is missing', function(assert) {
    assert.expect(1);

    let [totalPrice, currency] = [450, 'R$'];
    let result = formatInstallments([], {totalPrice: totalPrice, currency: currency});

    assert.ok(result.includes('ou em até 0 x'), 'it returns 0 x');
  });

  test('it returns general symbol when currency is missing', function(assert) {
    assert.expect(1);

    let [totalPrice, installments] = [450, 9];
    let result = formatInstallments([], {totalPrice: totalPrice, installments: installments});

    assert.ok(result.includes('$'), 'it adds $ symbol');
  });

  test('it returns output when params are missing', function(assert) {
    assert.expect(1);

    let result = formatInstallments([], {});
    let expectedOutput = 'ou em até 0 x $ 0.00';

    assert.equal(result, expectedOutput, 'it returns general output');
  });
});
