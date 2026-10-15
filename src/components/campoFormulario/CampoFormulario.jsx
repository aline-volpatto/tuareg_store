import styles from './CampoFormulario.module.css';

function CampoFormulario({ id, label, register, error}) {
  return (
      <div className={styles.grupo}>
        <label htmlFor= {id} className={styles.label}>{label}</label>
        <input id={id} {...register(id)} className={styles.input} />
        {error && <p className={styles.erro}>{error.message}</p>}
    </div>
  );
}

export default CampoFormulario;