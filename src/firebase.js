import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCt4AOXuZUEYJtn3UYGSPjgyK-vc-oRaos",
  authDomain: "onyxfitness-bfe80.firebaseapp.com",
  projectId: "onyxfitness-bfe80",
  storageBucket: "onyxfitness-bfe80.appspot.com",
  messagingSenderId: "596518814098",
  appId: "1:596518814098:web:54cdb0b850524f1944014b",
  measurementId: "G-VCKXZXY7D6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;