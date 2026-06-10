import { Request, Response } from "express";
import { CandidaturaService } from "../services/candidaturaService";

export class CandidaturaController {
  private service = new CandidaturaService();

  criar = async (req: Request, res: Response) => {
    const candidatura = await this.service.criar(req.body);

    return res.status(201).json(candidatura);
  };

  listar = async (_req: Request, res: Response) => {
    const candidaturas = await this.service.listar();

    return res.json(candidaturas);
  };
}