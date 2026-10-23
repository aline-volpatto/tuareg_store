export function filtrarPorCategoria(produtos, categoria) {
  if (categoria === "") return produtos;
  return produtos.filter((produto) => produto.categoria === categoria);
}