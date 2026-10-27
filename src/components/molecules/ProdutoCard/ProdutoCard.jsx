import { Link } from "react-router-dom";
import { formatarMoeda } from "../../../utils/moeda";
import PropTypes from 'prop-types';
import { useCarrinho } from "../../../hooks/useCarrinho";
import styles from "./ProdutoCard.module.css";
import Button from "@mui/material/Button";



function ProdutoCard({ produto }) {
  const { adicionarItem } = useCarrinho();

  return (
    <article className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} className={styles.imagem}   />
      <h2 className={styles.nome}>{produto.nome}</h2>
      <p className={styles.categoria}>{produto.categoria}</p> 
      <p className={styles.preco}>{formatarMoeda(produto.preco)}</p>
      <Link to={`/produtos/${produto.id}`} className={styles.detalhes}>
        Ver detalhes
      </Link>
       <div className={styles.acao}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => adicionarItem(produto)}
          sx={{
            backgroundColor: "var(--cor-bordo)",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "var(--cor-bordo-escuro)" },
          }}
        >
          Adicionar ao carrinho
        </Button>
      </div>
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