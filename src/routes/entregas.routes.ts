import { Router } from "express";
import createEntregaController from "../controllers/entregas/createEntregas.controller";
import updateEntregaController from "../controllers/entregas/updateEntrega.controller";
import listEntregasController from "../controllers/entregas/listEntregas.controller";

const entregasRoutes: Router = Router();

entregasRoutes.post("", createEntregaController);
entregasRoutes.patch("", updateEntregaController);
entregasRoutes.get("/:data", listEntregasController);

export default entregasRoutes;
