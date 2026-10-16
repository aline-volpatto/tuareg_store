import { describe, it, expect } from "vitest";
import { filtrarProdutos } from "../busca";


 const produtos = [
      { id: 1, nome: "Camiseta Mehari icon"},
      { id: 2, nome: "Moletom bolacha TUAREG TEAM"},
      { id: 3, nome: "Camiseta TUAREG KIDS Mehari"},
    ];

describe("filtrarProdutos", () => {
  it("devolve os produtos cujo nome contém o termo", () => {
   
    const resultado = filtrarProdutos(produtos, "Mehari");
     expect(resultado).toHaveLength(2);
    expect(resultado).toEqual([produtos[0], produtos[2]]);
  });

  it("devolve a lista vazia quando não encontra o termo", () => {
   
    const resultado = filtrarProdutos(produtos, "qualquer coisa");
     expect(resultado).toHaveLength(0);
  });


  it("devolve o produto quando digitado em letras maiúsculas", () => {
   
    const resultado = filtrarProdutos(produtos, "MEHARI");
     expect(resultado).toHaveLength(2);
    expect(resultado).toEqual([produtos[0], produtos[2]]);
  });

});
