import { hash } from "bcryptjs";
import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
interface CreateUserParams {
  name: string;
  profilePicture: string;
  email: string;
  password: string;
}
export class CreateUser {
  async execute({ email, name, password, profilePicture }: CreateUserParams) {
    const dbRepository = db.collection("user");
    let user = [];
    const getVideo = await dbRepository
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          user.push({ data: doc.data(), id: doc.id });
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    console.log(user.length);
    if (user.length > 0) {
      return new Error("Email ja cadastrado!");
    }
    let getUser = user[0];

    const encryptedPassword = await hash(password, 8);
    const newUser = await dbRepository.add({
      name: name,
      profilePicture: profilePicture,
      email: email,
      password: encryptedPassword,
      followers: 0,
    });
    return newUser;
  }
}
