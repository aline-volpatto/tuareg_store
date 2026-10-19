import { createContext, useState } from "react";

export const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarItem(item) {
    setItens((itensAnteriores) => { 
        const jaEstaNoCarrinho = itensAnteriores.some((itemNoCarrinho) => itemNoCarrinho.id === item.id);

        if (!jaEstaNoCarrinho) {
            return [...itensAnteriores, { ...item, quantidade: 1 }];
        }

        return itensAnteriores.map((itemNoCarrinho) => {
            if (itemNoCarrinho.id === item.id) {
                return { ...itemNoCarrinho, quantidade: Math.min (itemNoCarrinho.quantidade + 1, itemNoCarrinho.estoque) };
            }
            return itemNoCarrinho;
        });
    });
  }


  function removerItem(itemId) {
    setItens((itensAnteriores) => itensAnteriores.filter((item) => item.id !== itemId));
  }

  function limparCarrinho() {
    setItens([]);
  }
  
 
  return (
    <CarrinhoContext.Provider value={{ itens, adicionarItem, removerItem, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}