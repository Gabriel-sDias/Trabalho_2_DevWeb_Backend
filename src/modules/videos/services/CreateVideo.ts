import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
interface CreateVideoParams {
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  user: any;
}
export class CreateVideo {
  async execute({ thumbnailUrl, title, user, videoUrl }: CreateVideoParams) {
    const dbRepository = db.collection("videos");
    const newVideo = await dbRepository.add({
      title: title,
      videoUrl: videoUrl,
      thumbnailUrl: thumbnailUrl,
      user: user,
      create_at: firestore.FieldValue.serverTimestamp(),
    });
    return newVideo;
  }
}
