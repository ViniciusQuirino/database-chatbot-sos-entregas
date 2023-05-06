import { Request, Response } from "express";
import createDataService from "../../services/webhook/createData.service";


const createDataController = async (req: Request, res: Response) => {
  const response = await createDataService(req.body);

  return res.status(201).json(response);
};
export default createDataController;
