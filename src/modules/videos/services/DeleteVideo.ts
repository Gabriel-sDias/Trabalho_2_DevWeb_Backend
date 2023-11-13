import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
interface DeleteVideoParams {
  videoId: string;
}
export class DeleteVideo {
  async execute({ videoId }: DeleteVideoParams) {
    const dbRepository = db.collection("videos");
    const deleteVideo = dbRepository.doc(videoId).delete();
    return deleteVideo;
  }
}
