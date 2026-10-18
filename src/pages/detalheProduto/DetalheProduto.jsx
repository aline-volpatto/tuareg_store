import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarProdutoPorId } from "../../services/api";
import { formatarMoeda } from "../../utils/moeda";

function DetalheProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarProduto() {
      try {
        const produtoBuscado = await buscarProdutoPorId(id);
        setProduto(produtoBuscado);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      } 
    }

    carregarProduto();
  }, [id]);

  // os if antecipados: carregando, erro e produto não encontrado
  if (carregando) {
    return <p>Carregando produto...</p>;
  }

  if (erro) {
    return <p role="alert">{erro}</p>;
  }

  if (!produto) {
    return (
      <section>
        <h1>Produto não encontrado.</h1>
        <p>Este produto não está mais em nosso hangar.</p>
        <Link to="/produtos">Voltar para a lista de produtos</Link>
      </section>
    );
  }

  return (
    <article>
      <img src={produto.imagem} alt={produto.nome} />
      <h1>{produto.nome}</h1>
      <p>{produto.descricao}</p>
      <p>{formatarMoeda(produto.preco)}</p>
      <p>
        Estoque: {produto.estoque} {produto.estoque === 1 ? "unidade" : "unidades"}
      </p>
      <button type="button">Adicionar ao carrinho</button>
    </article>
  );
}

export default DetalheProduto;