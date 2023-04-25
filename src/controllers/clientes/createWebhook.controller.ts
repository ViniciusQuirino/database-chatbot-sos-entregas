import { Request, Response } from "express";

const createWebhookController = async (req: Request, res: Response) => {
  //   const data: iClientRequest = req.body;

  //   const response = await createClientService(data);
  const result = req.body;
  console.log(req.body)
  return res.status(200).json(result);
};
export default createWebhookController;
