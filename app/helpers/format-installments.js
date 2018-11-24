import { helper } from '@ember/component/helper';

export function formatInstallments([totalPrice, installments, currency]) {
  let price = (totalPrice / installments).toFixed(2);
  return `ou em até ${installments} x ${currency} ${price}`;
}

export default helper(formatInstallments);
