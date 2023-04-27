// import apiFood from "../../api";
import AppDataSource from "../../data-source";
import { Entregas } from "../../entities/entregas.entites";

const createEntregasService = async (body: any) => {
  if (body.oi == "oi") {
    console.log(body);
  } else if (body.oi == null) {
    const data = {
      id: "301",
      status: "open",
      notes: "Entrega paga",
      deliveryPoint: {
        address: "avn pedro ometo 1401 barra bonita sp",
      },
    };

    const response = await fetch(
      "https://app.foodydelivery.com/rest/1.2/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "326b3f2b4c9f4bcdb48363c0d023260c",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));

    const dados = {
      telefone: "5514998536591",
      entregaidfood: response.uid,
    };

    const webHook = await fetch(
      "https://webhook-api-sos.onrender.com/webhook/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      }
    )
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => console.log(err));

    console.log(webHook);

    const doido = {
      id: response.uui,
      tokencoleta: "326b3f2b4c9f4bcdb48363c0d023260c",
      entrega: response.deliveryPoint.address,
      obs: "salve salve",
      formadepagamento: "pix",
      telefone: "5514998536591@c.us",
    };

    const entregasRepositorio = AppDataSource.getRepository(Entregas);

    const entregas = entregasRepositorio.create(doido);

    await entregasRepositorio.save(entregas);

    return entregas;
  }
};

export default createEntregasService;
