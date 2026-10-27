import PropTypes from "prop-types";
import styles from "./Carregando.module.css";

function Carregando({ mensagem = "Preparando para decolar..." }) {
  return (
    <div className={styles.carregando} role="status" aria-live="polite">
      <div className={styles.trajetoria} aria-hidden="true">
        <div className={styles.orbita}>
          <svg className={styles.aviao} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>
      <p className={styles.mensagem}>{mensagem}</p>
    </div>
  );
}

Carregando.propTypes = {
  mensagem: PropTypes.string,
};


export default Carregando;