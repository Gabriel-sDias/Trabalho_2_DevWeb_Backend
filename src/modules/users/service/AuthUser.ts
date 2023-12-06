const bcrypt = require("bcryptjs");
import { db } from "../../../database/firebase";
import { firestore } from "firebase-admin";
import { sign } from "jsonwebtoken";
type userRequest = {
  email: string;
  password: string;
};

export class Login {
  async execute({ email, password }: userRequest) {
    const dbRepository = await db.collection("user");
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

    let getUser = user[0];
    console.log(getUser);
    if (!getUser) {
      return new Error("Usuario nao encontrado.");
    }
    const checkPassword = await bcrypt.compare(password, getUser.data.password);
    if (!checkPassword) {
      return new Error("Senha invalida.");
    }

    const SECRET = "amd";
    const EXPIRATION = "1d";
    const token = sign({}, SECRET, {
      subject: getUser.id,
      expiresIn: EXPIRATION,
    });
    const newUser = {
      token,
      getUser,
    };
    return newUser;
  }
}
