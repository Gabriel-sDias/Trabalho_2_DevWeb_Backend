import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
interface UpdateVideoParams {
  videoId: string;
  title: string;
  thumbnailUrl: string;
  userId: string;
}
export class UpdateVideo {
  async execute({ videoId, thumbnailUrl, title, userId }: UpdateVideoParams) {
    const dbRepository = db.collection("videos");
    let list = [];
    const getVideo = await dbRepository
      .where("user.userId", "==", userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push({ data: doc.data(), id: doc.id });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });

    let filter;
    list.forEach((doc) => {
      if (doc.id == videoId) {
        filter = doc;
      }
    });
    const data = {
      title: title ? title : filter.data.title,
      thumbnailUrl: thumbnailUrl ? thumbnailUrl : filter.data.thumbnailUrl,
    };
    const videoUpdate = dbRepository.doc(videoId).update(data);
    return videoUpdate;
  }
}
