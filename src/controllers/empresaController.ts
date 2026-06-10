import { Request, Response } from "express";
import { EmpresaService } from "../services/empresaService";

export class EmpresaController {
  private service = new EmpresaService();

  listar = async (_req: Request, res: Response) => {
    const empresas = await this.service.listar();

    return res.json(empresas);
  };

  buscarPorId = async (req: Request, res: Response) => {
    const empresa = await this.service.buscarPorId(
      Number(req.params.id)
    );

    return res.json(empresa);
  };

  criar = async (req: Request, res: Response) => {
    const empresa = await this.service.criar(req.body);

    return res.status(201).json(empresa);
  };
}