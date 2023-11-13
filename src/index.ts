import "reflect-metadata";
import "express-async-errors";
import express from "express";

import cors from "cors";
import createAplicationRouter from "./routes/routes";
const port = process.env.PORT || 5555;
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(createAplicationRouter());

app.listen(port, () => console.log("server up"));
