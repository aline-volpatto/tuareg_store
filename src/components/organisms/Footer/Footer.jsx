import styles from './Footer.module.css';

function Footer() {
 const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.conteudo}>
        <p className={styles.marca}>Tuareg Store</p>

         <p className={styles.avisoProjeto}>
          Esta não é uma loja real e não realiza vendas. Marca TUAREG usada com
          autorização. Para comprar os produtos oficiais, acesse a{" "}
          <a
            href="https://reserva.ink/usetuareg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkAviso}
          >
            loja oficial da TUAREG
            <span className={styles.somenteLeitor}> (abre em nova aba)</span>
          </a>
          .
        </p>

       
        <p className={styles.aviso}>
          © {anoAtual} Tuareg Store · Projeto acadêmico SENAI/SCTEC
        </p>
      </div>
    </footer>
  );
}

export default Footer;