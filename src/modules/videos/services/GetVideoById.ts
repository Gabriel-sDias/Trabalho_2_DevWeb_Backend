import { db } from "../../../database/firebase";
interface GetVideoByIdParams {
  id: string;
}
export class GetVideoById {
  async execute({ id }: GetVideoByIdParams) {
    const dbRepository = await db.collection("videos");
    let list = [];
    const getVideo = await dbRepository
      .where("user.userId", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push({ data: doc.data(), id: doc.id });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    return list;
  }
}
