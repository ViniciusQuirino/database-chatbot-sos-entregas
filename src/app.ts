import "express-async-errors";
import express from "express";
import cors from "cors";
import clientesRoutes from "./routes/clientes.routes";
import etapasRoutes from "./routes/etapas.routes";
import entregasRoutes from "./routes/entregas.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/clientes", clientesRoutes);
app.use("/etapas", etapasRoutes);
app.use("/entregas", entregasRoutes);

export default app;
