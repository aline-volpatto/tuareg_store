import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useCarrinho } from "../../hooks/useCarrinho";
import PaginaMensagem from "../../components/templates/PaginaMensagem/PaginaMensagem";
import logot from "../../assets/logot.png";

function Sucesso() {
  const { limparCarrinho } = useCarrinho();
  const location = useLocation();
  const compraAprovada = location.state?.compraAprovada === true;

  useEffect(() => {
    if (compraAprovada) {
      limparCarrinho();
    }
  }, [compraAprovada, limparCarrinho]);

  if (!compraAprovada) {
    return <Navigate to="/produtos" replace />;
  }

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
