import { helper } from '@ember/component/helper';

export function formatInstallments(params, args) {
  let totalPrice = args.totalPrice || 0;
  let installments = args.installments || 0;
  let currency = args.currency || '$';

  let price = (totalPrice / installments).toFixed(2);
  if (price === 'NaN') { price = '0.00'; }

  return `ou em até ${installments} x ${currency} ${price}`;
}

export default helper(formatInstallments);
