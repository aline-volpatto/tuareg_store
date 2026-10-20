import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../../hooks/useCarrinho";

function Sucesso() {
  const { limparCarrinho } = useCarrinho();

  useEffect(() => {
    limparCarrinho();
  }, [limparCarrinho]);

  return (
    <section>
      <h1>Sucesso</h1>
      <p>Compra realizada com sucesso!</p>
      <p>Obrigada por voar com a Tuareg! Bons voos!</p>
      <Link to="/produtos">Voltar à loja</Link>
    </section>
  );
}

export default Sucesso;