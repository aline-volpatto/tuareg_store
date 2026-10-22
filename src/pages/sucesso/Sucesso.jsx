import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../../hooks/useCarrinho";
import PaginaMensagem from "../../components/templates/PaginaMensagem/PaginaMensagem";
import logot  from "../../assets/logot.png";

function Sucesso() {
  const { limparCarrinho } = useCarrinho();

  useEffect(() => {
    limparCarrinho();
  }, [limparCarrinho]);

  return (
    <PaginaMensagem icone={logot} titulo="Compra realizada com sucesso!">
      <p>Obrigada por voar com a Tuareg! Bons voos!</p>
      <Link to="/produtos" className="link-destaque">
        Voltar à loja
      </Link>
    </PaginaMensagem>
  );
}

export default Sucesso;
