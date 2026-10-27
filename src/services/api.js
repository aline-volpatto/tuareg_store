import dadosLocais from "../../db.json";
import { esperar } from "../utils/esperar";


const URL_API = "http://localhost:3001";
const jsonServer = import.meta.env.VITE_USAR_JSON_SERVER === "true"
const ATRASO_SIMULADO = 3000;

export async function buscarProdutos() {
    await esperar(ATRASO_SIMULADO);

    if (!jsonServer){
        return dadosLocais.produtos;
    }

    try{
        const resposta = await fetch (`${URL_API}/produtos`);

        if (!resposta.ok){
            throw new Error(`Erro ${resposta.status}`);
        }

        return await resposta.json();
    } catch (erro){
        console.error(erro);
        throw new Error("Não foi possível carregar os produtos, tente novamente mais tarde! Bons voos!", { cause: erro });
    }
}
        


export async function buscarProdutoPorId(id) {


  if (!jsonServer) {                                   
    const produto = dadosLocais.produtos.find((produto) => produto.id === id);
    return produto ?? null;                                
  }

  try {
    const resposta = await fetch(`${URL_API}/produtos/${id}`);

    if (resposta.status === 404) {                        
      return null;
    }

    if (!resposta.ok) {
      throw new Error(`Erro ${resposta.status}`);
    }

    return await resposta.json();
  } catch (erro) {
    console.error(erro);
    throw new Error("Não foi possível carregar o produto, tente novamente mais tarde! Bons voos!",  { cause: erro });
  }
}