import { Request, Response } from "express";
import { CreateVideo } from "../services/CreateVideo";
import { GetVideos } from "../services/GetVideos";
import { GetVideoById } from "../services/GetVideoById";
export default class VideosController {
  static async CreateVideo(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title, videoUrl, thumbnailUrl, user } = request.body;
    const videoService = new CreateVideo();
    const result = await videoService.execute({
      thumbnailUrl,
      title,
      user,
      videoUrl,
    });

    return response.status(201).json(result);
  }

  static async GetVideos(
    request: Request,
    response: Response
  ): Promise<Response> {
    const videoService = new GetVideos();
    const result = await videoService.execute();
    return response.status(200).json(result);
  }

  static async GetVideoById(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const videoService = new GetVideoById();
    const result = await videoService.execute({ id });
    return response.status(200).json(result);
  }
}
