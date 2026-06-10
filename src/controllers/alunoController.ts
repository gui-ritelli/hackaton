import { Request, Response } from "express";
import { AlunoService } from "../services/alunoService";
import { alunoSchema } from "../schemas/alunoSchema";

export class AlunoController {
  private service = new AlunoService();

  criar = async (req: Request, res: Response) => {
    try {
      const dados = alunoSchema.parse(req.body);

      const aluno = await this.service.criar(dados);

      return res.status(201).json(aluno);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  listar = async (_req: Request, res: Response) => {
    const alunos = await this.service.listar();

    return res.json(alunos);
  };

  buscarPorId = async (req: Request, res: Response) => {
    const aluno = await this.service.buscarPorId(
      Number(req.params.id)
    );

    return res.json(aluno);
  };
}