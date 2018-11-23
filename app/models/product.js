import DS from 'ember-data';

export default DS.Model.extend({
  sku: DS.attr('number'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  availableSizes: DS.attr(),
  style: DS.attr('string'),
  price: DS.attr('number'),
  installments: DS.attr('number'),
  currencyId: DS.attr('string'),
  currencyFormat: DS.attr('string'),
  isFreeShipping: DS.attr('boolean')
});
