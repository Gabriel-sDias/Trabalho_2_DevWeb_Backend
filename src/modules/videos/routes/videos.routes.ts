import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import VideosController from "../controllers/Controller";

const videoRoutes = Router();

videoRoutes.post(
  "/register",
  celebrate({
    [Segments.BODY]: Joi.object({
      thumbnailUrl: Joi.string().required(),
      title: Joi.string().required(),
      videoUrl: Joi.string().required(),
      user: {
        name: Joi.string().required(),
        profilePicture: Joi.string().required(),
        userId: Joi.string().required(),
      },
    }),
  }),
  VideosController.CreateVideo
);

videoRoutes.get("/getVideos", VideosController.GetVideos);

videoRoutes.get(
  "/getVideoById/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      id: Joi.string().required(),
    }),
  }),
  VideosController.GetVideoById
);

videoRoutes.put(
  "/updateVideo",
  celebrate({
    [Segments.BODY]: Joi.object({
      thumbnailUrl: Joi.string().optional(),
      title: Joi.string().optional(),
      videoId: Joi.string().required(),
      userId: Joi.string().required(),
    }),
  }),
  VideosController.UpdateVideo
);

videoRoutes.delete(
  "/deleteVideo/:videoId",
  celebrate({
    [Segments.PARAMS]: Joi.object({
      videoId: Joi.string().required(),
    }),
  }),
  VideosController.DeleteVideo
);

export default videoRoutes;
