import { useState } from 'react';
import { esperar } from "../utils/esperar";

export function usePagamento() {
    const [processando, setProcessando] = useState(false);

    async function processarCompra(callback) {
        setProcessando(true);
        await esperar(3000);
        callback();
        setProcessando(false);
    }

    return { processando, processarCompra };
}