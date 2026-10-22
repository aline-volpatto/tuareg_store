import PropTypes from "prop-types";
import styles from "./CampoBusca.module.css";

function CampoBusca({ valor, aoMudar }) {
  return (
    <div className={styles.campo}>
      <label htmlFor="busca" className={styles.rotulo}>
        O que você está procurando?
      </label>
      <input
        id="busca"
        type="search"
        className={styles.input}
        value={valor}
        onChange={(evento) => aoMudar(evento.target.value)}
        placeholder="Ex.: Camiseta Mehari"
      />
    </div>
  );
}

CampoBusca.propTypes = {
  valor: PropTypes.string.isRequired,
  aoMudar: PropTypes.func.isRequired
};

export default CampoBusca;