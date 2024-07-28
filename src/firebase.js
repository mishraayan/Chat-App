import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCBTjaF6L2oeMJNV5auuw-ZoeYu0yMbOhE",
  authDomain: "mishra-chat.firebaseapp.com",
  projectId: "mishra-chat",
  storageBucket: "mishra-chat.appspot.com",
  messagingSenderId: "534522828191",
  appId: "1:534522828191:web:ba272b42863efa3f0d59aa",
  measurementId: "G-BXGSR4VYFL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()