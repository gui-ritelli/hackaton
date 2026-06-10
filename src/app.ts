import express from "express";
import cors from "cors";

import { empresaRoutes } from "./routes/empresaRoutes";
import { alunoRoutes } from "./routes/alunoRoutes";
import { vagaRoutes } from "./routes/vagaRoutes";
import { candidaturaRoutes } from "./routes/candidaturaRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/empresas", empresaRoutes);
app.use("/alunos", alunoRoutes);
app.use("/vagas", vagaRoutes);
app.use("/candidaturas", candidaturaRoutes);

export { app };