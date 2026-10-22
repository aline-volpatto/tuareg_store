import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { buscarProdutoPorId } from "../../services/api";
import { formatarMoeda } from "../../utils/moeda";
import { useCarrinho } from "../../hooks/useCarrinho";
import Button from "@mui/material/Button";
import styles from "./DetalheProduto.module.css";

function DetalheProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);
  const { adicionarItem } = useCarrinho();

  useEffect(() => {
    async function carregarProduto() {
      try {
        const produtoBuscado = await buscarProdutoPorId(id);
        setProduto(produtoBuscado);
      } catch (e) {
        setErro(e.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarProduto();
  }, [id]);

  if (carregando) {
    return <p>Carregando produto...</p>;
  }

  if (erro) {
    return <p role="alert">{erro}</p>;
  }

  if (!produto) {
    return (
      <section className={styles.mensagem}>
        <h1>Produto não encontrado.</h1>
        <p>Este produto não está mais em nosso hangar.</p>
        <Link to="/produtos" className={styles.voltar}>
          Voltar para a lista de produtos
        </Link>
      </section>
    );
  }

  return (
    <section>
      <Link to="/produtos" className={styles.voltar}>
        ← Voltar para os produtos
      </Link>

      <article className={styles.detalhe}>
        <img
          src={produto.imagem}
          alt={produto.nome}
          className={styles.imagem}
        />

        <div className={styles.info}>
          <p className={styles.categoria}>{produto.categoria}</p>
          <h1 className={styles.nome}>{produto.nome}</h1>
          <p className={styles.descricao}>{produto.descricao}</p>
          <p className={styles.preco}>{formatarMoeda(produto.preco)}</p>
          <p className={styles.estoque}>
            Estoque: {produto.estoque}{" "}
            {produto.estoque === 1 ? "unidade" : "unidades"}
          </p>
          <Button
            variant="contained"
            size="large"
            onClick={() => adicionarItem(produto)}
            sx={{
              backgroundColor: "var(--cor-bordo)",
              fontWeight: 600,
              textTransform: "none",
              "&:hover": { backgroundColor: "var(--cor-bordo-escuro)" },
            }}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </article>
    </section>
  );
}

export default DetalheProduto;
