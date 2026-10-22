import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { pagamentoSchema } from "../../utils/pagamentoSchema";
import { cartaoSuspeito } from "../../utils/verificarGolpe";
import { usePagamento } from "../../hooks/usePagamento";
import { useCarrinho } from "../../hooks/useCarrinho";
import { formatarMoeda } from "../../utils/moeda";
import CampoFormulario from "../../components/molecules/CampoFormulario/CampoFormulario";
import styles from "./Pagamento.module.css";
import Button from "@mui/material/Button";

function Pagamento() {
  const navigate = useNavigate();
  const { processando, processarCompra } = usePagamento();
  const { valorTotal } = useCarrinho();

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
        navigate("/falha");
      } else {
        navigate("/sucesso");
      }
    });
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Pagamento</h1>
      <p className={styles.total}>Valor Total: {formatarMoeda(valorTotal)}</p>

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

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={processando}
          sx={{
            marginTop: "var(--espaco-m)",
            backgroundColor: "var(--cor-bordo)",
            backgroundColor: "var(--cor-bordo)",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": { backgroundColor: "var(--cor-bordo-escuro)" },
            "&.Mui-disabled": {
              backgroundColor: "var(--cor-bordo)",
              color: "#ffffff",
              opacity: 0.7,
            },
          }}
        >
          {processando && <span className={styles.spinner}></span>}
          {processando ? "Processando compra..." : "Realizar pagamento"}
        </Button>
      </form>
    </section>
  );
}

export default Pagamento;
