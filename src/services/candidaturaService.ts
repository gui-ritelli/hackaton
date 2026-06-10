import { CandidaturaRepository } from "../repositories/candidaturaRepository";

export class CandidaturaService {
  private repository = new CandidaturaRepository();

  async criar(data: {
    alunoId: number;
    vagaId: number;
  }) {
    return this.repository.criar(data);
  }

  async listar() {
    return this.repository.listar();
  }

  async alterarStatus(
    id: number,
    status: "APROVADO" | "REPROVADO"
  ) {
    return this.repository.alterarStatus(
      id,
      status
    );
  }
}