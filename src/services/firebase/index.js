// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtbhQD4wmJj9vBhk--ArQZLfxY0w0TQk",
  authDomain: "compumundo-hmr.firebaseapp.com",
  projectId: "compumundo-hmr",
  storageBucket: "compumundo-hmr.appspot.com",
  messagingSenderId: "555680936321",
  appId: "1:555680936321:web:7f35e2b6b473ee94bdb880"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)