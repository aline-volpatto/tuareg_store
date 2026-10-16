export function calcularSubtotal(item) {
  return item.preco * item.quantidade;
}   


export function calcularTotal(itens) {
  return itens.reduce((total, item) => {
    return total + calcularSubtotal(item);
  }, 0);
}


export function calcularQuantidadeTotal(itens) {
  return itens.reduce((quantidadeTotal, item) => {
    return quantidadeTotal + item.quantidade;
  }, 0);
}