import { Router } from "express";
import { EmpresaController } from "../controllers/empresaController";

const empresaRoutes = Router();
const controller = new EmpresaController();

empresaRoutes.get("/", controller.listar);
empresaRoutes.get("/:id", controller.buscarPorId);
empresaRoutes.post("/", controller.criar);

export { empresaRoutes };