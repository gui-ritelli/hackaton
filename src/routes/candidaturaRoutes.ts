import { Router } from "express";
import { CandidaturaController } from "../controllers/candidaturaController";

const candidaturaRoutes = Router();
const controller = new CandidaturaController();

candidaturaRoutes.post("/", controller.criar);
candidaturaRoutes.get("/", controller.listar);

export { candidaturaRoutes };