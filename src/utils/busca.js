
export function filtrarProdutos(produtos, termoBusca) {
  const termo = termoBusca.trim().toLowerCase();

   if (termo === "") {
    return produtos;
  }


  return produtos.filter((produto) => {
    const nome = produto.nome.toLowerCase();


    return nome.includes(termo);
  });

}
