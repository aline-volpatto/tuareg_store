import styles from './Footer.module.css';

function Footer() {
 const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <p className={styles.marca}>Tuareg Store</p>
       
        <p className={styles.aviso}>
          © {anoAtual} Tuareg Store · Projeto acadêmico SENAI/SCTEC
        </p>
      </div>
    </footer>
  );
}

export default Footer;