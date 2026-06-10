import { z } from "zod";

export const vagaSchema = z.object({
  titulo: z.string().min(3, "Título deve ter no mínimo 3 caracteres"),
  descricao: z.string().min(5, "Descrição deve ter no mínimo 5 caracteres"),
  requisitos: z.string().optional(),
  bolsa: z.number().optional(),
  empresaId: z.number(),
});