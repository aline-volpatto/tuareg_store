import PropTypes from "prop-types";
import styles from "./PaginaMensagem.module.css";

function PaginaMensagem({ icone, titulo, children }) {
  return (
    <section className={styles.pagina}>
      <img src={icone} alt="" className={styles.icone} />
      <h1 className={styles.titulo}>{titulo}</h1>
      <div className={styles.conteudo}>{children}</div>
    </section>
  );
}

PaginaMensagem.propTypes = {
  icone: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PaginaMensagem;