import { Router } from "express";
import { CandidaturaController } from "../controllers/candidaturaController";

const candidaturaRoutes = Router();
const controller = new CandidaturaController();

candidaturaRoutes.post("/", controller.criar);
candidaturaRoutes.get("/", controller.listar);

candidaturaRoutes.patch(
  "/:id",
  controller.alterarStatus
);

export { candidaturaRoutes };