export default function useCurrency() {

    const currencify = (amount) => {

    let posNegSymbol = ''
  if (amount > 0) posNegSymbol = '+'
  else if (amount < 0) posNegSymbol = '-'

  const currencySimbol = '€';

  const amountPositive = Math.abs(amount);

  const amountFormatted = amount.toLocaleString('it-IT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${posNegSymbol} ${amountPositive} ${currencySimbol}`
}

return {
    currencify
}

}