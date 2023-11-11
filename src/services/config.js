import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tech-up-fc935.firebaseapp.com",
  projectId: "tech-up-fc935",
  storageBucket: "tech-up-fc935.appspot.com",
  messagingSenderId: "465123987687",
  appId: "1:465123987687:web:d495d4dd95185f16481242",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// "AIzaSyBIB5hjd7D9dhswcJVpVyRocETJnOonL60"
