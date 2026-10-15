import { useParams, Link } from "react-router";
import styles from "./Resultado.module.css";

function Resultado() {
  const { status } = useParams();
  const compraAprovada = status === "sucesso";

  return (
    <div className={styles.container}>
      {compraAprovada ? (
        <>
          <h1 className={styles.sucesso}>Compra aprovada!</h1>
          <Link to="/" className={styles.link}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Voltar ao carrinho
          </Link>
        </>
      ) : (
        <>
          <h1 className={styles.falha}>tentativa de golpe</h1>
          <Link to="/pagamento" className={styles.link}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
            Tentar novamente
          </Link>
        </>
      )}
    </div>
  );
}

export default Resultado;
