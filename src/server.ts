import "reflect-metadata";
import "express-async-errors";
import express from "express";

import cors from "cors";
import createAplicationRouter from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(createAplicationRouter());

app.listen(5555, () => console.log("server up"));
