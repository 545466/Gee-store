import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBLBSj8RNkdzi_-jLtTec_WA2FOVcWJxpQ",
  authDomain: "fir-learn-712e0.firebaseapp.com",
  projectId: "fir-learn-712e0",
  storageBucket: "fir-learn-712e0.appspot.com",
  messagingSenderId: "988472511375",
  appId: "1:988472511375:web:9632ef18b06473987f59fa",
  measurementId: "G-K172D6Y49Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)  