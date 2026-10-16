import styles from './Header.module.css';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/produtos" className={styles.logo}>
        Tuareg Store
      </Link>

      <nav aria-label="Menu de navegação" className={styles.nav}>
        <Link to="/produtos">Produtos</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;