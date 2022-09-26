import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAPEQhsAJiOBVn3vTC_I-yiSffGVKRKeH4",
  authDomain: "tiendavinos-coderhouse.firebaseapp.com",
  projectId: "tiendavinos-coderhouse",
  storageBucket: "tiendavinos-coderhouse.appspot.com",
  messagingSenderId: "853532162587",
  appId: "1:853532162587:web:ab2410c4222b0f7e3e16be"
};

const app = initializeApp(firebaseConfig);  

export const db = getFirestore(app)