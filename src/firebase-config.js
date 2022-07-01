import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAQ6XOrst7I37ZGYpoz5Iw4p0MvXOphQR0",
  authDomain: "draw-app-afc54.firebaseapp.com",
  projectId: "draw-app-afc54",
  storageBucket: "draw-app-afc54.appspot.com",
  messagingSenderId: "430964742383",
  appId: "1:430964742383:web:1356d83aea7e77abcde31a",
  measurementId: "G-M3704MHQH3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);