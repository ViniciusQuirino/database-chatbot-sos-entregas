import { Request, Response } from "express";
import listenWebhookService from "../../services/webhook/createWebhook.service";


const listenWebhookController = async (req: Request, res: Response) => {
  console.log(req.body.status);
  if (req.body.status == "accepted") {
    await listenWebhookService(req.body);
  }

  return res.status(200).json(req.body);
};
export default listenWebhookController;