import { Repository } from "typeorm";
import { Etapas } from "../../entities/etapas.entites";
import AppDataSource from "../../data-source";

const retrievePassoService = async (params: string) => {
  const etapasRepositorio: Repository<Etapas> =
    AppDataSource.getRepository(Etapas);

  const etapas: Etapas = await etapasRepositorio.findOneBy({
    telefone: params,
  });

  return etapas;
};

export default retrievePassoService;
