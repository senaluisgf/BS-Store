export function toBrazilianCurrency(price: number){
  const priceString = `R$ ${price.toFixed(2).toString()}`;
  //TODO: implementar lógica para separador de milhar
  return priceString.replace('.', ',');
}