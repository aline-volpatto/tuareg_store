import styles from "./ItemCarrinho.module.css";
import PropTypes from "prop-types";
import { useCarrinho } from "../../../hooks/useCarrinho";
import { formatarMoeda } from "../../../utils/moeda";
import { calcularSubtotal } from "../../../utils/carrinho";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const estiloBotaoQuantidade = {
  width: 36,
  height: 36,
  fontSize: "1.2rem",
  fontWeight: 700,
  color: "var(--cor-texto)",
};

function ItemCarrinho({ item }) {
  const { alterarQuantidade, removerItem } = useCarrinho();

  return (
    <li className={styles.card}>
      <img src={item.imagem} alt={item.nome} className={styles.imagem} />

      <div className={styles.info}>
        <h2 className={styles.nome}>{item.nome}</h2>
        <p className={styles.unitario}>
          Valor unitário: {formatarMoeda(item.preco)}
        </p>
      </div>

      <div className={styles.controles}>
        <div className={styles.quantidade}>
          <IconButton
            onClick={() => alterarQuantidade(item.id, item.quantidade - 1)}
            disabled={item.quantidade <= 1}
            aria-label={`Diminuir quantidade de ${item.nome}`}
            sx={estiloBotaoQuantidade}
          >
            -
          </IconButton>
          <span>{item.quantidade}</span>
          <IconButton
            onClick={() => alterarQuantidade(item.id, item.quantidade + 1)}
            disabled={item.quantidade >= item.estoque}
            aria-label={`Aumentar quantidade de ${item.nome}`}
            sx={estiloBotaoQuantidade}
          >
            +
          </IconButton>
        </div>

        <p className={styles.subtotal}>
          {" "}
          {formatarMoeda(calcularSubtotal(item))}
        </p>

        <Button
          variant="text"
          onClick={() => removerItem(item.id)}
          sx={{
            color: "var(--cor-bordo)",
            fontWeight: 600,
            textTransform: "none",
          }}
        >
          Remover
        </Button>
      </div>
    </li>
  );
}

ItemCarrinho.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
    estoque: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemCarrinho;
