import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDJV8YovVtISLHqQ_PCTr7qUMIwHUZuckM",
  authDomain: "aaonisaa2-37f6e.firebaseapp.com",
  projectId: "aaonisaa2-37f6e",
  storageBucket: "aaonisaa2-37f6e.appspot.com",
  messagingSenderId: "952829343894",
  appId: "1:952829343894:web:e2c0debc4d7fdaae2e6ab7",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage(app);
  const realtimeDb = getDatabase(app);

  export { db, auth, storage, realtimeDb }

