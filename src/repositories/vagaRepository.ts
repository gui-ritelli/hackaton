import { prisma } from "../utils/prisma";

export class VagaRepository {
  async criar(data: any) {
    return prisma.vaga.create({
      data,
    });
  }

  async listar() {
    return prisma.vaga.findMany({
      include: {
        empresa: true,
      },
    });
  }

  async buscarPorId(id: number) {
    return prisma.vaga.findUnique({
      where: { id },
      include: {
        empresa: true,
      },
    });
  }
}