import { VagaRepository } from "../repositories/vagaRepository";

export class VagaService {
  private repository = new VagaRepository();

  async criar(data: {
    titulo: string;
    descricao: string;
    requisitos?: string;
    bolsa?: number;
    empresaId: number;
  }) {
    return this.repository.criar(data);
  }

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {
    return this.repository.buscarPorId(id);
  }
}