import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useCarrinho } from "../../../hooks/useCarrinho";
import logot from "../../../assets/logot.png";
import BotaoTema from "../../atoms/BotaoTema/BotaoTema";

function Header() {
  const { quantidadeTotal } = useCarrinho();

  return (
    <header className={styles.header}>
      <div className={styles.conteudo}>
        <Link to="/produtos" className={styles.logo}>
          <img src={logot} alt="Tuareg Store" />
        </Link>

        <nav aria-label="Menu de navegação" className={styles.nav}>
          <Link to="/produtos" className={styles.link}>
            Produtos
          </Link>
          <Link
            to="/carrinho"
            className={styles.link}
            aria-label={`Carrinho com ${quantidadeTotal} itens`}
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
          <BotaoTema />
        </nav>
      </div>
    </header>
  );
}

export default Header;
