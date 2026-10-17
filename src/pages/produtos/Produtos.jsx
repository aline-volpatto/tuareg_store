import { useProdutos } from "../../hooks/useProdutos";
import ListaProdutos from "../../components/organisms/ListaProdutos";

function Produtos() {
  const { produtos, carregando, error } = useProdutos();

  if (carregando) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (produtos.length === 0) {
    return <p>Nenhum produto disponível no momento.</p>;
  }

  return (
    <section>
      <h1>Produtos</h1>
      <ListaProdutos produtos={produtos} />
    </section>
  );
}

export default Produtos;