import { helper } from '@ember/component/helper';

export function formatCurrency(args) {
  args.value = args.value || 0;
  args.currency = args.currency || '$';
  args.className = args.className || '';

  let price = document.createElement('p');
  price.classList.add(`${args.className}price`);

  price.innerHTML = `
    <span class="${args.className}currency">${args.currency}</span>
    <span class="${args.className}value">${args.value.toFixed(2)}</span>
  `;

  return price;
}

export default helper(formatCurrency);
