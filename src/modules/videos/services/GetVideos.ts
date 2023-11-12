import { db } from "../../../database/firebase";

export class GetVideos {
  async execute() {
    const dbRepository = await db.collection("videos");
    const getVideos = await dbRepository.get();
    const videolist = [];
    getVideos.forEach((doc) => {
      let data = doc.data();
      let id = doc.id;
      const video = {
        data,
        id,
      };
      videolist.push(video);
    });
    return videolist;
  }
}
