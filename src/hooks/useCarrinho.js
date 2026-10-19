import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext";

export function useCarrinho() {
  const contexto = useContext(CarrinhoContext);

  if (contexto === null) {
    throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
  }

  return contexto;
}