import { AlunoRepository } from "../repositories/alunoRepository";

export class AlunoService {
  private repository = new AlunoRepository();

  async criar(data: any) {
    return this.repository.criar(data);
  }

  async listar() {
    return this.repository.listar();
  }

  async buscarPorId(id: number) {
    return this.repository.buscarPorId(id);
  }
}