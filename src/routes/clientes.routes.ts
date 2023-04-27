import { Router } from "express";
import createClientController from "../controllers/clientes/createCliente.controller";
import listClientControllers from "../controllers/clientes/listCliente.controller";
import updateClientControllers from "../controllers/clientes/updateCliente.controller";
import retrieveClientController from "../controllers/clientes/retrieveCliente.controller";

const clientesRoutes: Router = Router();

clientesRoutes.post("", createClientController);
clientesRoutes.get("", listClientControllers);
clientesRoutes.patch("/:id", updateClientControllers);
clientesRoutes.get("/:id", retrieveClientController);

export default clientesRoutes;
