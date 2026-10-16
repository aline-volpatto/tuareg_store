import { describe, it, expect } from "vitest";
import { formatarMoeda, mensagemErro } from "../moeda";


describe("formatarMoeda", () => {
  it("formata um número como reais", () => {
    expect(formatarMoeda(179)).toBe("R$\u00a0179,00");
  })
  
  it("devolve a mensagem de erro quando recebe um texto", () => {
    expect(formatarMoeda("179")).toBe(mensagemErro);
  })
  
  it("devolve a mensagem de erro quando recebe NaN", () => {
    expect(formatarMoeda(NaN)).toBe(mensagemErro);
  })
});