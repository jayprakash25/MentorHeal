import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7NtqlTeD6fMBqJcoGgW7kNQryK5-RijQ",
  authDomain: "mentorheal-29082.firebaseapp.com",
  projectId: "mentorheal-29082",
  storageBucket: "mentorheal-29082.appspot.com",
  messagingSenderId: "647977545216",
  appId: "1:647977545216:web:8ef626e5b6d8cb04dfb2e5",
  measurementId: "G-ZE54GZL7MV",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db  ,storage,auth};
