import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";
import { filtrarProdutos } from "../../utils/busca";
import CampoBusca from "../../components/atoms/CampoBusca";
import ListaProdutos from "../../components/organisms/ListaProdutos";
import Button from "@mui/material/Button";
import Carregando from "../../components/atoms/Carregando/Carregando";

function Produtos() {
  const { produtos, carregando, error } = useProdutos();
  const [parametros, setParametros] = useSearchParams();
  const termoBusca = parametros.get("busca") ?? "";

  function setTermoBusca(novoTermo) {
    if (novoTermo === "") {
      setParametros({}, { replace: true });
    } else {
      setParametros({ busca: novoTermo }, { replace: true });
    }
  }

  const produtosFiltrados = useMemo(() => {
    return filtrarProdutos(produtos, termoBusca);
  }, [produtos, termoBusca]);

  if (carregando) {
    return <Carregando mensagem="Buscando produtos no hangar..." />;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (produtos.length === 0) {
    return <p>Nenhum produto disponível no momento.</p>;
  }

  return (
    <section>
      <h1>Produtos</h1>
      <CampoBusca valor={termoBusca} aoMudar={setTermoBusca} />

{termoBusca !== "" && (
 <Button
    variant="outlined"
    onClick={() => setTermoBusca("")}
    sx={{
      color: "var(--cor-preto)",
      borderColor: "var(--cor-preto)",
      fontWeight: 600,
      textTransform: "none",
      marginBottom: "var(--espaco-m)",
      "&:hover": {
        borderColor: "var(--cor-bordo)",
        color: "var(--cor-bordo)",
        backgroundColor: "transparent",
      },
    }}
  >
    Limpar busca
  </Button>
)}

{produtosFiltrados.length === 0 ? (
  <p>Nenhum produto encontrado.</p>
) : (
  <ListaProdutos produtos={produtosFiltrados} />
)}
    </section>
  );
}

export default Produtos;