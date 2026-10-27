export function ordenarProdutos(produtos, ordem) {
  const copia = [...produtos];

  switch (ordem) {
    case "menor-preco":
      return copia.sort((a, b) => a.preco - b.preco);
    case "maior-preco":
      return copia.sort((a, b) => b.preco - a.preco);
    case "nome":
      return copia.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
    default:
      return produtos;
  }
}