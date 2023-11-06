import { db } from "../../../database/firebase";

export class GetVideos {
  async execute() {
    const dbRepository = db.collection("videos");
    const getVideos = await dbRepository.get();

    return getVideos.docs;
  }
}
