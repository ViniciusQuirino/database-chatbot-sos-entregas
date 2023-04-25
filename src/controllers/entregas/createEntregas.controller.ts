import { Request, Response } from "express";
import createEntregasService from "../../services/entregas/createEntregas.service";

const createEntregasController = async (req: Request, res: Response) => {
  const response = await createEntregasService(req.body);

  return res.status(201).json(response);
};

export default createEntregasController;
