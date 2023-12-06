import { Router, Request, Response, NextFunction } from "express";
import { errors } from "celebrate";
import videoRoutes from "../modules/videos/routes/videos.routes";
import userRoutes from "../modules/users/routes/user.routes";
export default function createAplicationRouter(): Router {
  const appRoutes = Router();

  appRoutes.use("/videos", videoRoutes);
  appRoutes.use("/user", userRoutes);
  appRoutes.use(errors());

  return appRoutes;
}
