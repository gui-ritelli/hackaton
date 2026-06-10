import { Router } from "express";
import { VagaController } from "../controllers/vagaController";

const vagaRoutes = Router();
const controller = new VagaController();

vagaRoutes.post("/", controller.criar);
vagaRoutes.get("/", controller.listar);
vagaRoutes.get("/:id", controller.buscarPorId);

export { vagaRoutes };