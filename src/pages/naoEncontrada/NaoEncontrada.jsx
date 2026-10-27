import { Link } from 'react-router-dom';
import PaginaMensagem from "../../components/templates/PaginaMensagem/PaginaMensagem";
import logot from "../../assets/logot.png";

function NaoEncontrada() {
  return (
   <PaginaMensagem icone={logot} titulo="Página não encontrada">
      <p>Parece que saímos da rota. O endereço que você procurou não existe.</p>
      <Link to="/produtos" className="link-destaque">
        Voltar para o catálogo
      </Link>
    </PaginaMensagem>
  );
}

export default NaoEncontrada;