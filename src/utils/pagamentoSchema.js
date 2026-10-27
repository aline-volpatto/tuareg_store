import { z } from "zod";

export const pagamentoSchema = z.object({
  titular: z.string().min(1, { message: "O nome do titular é obrigatório" }),
  numeroCartao: z
    .string()
    .transform((valor) => valor.replace(/[\s-]/g, ""))
    .refine((valor) => /^\d{16}$/.test(valor), { message: 'O número do cartão deve ter 16 dígitos' }),
  validade: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {message: "A validade deve estar no formato MM/AA"}),
  cvv: z.string().regex(/^\d{3}$/, { message: "O CVV deve ter 3 dígitos" }),
});
