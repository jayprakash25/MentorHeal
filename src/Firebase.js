// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ91ZI-OWRFOZOqvVbZPIQ9-XZXkZuZws",
  authDomain: "mentorheal-9c3a7.firebaseapp.com",
  projectId: "mentorheal-9c3a7",
  storageBucket: "mentorheal-9c3a7.appspot.com",
  messagingSenderId: "979733900522",
  appId: "1:979733900522:web:7e4f731e7a457b2670fb93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
