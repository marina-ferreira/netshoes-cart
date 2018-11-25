import { helper } from '@ember/component/helper';

export function formatCurrency([value=0, currency='$', className='']) {
  let price = document.createElement('p');
  price.classList.add(`${className}price`);

  price.innerHTML = `
    <span class="${className}currency">${currency}</span>
    <span class="${className}value">${value.toFixed(2)}</span>
  `;

  return price;
}

export default helper(formatCurrency);
