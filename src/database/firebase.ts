import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require("../../creds.json");
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592

// Initialize Firebase
initializeApp({
  credential: cert(serviceAccount),
});

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore();
