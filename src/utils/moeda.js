
const mensagemErro = "Não foi possível carregar o valor, tente novamente.";

export function formatarMoeda(valor) {

    if (typeof valor !== "number") {
        return (mensagemErro);
    }

    if (Number.isNaN(valor)) {
        return (mensagemErro);
    }

  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

