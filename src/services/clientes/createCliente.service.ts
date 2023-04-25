import AppDataSource from "../../data-source";
import { Clientes } from "../../entities/clientes.entities";
import { iClientRequest } from "../../interface";

const createClientService = async (data: iClientRequest) => {
  const clienteRepositorio = AppDataSource.getRepository(Clientes);

  const cliente = clienteRepositorio.create(data);

  await clienteRepositorio.save(cliente);

  return cliente;
};

export default createClientService;
