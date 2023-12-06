import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();

userRoutes.post(
  "/register",
  celebrate({
    [Segments.BODY]: Joi.object({
      name: Joi.string().required(),
      profilePicture: Joi.string().optional(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  UserController.CreateUser
);
userRoutes.post(
  "/auth",
  celebrate({
    [Segments.BODY]: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  UserController.AuthUser
);

export default userRoutes;
