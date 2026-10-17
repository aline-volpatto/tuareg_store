import {useState, useEffect} from 'react';
import {buscarProdutos} from '../services/api.js';

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const lista = await buscarProdutos();
        setProdutos(lista);
      } catch (e) {
        setError(e.message);
      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  return { produtos, carregando, error };
}