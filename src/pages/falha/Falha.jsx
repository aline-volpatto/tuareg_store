import { useNavigate } from "react-router-dom";


function Falha() {
  const navigate = useNavigate();

  return (
    <section>
     <h1>Não foi possível concluir a compra</h1>
      <p role="alert">tentativa de golpe</p>
      <p>Os itens do seu carrinho foram mantidos. Confira os dados do cartão e tente de novo.</p>
      <button type="button" onClick={() => navigate("/pagamento")}>
        Tentar novamente
      </button>
    </section>
  );
}

export default Falha;