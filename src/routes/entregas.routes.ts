import { Router } from "express";
import createEntregasController from "../controllers/entregas/createEntregas.controller";

const entregasRoutes: Router = Router();

entregasRoutes.post("", createEntregasController);
// entregasRoutes.get("/:id");
// entregasRoutes.patch("/:id");

export default entregasRoutes;
