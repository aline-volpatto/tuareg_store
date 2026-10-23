export function esperar(milissegundos) {
  return new Promise((resolve) => setTimeout(resolve, milissegundos));
}