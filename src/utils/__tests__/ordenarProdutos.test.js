import { describe, it, expect } from "vitest";
import { ordenarProdutos } from "../ordenarProdutos";

const produtos = [
  { id: "1", nome: "Camiseta", preco: 179 },
  { id: "2", nome: "Avental", preco: 99 },
  { id: "3", nome: "Moletom", preco: 199 },
];

describe("ordenarProdutos", () => {
  it("ordena por menor preço", () => {
    const resultado = ordenarProdutos(produtos, "menor-preco");
    expect(resultado.map((p) => p.id)).toEqual(["2", "1", "3"]);
  });

  it("ordena por maior preço", () => {
    const resultado = ordenarProdutos(produtos, "maior-preco");
    expect(resultado.map((p) => p.id)).toEqual(["3", "1", "2"]);
  });

  it("ordena por nome", () => {
    const resultado = ordenarProdutos(produtos, "nome");
    expect(resultado.map((p) => p.nome)).toEqual(["Avental", "Camiseta", "Moletom"]);
  });

  it("não altera o array original", () => {
    ordenarProdutos(produtos, "menor-preco");
    expect(produtos.map((p) => p.id)).toEqual(["1", "2", "3"]);
  });
});