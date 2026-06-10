import { z } from "zod";

export const alunoSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres"),

  email: z.email("Email inválido"),

  telefone: z.string().optional(),

  curso: z.string().optional(),
});