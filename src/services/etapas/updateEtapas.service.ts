import { Repository } from "typeorm";
import { Etapas } from '../../entities/etapas.entites'
import AppDataSource from "../../data-source";

const updatePassoService = async (params: string, body: any) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas: Etapas = await etapasRepositorio.findOneBy({
    telefone: body.telefone,
  });

  const novaEtapa: Etapas = await etapasRepositorio.save({
    ...etapas,
    ...body,
  });
  return novaEtapa;
};

export default updatePassoService;
