import { Request, Response } from "express";
import { VagaService } from "../services/vagaService";

export class VagaController {
  private service = new VagaService();

  criar = async (req: Request, res: Response) => {
    const vaga = await this.service.criar(req.body);

    return res.status(201).json(vaga);
  };

  listar = async (_req: Request, res: Response) => {
    const vagas = await this.service.listar();

    return res.json(vagas);
  };

  buscarPorId = async (req: Request, res: Response) => {
    const vaga = await this.service.buscarPorId(
      Number(req.params.id)
    );

    return res.json(vaga);
  };
}