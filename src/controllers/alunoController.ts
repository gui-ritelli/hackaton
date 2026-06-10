import { Request, Response } from "express";
import { AlunoService } from "../services/alunoService";

export class AlunoController {
  private service = new AlunoService();

  criar = async (req: Request, res: Response) => {
    const aluno = await this.service.criar(req.body);

    return res.status(201).json(aluno);
  };

  listar = async (_req: Request, res: Response) => {
    const alunos = await this.service.listar();

    return res.json(alunos);
  };

  buscarPorId = async (req: Request, res: Response) => {
    const aluno = await this.service.buscarPorId(Number(req.params.id));

    return res.json(aluno);
  };
}