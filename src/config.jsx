import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDe1zsRRP5nh6p5Wi5V_3urPkt7YLihtdQ",
  authDomain: "aaonisaa3-94ca9.firebaseapp.com",
  projectId: "aaonisaa3-94ca9",
  storageBucket: "aaonisaa3-94ca9.appspot.com",
  messagingSenderId: "838209785219",
  appId: "1:838209785219:web:81b6bfd96c4a988a95fab6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const realtimeDb = getDatabase(app);

  export { db, auth, storage, realtimeDb }

