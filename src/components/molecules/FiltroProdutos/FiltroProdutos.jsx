import PropTypes from "prop-types";
import styles from "./FiltroProdutos.module.css";

function FiltrosProdutos({ categorias, categoria, ordem, aoMudarCategoria, aoMudarOrdem }) {
  return (
    <div className={styles.filtros}>
      <div className={styles.campo}>
        <label htmlFor="categoria">Categoria</label>
        <select
          id="categoria"
          value={categoria}
          onChange={(evento) => aoMudarCategoria(evento.target.value)}
        >
          <option value="">Todas</option>
          {categorias.map((nomeCategoria) => (
            <option key={nomeCategoria} value={nomeCategoria}>
              {nomeCategoria}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.campo}>
        <label htmlFor="ordem">Ordenar por</label>
        <select
          id="ordem"
          value={ordem}
          onChange={(evento) => aoMudarOrdem(evento.target.value)}
        >
          <option value="">Padrão</option>
          <option value="menor-preco">Menor preço</option>
          <option value="maior-preco">Maior preço</option>
          <option value="nome">Nome (A–Z)</option>
        </select>
      </div>
    </div>
  );
}

FiltrosProdutos.propTypes = {
  categorias: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoria: PropTypes.string.isRequired,
  ordem: PropTypes.string.isRequired,
  aoMudarCategoria: PropTypes.func.isRequired,
  aoMudarOrdem: PropTypes.func.isRequired,
};

export default FiltrosProdutos;