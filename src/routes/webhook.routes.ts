import { Router } from "express";
import listenWebhookController from "../controllers/webhook/createWebhook.controller";
import listEntregasController from "../controllers/entregas/listEntregas.controller";
import createDataController from "../controllers/webhook/createData.controller";
import deleteEntregasController from "../controllers/entregas/deleteEntregas.controller";


const webHook: Router = Router();

webHook.post("", listenWebhookController);
webHook.get("", listEntregasController);
webHook.post("/create", createDataController);
webHook.delete("", deleteEntregasController);

export default webHook;
