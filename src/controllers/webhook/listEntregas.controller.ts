import { Request, Response } from "express";
import listEntregasService from "../../services/webhook/listEntregas.service";

const listEntregasController = async (req: Request, res: Response) => {
  const reponse = await listEntregasService();

  return res.status(200).json(reponse);
};
export default listEntregasController;
