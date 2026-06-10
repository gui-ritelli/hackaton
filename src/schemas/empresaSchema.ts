import { z } from "zod";

export const empresaSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres"),

  cnpj: z
    .string()
    .min(14, "CNPJ inválido"),

  email: z.email("Email inválido"),

  telefone: z.string().optional(),
});