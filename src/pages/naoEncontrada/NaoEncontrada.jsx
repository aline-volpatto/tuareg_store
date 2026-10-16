import { Link } from 'react-router-dom';

function NaoEncontrada() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <h2>Parece que saímos da rota! O endereço procurado não existe!</h2>
      <Link to="/produtos">Voltar para a loja</Link>
    </section>
  );
}

export default NaoEncontrada;