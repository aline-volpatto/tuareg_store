import { describe, it, expect } from "vitest";
import { filtrarPorCategoria } from "../filtrarPorCategoria";

const produtos = [
  { id: "1", categoria: "Masculino" },
  { id: "2", categoria: "Infantil" },
];

describe("filtrarPorCategoria", () => {
  it("retorna todos quando a categoria é vazia", () => {
    expect(filtrarPorCategoria(produtos, "")).toHaveLength(2);
  });

  it("filtra pela categoria", () => {
    const resultado = filtrarPorCategoria(produtos, "Infantil");
    expect(resultado).toEqual([{ id: "2", categoria: "Infantil" }]);
  });
});