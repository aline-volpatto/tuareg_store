import styles from "./CampoFormulario.module.css";
import PropTypes from "prop-types";

function CampoFormulario({ id, label, register, error }) {
  const idErro = `${id}-erro`;

  return (
    <div className={styles.grupo}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        {...register(id)}
        className={styles.input}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? idErro : undefined}
      />
      {error && (
        <p id={idErro} className={styles.erro} role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
}

CampoFormulario.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default CampoFormulario;
