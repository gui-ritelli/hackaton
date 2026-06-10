import { EmpresaRepository } from "../repositories/empresaRepository";

export class EmpresaService {
  private repository = new EmpresaRepository();

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {
    return this.repository.buscarPorId(id);
  }

  async criar(data: {
    nome: string;
    cnpj: string;
    email: string;
    telefone?: string;
  }) {
    return this.repository.criar(data);
  }
}