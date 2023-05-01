import { Router } from "express";
import createEntregaController from "../controllers/entregas/createEntregas.controller";
import updateEntregaController from "../controllers/entregas/updateEntrega.controller";
import listEntregasController from "../controllers/entregas/listEntregas.controller";
import deleteEntregasController from "../controllers/entregas/deleteEntregas.controller";

const entregasRoutes: Router = Router();

entregasRoutes.post("", createEntregaController);
entregasRoutes.patch("", updateEntregaController);
entregasRoutes.get("/:data", listEntregasController);
entregasRoutes.delete("", deleteEntregasController);

export default entregasRoutes;
