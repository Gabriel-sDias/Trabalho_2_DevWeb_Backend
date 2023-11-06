import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
interface CreateVideoParams {
  title: string;
  duration: string;
  videoUrl: string;
  thumbnailUrl: string;
  userId: string;
}
export class CreateVideo {
  async execute({
    duration,
    thumbnailUrl,
    title,
    userId,
    videoUrl,
  }: CreateVideoParams) {
    const dbRepository = db.collection("videos");
    const newVideo = await dbRepository.add({
      title: title,
      duration: duration,
      videoUrl: videoUrl,
      thumbnailUrl: thumbnailUrl,
      userId: userId,
      create_at: firestore.FieldValue.serverTimestamp(),
    });
    return newVideo;
  }
}
