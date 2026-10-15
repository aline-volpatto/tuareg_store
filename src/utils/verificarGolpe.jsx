
export function cartaoSuspeito(numeroCartao) {
  const digitos = numeroCartao.split('');
  const primeiroDigito = digitos[0];

    return digitos.every(digito => digito === primeiroDigito);
}