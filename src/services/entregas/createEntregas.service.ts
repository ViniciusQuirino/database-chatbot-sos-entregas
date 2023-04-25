import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const createEntregasService = async (body: any) => {
  const entregasRepositorio = AppDataSource.getRepository(Entregas);

  const entregas = entregasRepositorio.create(body);

  await entregasRepositorio.save(entregas);

  return entregas;
};

export default createEntregasService;
