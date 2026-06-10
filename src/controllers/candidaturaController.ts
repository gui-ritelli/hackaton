import { Request, Response } from "express";
import { CandidaturaService } from "../services/candidaturaService";
import { candidaturaSchema } from "../schemas/candidaturaSchema";

export class CandidaturaController {
  private service = new CandidaturaService();

  criar = async (req: Request, res: Response) => {
    try {
      const dados = candidaturaSchema.parse(req.body);

      const candidatura = await this.service.criar(dados);

      return res.status(201).json(candidatura);
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          erro: "Dados inválidos",
          mensagens: error.issues.map(
            (issue: any) => issue.message
          ),
        });
      }

      return res.status(500).json({
        erro: "Erro interno do servidor",
      });
    }
  };

  listar = async (_req: Request, res: Response) => {
    const candidaturas = await this.service.listar();

    return res.json(candidaturas);
  };

  alterarStatus = async (
    req: Request,
    res: Response
  ) => {
    const candidatura =
      await this.service.alterarStatus(
        Number(req.params.id),
        req.body.status
      );

    return res.json(candidatura);
  };
}