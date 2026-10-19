import { Link } from "react-router-dom";
import { formatarMoeda } from "../../utils/moeda";
import PropTypes from 'prop-types';
import { useCarrinho } from "../../hooks/useCarrinho";



function ProdutoCard({ produto }) {
  const { adicionarItem } = useCarrinho();

  return (
    <article>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.categoria}</p> 
      <p>{formatarMoeda(produto.preco)}</p>
      <Link to={`/produtos/${produto.id}`}> Ver detalhes </Link>
        <button type="button" onClick={() => adicionarItem(produto)}>Adicionar ao Carrinho</button>
    </article>
  );
}

ProdutoCard.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
    estoque: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProdutoCard;