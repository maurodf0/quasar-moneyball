export default function useCurrency() {

    const currencify = (amount) => {

  let postNegSymbol = '';
  amount > 0 ? postNegSymbol = '+' : postNegSymbol = '-';

  const currencySimbol = '€';

  const amountPositive = Math.abs(amount);

  const amountFormatted = amount.toLocaleString('it-IT', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${postNegSymbol} ${amountPositive} ${currencySimbol}`
}

return {
    currencify
}

}