import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import PaginaMensagem from "../../components/templates/PaginaMensagem/PaginaMensagem";
import logot from "../../assets/logot.png";

function Falha() {
  const navigate = useNavigate();

  return (
    <PaginaMensagem icone={logot} titulo="Não foi possível concluir a compra">
      <p role="alert" style={{ color: "var(--cor-erro)", fontWeight: 700 }}>
        tentativa de golpe
      </p>
      <p>
        Os itens do seu carrinho foram mantidos. Confira os dados do cartão e
        tente de novo.
      </p>
      <Button
        variant="contained"
        onClick={() => navigate("/pagamento")}
        sx={{
          backgroundColor: "var(--cor-bordo)",
          fontWeight: 600,
          textTransform: "none",
          "&:hover": { backgroundColor: "var(--cor-bordo-escuro)" },
        }}
      >
        Tentar novamente
      </Button>
    </PaginaMensagem>
  );
}

export default Falha;
