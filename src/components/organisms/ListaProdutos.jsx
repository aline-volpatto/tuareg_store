import ProdutoCard from "../molecules/ProdutoCard";
import styles from "./ListaProdutos.module.css";

function ListaProdutos({ produtos }) {
  return (
    <section className={styles.grade}>
      {produtos.map((produto) => (
        <ProdutoCard key={produto.id} produto={produto} />
      ))}
    </section>
  );
}

export default ListaProdutos;