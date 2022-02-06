// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxe0AfTZR5vOw3mUv29HfSLhXU8mruH40",
  authDomain: "pisel-d5891.firebaseapp.com",
  projectId: "pisel-d5891",
  storageBucket: "pisel-d5891.appspot.com",
  messagingSenderId: "91723706287",
  appId: "1:91723706287:web:e60c9b9e970de2f06d095a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);