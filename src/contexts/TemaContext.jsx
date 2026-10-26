import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const CHAVE_TEMA = "tema-tuareg";

export const TemaContext = createContext(null);

function obterTemaInicial() {
  try {
    const temaSalvo = localStorage.getItem(CHAVE_TEMA);
    if (temaSalvo === "claro" || temaSalvo === "escuro") {
      return temaSalvo;
    }
  } catch (error) {
    console.error(error);
  }

  const sistemaEscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return sistemaEscuro ? "escuro" : "claro";
}

export function TemaProvider({ children }) {
  const [tema, setTema] = useState(obterTemaInicial);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    try {
      localStorage.setItem(CHAVE_TEMA, tema);
    } catch (error) {
      console.error(error);
    }
  }, [tema]);

  const alternarTema = useCallback(() => {
    setTema((temaAtual) => (temaAtual === "claro" ? "escuro" : "claro"));
  }, []);

  const valor = useMemo(() => ({ tema, alternarTema }), [tema, alternarTema]);

  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>;
}

TemaProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

