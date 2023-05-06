import { Repository } from "typeorm";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const listEntregasServices = async (params) => {
  const entregaRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  let inicio = params.slice(0, 2);
  let final = params.slice(params.length - 2);

  const entregas: Entregas[] = await entregaRepositorio
    .createQueryBuilder("entregas")
    .where("entregas.data = :data", { data: `${inicio}/${final}` })
    .getMany();

  return entregas;
};

export default listEntregasServices;