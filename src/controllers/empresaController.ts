import { Request, Response } from "express";
import { EmpresaService } from "../services/empresaService";
import { empresaSchema } from "../schemas/empresaSchema";

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
    try {
      const dados = empresaSchema.parse(req.body);

      const empresa = await this.service.criar(dados);

      return res.status(201).json(empresa);
    } catch (error) {
      return res.status(400).json(error);
    }
  };

  aprovar = async (req: Request, res: Response) => {
    const empresa = await this.service.aprovar(
      Number(req.params.id)
    );

    return res.json(empresa);
  };
}