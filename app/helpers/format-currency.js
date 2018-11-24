import { helper } from '@ember/component/helper';

export function formatCurrency([format, value, className]) {
  let price = document.createElement('p');
  price.classList.add(`${className}__price`);

  price.innerHTML = `
    <span class="${className}__currency">${format}</span>
    <span class="${className}__value">${value.toFixed(2)}</span>
  `;

  return price;
}

export default helper(formatCurrency);
