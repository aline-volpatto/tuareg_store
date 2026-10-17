import { Link } from "react-router-dom";
import { formatarMoeda } from "../../utils/moeda";

function ProdutoCard({ produto }) {
  return (
    <article>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.categoria}</p> 
      <p>{formatarMoeda(produto.preco)}</p>
      <Link to={`/produtos/${produto.id}`}> Ver detalhes </Link>
        <button type="button">Adicionar ao Carrinho</button>
    </article>
  );
}

export default ProdutoCard;