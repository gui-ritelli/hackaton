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
}