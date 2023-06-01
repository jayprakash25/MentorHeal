// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCSCUogXzborr8v_tLBvheWi6gXTkIYDA",
  authDomain: "mentorthrive-f269a.firebaseapp.com",
  projectId: "mentorthrive-f269a",
  storageBucket: "mentorthrive-f269a.appspot.com",
  messagingSenderId: "374875495462",
  appId: "1:374875495462:web:60babe5dd5bf18b2511ae7",
  measurementId: "G-MVJEF9J4KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
