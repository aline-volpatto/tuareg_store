import { createContext, useState, useMemo } from "react";
import { calcularTotal, calcularQuantidadeTotal } from "../utils/carrinho";

export const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarItem(item) {
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
  }

  function alterarQuantidade(itemId, novaQuantidade) {
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
  }

  function removerItem(itemId) {
    setItens((itensAnteriores) =>
      itensAnteriores.filter((item) => item.id !== itemId),
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = useMemo(
    () => calcularQuantidadeTotal(itens),
    [itens],
  );
  const valorTotal = useMemo(() => calcularTotal(itens), [itens]);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarItem,
        removerItem,
        alterarQuantidade,
        limparCarrinho,
        quantidadeTotal,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
