import { prisma } from "../utils/prisma";

export class EmpresaRepository {
  async listar() {
    return prisma.empresa.findMany();
  }

  async buscarPorId(id: number) {
    return prisma.empresa.findUnique({
      where: { id },
    });
  }

  async criar(data: {
    nome: string;
    cnpj: string;
    email: string;
    telefone?: string;
  }) {
    return prisma.empresa.create({
      data,
    });
  }
}