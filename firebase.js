// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdCsA6cOCM4OcYhqHKZoF6HvV7TpkXVM8",
  authDomain: "inventory-management-bfa0b.firebaseapp.com",
  projectId: "inventory-management-bfa0b",
  storageBucket: "inventory-management-bfa0b.appspot.com",
  messagingSenderId: "202232677337",
  appId: "1:202232677337:web:306d1a0d49e6445b918fc8",
  measurementId: "G-FBDVNJHXFG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firestore, auth };
