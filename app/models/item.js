import DS from 'ember-data';
import Product from './product';

export default Product.extend({
  chosenSize: DS.attr('string'),
  amount: DS.attr('number', { defaultValue: 0 }),
});
