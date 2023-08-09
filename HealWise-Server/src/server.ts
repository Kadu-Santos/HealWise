import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(4003, () => console.log("O servidor está executando na porta 4003: http://localhost:4003"));