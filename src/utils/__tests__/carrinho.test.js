import { describe, it, expect } from "vitest";
import { calcularTotal, calcularQuantidadeTotal, calcularSubtotal  } from "../carrinho";

const itens = [
  { id: "1", nome: "Moletom bolacha TUAREG TEAM", preco: 199.7, quantidade: 2 },
  { id: "2", nome: "Camiseta TUAREG TEAM BRAZIL", preco: 179, quantidade: 1 },
];

describe("calcularTotal", () => {
  it("soma o preço vezes a quantidade de todos os itens", () => {
    const resultado = calcularTotal(itens);
    expect(resultado).toBeCloseTo(578.4);
  });

  it("devolve zero quando o carrinho está vazio", () => {
    const resultado = calcularTotal([]);
    expect(resultado).toBe(0);
  });
});

describe("calcularQuantidadeTotal", () => {
  it("soma as quantidades de todos os itens", () => {
    const resultado = calcularQuantidadeTotal(itens);
    expect(resultado).toBe(3);
  });

  it("devolve zero quando o carrinho está vazio", () => {
    const resultado = calcularQuantidadeTotal([]);
    expect(resultado).toBe(0);
  });
});

describe("calcularSubtotal", () => {
  it("multiplica o preço pela quantidade do item", () => {
    const resultado = calcularSubtotal(itens[0]);
    expect(resultado).toBeCloseTo(399.4);
  });

  it("devolve zero quando a quantidade é zero", () => {
    const resultado = calcularSubtotal({ preco: 179, quantidade: 0 });
    expect(resultado).toBe(0);
  });
});