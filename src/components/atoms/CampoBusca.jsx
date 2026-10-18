import PropTypes from "prop-types";

function CampoBusca({ valor, aoMudar }) {
  return (
    <div>
      <label htmlFor="busca">O que você está procurando?</label>
      <input
        id="busca"
        type="search"
        value={valor}
        onChange={(evento) => aoMudar(evento.target.value)}
        placeholder="Ex.: Camiseta Mehari"
      />
    </div>
  );
}

CampoBusca.propTypes = {
  valor: PropTypes.string.isRequired,
  aoMudar: PropTypes.func.isRequired
};

export default CampoBusca;