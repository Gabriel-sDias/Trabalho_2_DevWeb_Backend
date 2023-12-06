import { Response, Request } from "express";
import { sign } from "jsonwebtoken";
import { Login } from "../service/AuthUser";
import { CreateUser } from "../service/CreateUser";
export class UserController {
  static async AuthUser(request: Request, response: Response) {
    const { email, password } = request.body;
    const service = new Login();
    const result = await service.execute({ email, password });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(200).json({ result });
  }

  static async CreateUser(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, password, profilePicture } = request.body;
    const userService = new CreateUser();
    const result = await userService.execute({
      name,
      email,
      password,
      profilePicture,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(201).json(result);
  }
}
