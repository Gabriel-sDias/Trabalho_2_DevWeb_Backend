import { Router, Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import videoRoutes from "../modules/videos/routes/videos.routes";
export default function createAplicationRouter(): Router {
  const appRoutes = Router();

  appRoutes.use("/videos", videoRoutes);
  appRoutes.use(errors());

  return appRoutes;
}
