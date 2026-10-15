import { useState } from 'react';

export function usePagamento() {
    const [processando, setProcessando] = useState(false);

    async function processarCompra(callback) {
        setProcessando(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        callback();
        setProcessando(false);
    }

    return { processando, processarCompra };
}