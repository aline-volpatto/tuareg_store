import { useState, useMemo, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { CarrinhoContext } from "./Contextos";
import { calcularTotal, calcularQuantidadeTotal } from "../utils/carrinho";

const CHAVE_CARRINHO = "carrinho-tuareg";

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(() => {
    try {
      const carrinhoGuardado = localStorage.getItem(CHAVE_CARRINHO);
      return carrinhoGuardado ? JSON.parse(carrinhoGuardado) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CHAVE_CARRINHO, JSON.stringify(itens));
    } catch (error) {
      console.error("Erro ao salvar o carrinho no localStorage:", error);
    }
  }, [itens]);

  const adicionarItem = useCallback((item) => {
    setItens((itensAnteriores) => {
      const jaEstaNoCarrinho = itensAnteriores.some(
        (itemNoCarrinho) => itemNoCarrinho.id === item.id,
      );

      if (!jaEstaNoCarrinho) {
        return [...itensAnteriores, { ...item, quantidade: 1 }];
      }

      return itensAnteriores.map((itemNoCarrinho) => {
        if (itemNoCarrinho.id === item.id) {
          return {
            ...itemNoCarrinho,
            quantidade: Math.min(
              itemNoCarrinho.quantidade + 1,
              itemNoCarrinho.estoque,
            ),
          };
        }
        return itemNoCarrinho;
      });
    });
  }, []);

  const alterarQuantidade = useCallback((itemId, novaQuantidade) => {
    setItens((itensAnteriores) => {
      return itensAnteriores.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantidade: Math.min(Math.max(novaQuantidade, 1), item.estoque),
          };
        }
        return item;
      });
    });
  }, []);

  const removerItem = useCallback((itemId) => {
    setItens((itensAnteriores) =>
      itensAnteriores.filter((item) => item.id !== itemId),
    );
  }, []);

  const limparCarrinho = useCallback(() => {
    setItens([]);
  }, []);

  const quantidadeTotal = useMemo(
    () => calcularQuantidadeTotal(itens),
    [itens],
  );
  const valorTotal = useMemo(() => calcularTotal(itens), [itens]);

  const valor = useMemo(
    () => ({
      itens,
      adicionarItem,
      removerItem,
      alterarQuantidade,
      limparCarrinho,
      quantidadeTotal,
      valorTotal,
    }),
    [
      itens,
      adicionarItem,
      removerItem,
      alterarQuantidade,
      limparCarrinho,
      quantidadeTotal,
      valorTotal,
    ],
  );

  return (
    <CarrinhoContext.Provider value={valor}>
      {children}
    </CarrinhoContext.Provider>
  );
}

CarrinhoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
