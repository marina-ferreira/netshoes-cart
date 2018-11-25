import { helper } from '@ember/component/helper';

export function formatInstallments(args) {
  args.totalPrice = args.totalPrice || 0;
  args.installments = args.installments || 0;
  args.currency = args.currency || '$';

  let price = (args.totalPrice / args.installments).toFixed(2);
  if (price === 'NaN') { price = '0.00'; }

  return `ou em até ${args.installments} x ${args.currency} ${price}`;
}

export default helper(formatInstallments);
