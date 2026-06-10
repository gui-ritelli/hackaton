import { prisma } from "../utils/prisma";

export class AlunoRepository {
  async criar(data: any) {
    return prisma.aluno.create({
      data,
    });
  }

  async listar() {
    return prisma.aluno.findMany();
  }

  async buscarPorId(id: number) {
    return prisma.aluno.findUnique({
      where: { id },
    });
  }
}