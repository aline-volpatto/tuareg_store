import { useLocation, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pagamentoSchema } from "../../utils/pagamentoSchema";
import { cartaoSuspeito } from "../../utils/verificarGolpe";
import { usePagamento } from "../../hooks/usePagamento";
import CampoFormulario from "../../components/campoFormulario/CampoFormulario";
import styles from "./Pagamento.module.css";

function Pagamento() {
  const localizacao = useLocation();
  const navigate = useNavigate();
  const { processando, processarCompra } = usePagamento();
  let valorTotal;

  if (localizacao.state) {
    valorTotal = localizacao.state.valorTotal;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  });

  function processarPagamento(dados) {
    processarCompra(() => {
      if (cartaoSuspeito(dados.numeroCartao)) {
        navigate("/resultado/falha");
      } else {
        navigate("/resultado/sucesso");
      }
    });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Pagamento</h1>
      <p className={styles.total}>
        Valor Total:{" "}
        {valorTotal
          ? valorTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "não informado"}
      </p>

      <form onSubmit={handleSubmit(processarPagamento)}>
        <CampoFormulario
          id="titular"
          label="Titular do cartão"
          register={register}
          error={errors.titular}
        />
        <CampoFormulario
          id="numeroCartao"
          label="Número do cartão"
          register={register}
          error={errors.numeroCartao}
        />
        <CampoFormulario
          id="validade"
          label="Validade (MM/AA)"
          register={register}
          error={errors.validade}
        />
        <CampoFormulario
          id="cvv"
          label="CVV"
          register={register}
          error={errors.cvv}
        />

        <button type="submit" className={styles.botao} disabled={processando}>
          {processando && <span className={styles.spinner}></span>}
          {processando ? "Processando compra..." : "Realizar pagamento"}
        </button>
      </form>
    </div>
  );
}

export default Pagamento;
