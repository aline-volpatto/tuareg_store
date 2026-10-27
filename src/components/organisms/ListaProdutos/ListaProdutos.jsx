import PropTypes from "prop-types";
import ProdutoCard from "../../molecules/ProdutoCard/ProdutoCard";
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

ListaProdutos.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListaProdutos;