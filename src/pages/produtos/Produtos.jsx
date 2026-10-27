import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useProdutos } from "../../hooks/useProdutos";
import { useDebounce } from "../../hooks/useDebounce";
import { filtrarProdutos } from "../../utils/busca";
import CampoBusca from "../../components/atoms/CampoBusca";
import ListaProdutos from "../../components/organisms/ListaProdutos/ListaProdutos";
import Button from "@mui/material/Button";
import Carregando from "../../components/atoms/Carregando/Carregando";
import FiltroProdutos from "../../components/molecules/FiltroProdutos/FiltroProdutos";
import { filtrarPorCategoria } from "../../utils/filtrarPorCategoria";
import { ordenarProdutos } from "../../utils/ordenarProdutos";

function Produtos() {
  const { produtos, carregando, error } = useProdutos();
  const [parametros, setParametros] = useSearchParams();
  const termoBusca = parametros.get("busca") ?? "";
  const categoria = parametros.get("categoria") ?? "";
  const ordem = parametros.get("ordem") ?? "";
  const termoComAtraso = useDebounce(termoBusca);

   const categorias = useMemo(
    () => [...new Set(produtos.map((produto) => produto.categoria))],
    [produtos],
  );


  function atualizarParametro(chave, valor) {
    setParametros(
      (parametrosAnteriores) => {
        const novosParametros = new URLSearchParams(parametrosAnteriores);
        if (valor === "") {
          novosParametros.delete(chave);
        } else {
          novosParametros.set(chave, valor);
        }
        return novosParametros;
      },
      { replace: true },
    );
  }

  const produtosFiltrados = useMemo(() => {
    const porBusca = filtrarProdutos(produtos, termoComAtraso);
    const porCategoria = filtrarPorCategoria(porBusca, categoria);
    return ordenarProdutos(porCategoria, ordem);
  }, [produtos, termoComAtraso, categoria, ordem]);

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
      <CampoBusca
        valor={termoBusca}
        aoMudar={(novoTermo) => atualizarParametro("busca", novoTermo)}
      />

      <FiltroProdutos
        categorias={categorias}
        categoria={categoria}
        ordem={ordem}
        aoMudarCategoria={(novaCategoria) =>
          atualizarParametro("categoria", novaCategoria)
        }
        aoMudarOrdem={(novaOrdem) => atualizarParametro("ordem", novaOrdem)}
      />

      {(termoBusca !== "" || categoria !== "" || ordem !== "") && (
        <Button
          variant="outlined"
          onClick={() => setParametros({}, { replace: true })}
          sx={{
            color: "var(--cor-texto)",
            borderColor: "var(--cor-texto)",
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
          Limpar filtro
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
