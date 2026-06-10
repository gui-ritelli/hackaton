import { prisma } from "../utils/prisma";

export class CandidaturaRepository {
  async criar(data: {
    alunoId: number;
    vagaId: number;
  }) {
    return prisma.candidatura.create({
      data,
    });
  }

  async listar() {
    return prisma.candidatura.findMany({
      include: {
        aluno: true,
        vaga: {
          include: {
            empresa: true,
          },
        },
      },
    });
  }

  async alterarStatus(
    id: number,
    status: "APROVADO" | "REPROVADO"
  ) {
    return prisma.candidatura.update({
      where: { id },
      data: { status },
    });
  }
}