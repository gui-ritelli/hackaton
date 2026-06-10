import { Router } from "express";
import { AlunoController } from "../controllers/alunoController";

const alunoRoutes = Router();
const controller = new AlunoController();

alunoRoutes.post("/", controller.criar);
alunoRoutes.get("/", controller.listar);
alunoRoutes.get("/:id", controller.buscarPorId);

export { alunoRoutes };