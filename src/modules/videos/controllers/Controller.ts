import { Request, Response } from "express";
import { CreateVideo } from "../services/CreateVideo";
import { GetVideos } from "../services/GetVideos";
export default class VideosController {
  static async CreateVideo(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { title, duration, videoUrl, thumbnailUrl, userId } = request.body;
    const videoService = new CreateVideo();
    const result = await videoService.execute({
      duration,
      thumbnailUrl,
      title,
      userId,
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
}
