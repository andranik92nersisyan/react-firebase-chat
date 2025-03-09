import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-eab10.firebaseapp.com",
  projectId: "reactchat-eab10",
  storageBucket: "reactchat-eab10.firebasestorage.app",
  messagingSenderId: "1093150172983",
  appId: "1:1093150172983:web:9b99647106a44aa7159cb2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();