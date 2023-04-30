import { Router } from "express";
import createEntregaController from "../controllers/entregas/createEntregas.controller";
import updateEntregaController from "../controllers/entregas/updateEntrega.controller";

const entregasRoutes: Router = Router();

entregasRoutes.post("", createEntregaController);
entregasRoutes.patch("", updateEntregaController);

export default entregasRoutes;
