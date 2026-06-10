import { z } from "zod";

export const candidaturaSchema = z.object({
  alunoId: z.number(),
  vagaId: z.number(),
});