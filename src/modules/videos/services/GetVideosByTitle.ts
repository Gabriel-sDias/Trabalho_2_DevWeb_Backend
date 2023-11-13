import { db } from "../../../database/firebase";
interface GetVideoByTitleParams {
  title: string;
}
export class GetVideoByTitle {
  async execute({ title }: GetVideoByTitleParams) {
    const dbRepository = await db.collection("videos");
    let list = [];
    let filter = [];
    const getVideo = await dbRepository
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          list.push({ data: doc.data(), id: doc.id });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    console.log(list.length);
    list.forEach((video) => {
      let videoTitle: string = video.data.title;
      if (videoTitle.toLowerCase().includes(title)) {
        filter.push(video);
      }
    });

    return filter;
  }
}
