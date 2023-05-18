import { Repository } from "typeorm";
import { Etapas } from "../../entities/etapas.entites";
import AppDataSource from "../../data-source";

const updatePassoService = async (params: string, body: any) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas = await etapasRepositorio
    .createQueryBuilder("etapas")
    .where("etapas.telefone = :telefone", { telefone: params })
    .orderBy("etapas.id", "DESC")
    .limit(1)
    .getOne();

  const novaEtapa: Etapas = await etapasRepositorio.save({
    ...etapas,
    ...body,
  });

  return novaEtapa;
};

export default updatePassoService;
