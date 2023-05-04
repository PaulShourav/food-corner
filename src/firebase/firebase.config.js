// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByuLZsExVeEEmDPFZP-FUpHSuqcHW-yLw",
  authDomain: "food-corner-auth.firebaseapp.com",
  projectId: "food-corner-auth",
  storageBucket: "food-corner-auth.appspot.com",
  messagingSenderId: "773766608673",
  appId: "1:773766608673:web:b23b103798c2d1cd797060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;