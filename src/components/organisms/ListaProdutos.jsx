import ProdutoCard from "../molecules/ProdutoCard";

function ListaProdutos({ produtos }) {
  return (
    <section>
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </section>
  );
}

export default ListaProdutos;