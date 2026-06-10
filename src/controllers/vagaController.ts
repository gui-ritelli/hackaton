import { Request, Response } from "express";
import { VagaService } from "../services/vagaService";
import { vagaSchema } from "../schemas/vagaSchema";

export class VagaController {
  private service = new VagaService();

  criar = async (req: Request, res: Response) => {
    try {
      const dados = vagaSchema.parse(req.body);

      const vaga = await this.service.criar(dados);

      return res.status(201).json(vaga);
    } catch (error) {
      return res.status(400).json(error);
    }
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