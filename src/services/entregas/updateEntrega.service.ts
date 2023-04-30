import AppDataSource from "../../data-source";
import { Repository } from "typeorm";
import { Entregas } from "../../entities/entregas.entites";

const updateEntregaService = async (body) => {
  const entregasRepositorio: Repository<Entregas> =
    AppDataSource.getRepository(Entregas);

  const ultimaEntrega = await AppDataSource.createQueryBuilder(
    Entregas,
    "entregas"
  )
    .where("entregas.telefone = :telefone", { telefone: body.telefone })
    .orderBy("entregas.id", "DESC")
    .limit(1)
    .getOne();

  const entrega: Entregas = await entregasRepositorio.save({
    ...ultimaEntrega,
    ...body,
  });

  return entrega;
};

export default updateEntregaService;
