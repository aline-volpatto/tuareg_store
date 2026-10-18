import { useState, useMemo } from "react";
import { useProdutos } from "../../hooks/useProdutos";
import { filtrarProdutos } from "../../utils/busca";
import CampoBusca from "../../components/atoms/CampoBusca";
import ListaProdutos from "../../components/organisms/ListaProdutos";

function Produtos() {
  const { produtos, carregando, error } = useProdutos();
  const [termoBusca, setTermoBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    return filtrarProdutos(produtos, termoBusca);
  }, [produtos, termoBusca]);

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
      <CampoBusca valor={termoBusca} aoMudar={setTermoBusca} />

{termoBusca !== "" && (
  <button type="button" onClick={() => setTermoBusca("")}>
    Limpar busca
  </button>
)}

{produtosFiltrados.length === 0 ? (
  <p>Nenhum produto encontrado.</p>
) : (
  <ListaProdutos produtos={produtosFiltrados} />
)}
    </section>
  );
}

export default Produtos;