import { Link, useNavigate } from "react-router-dom";
import ItemCarrinho from "../../components/molecules/ItemCarrinho/ItemCarrinho";
import styles from "./Carrinho.module.css";
import { useCarrinho } from "../../hooks/useCarrinho";
import { formatarMoeda } from "../../utils/moeda";
import Button from "@mui/material/Button";

function Carrinho() {
  const navigate = useNavigate();
  const { itens, valorTotal } = useCarrinho();

  function finalizarCompra() {
    navigate("/pagamento");
  }

  if (itens.length === 0) {
    return (
      <section className={styles.container}>
        <h1 className={styles.titulo}>Carrinho de Compras</h1>
        <p className={styles.vazio}>Seu carrinho está vazio.</p>
        <Link to="/produtos" className={styles.link}>
          Ver produtos
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Carrinho de Compras</h1>
      <ul className={styles.lista}>
        {itens.map((item) => (
          <ItemCarrinho key={item.id} item={item} />
        ))}
      </ul>

      <div className={styles.resumo}>
        <p className={styles.total}>Total: {formatarMoeda(valorTotal)}</p>
        <Button
          variant="contained"
          size="large"
          onClick={finalizarCompra}
          sx={{
            backgroundColor: "var(--cor-bordo)",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "var(--cor-bordo-escuro)" },
          }}
        >
          Finalizar compra
        </Button>
      </div>
    </section>
  );
}

export default Carrinho;
