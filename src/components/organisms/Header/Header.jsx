import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useCarrinho } from "../../../hooks/useCarrinho";
import logot from "../../../assets/logot.png";

function Header() {
  const { quantidadeTotal } = useCarrinho();

  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <Link to="/produtos" className={styles.logo}>
          <img src={logot} alt="Logo da loja" className={styles.logoImage} />
        </Link>
        <nav aria-label="Menu de navegação" className={styles.nav}>
          <Link to="/produtos" className={styles.link}>
            Produtos
          </Link>
          <Link
            to="/carrinho"
            className={styles.link}
            aria-label={`Carrinho com (${quantidadeTotal} itens)`}
          >
            <Badge
              badgeContent={quantidadeTotal}
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "var(--cor-amarelo)",
                  color: "var(--cor-preto)",
                  fontWeight: 700,
                },
              }}
            >
              Carrinho
            </Badge>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
