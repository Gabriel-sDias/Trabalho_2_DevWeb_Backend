import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import VideosController from "../controllers/Controller";

const videoRoutes = Router();

videoRoutes.post(
  "/register",
  celebrate({
    [Segments.BODY]: Joi.object({
      duration: Joi.string().required(),
      thumbnailUrl: Joi.string().required(),
      title: Joi.string().required(),
      userId: Joi.string().required(),
      videoUrl: Joi.string().required(),
    }),
  }),
  VideosController.CreateVideo
);

videoRoutes.get("/getVideos", VideosController.GetVideos);

export default videoRoutes;
