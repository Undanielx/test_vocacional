// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDz2JJuIjIu0pzgt-gU6o3POgZr3wyt4c",
  authDomain: "vocacional-app.firebaseapp.com",
  projectId: "vocacional-app",
  storageBucket: "vocacional-app.appspot.com",
  messagingSenderId: "177035018790",
  appId: "1:177035018790:web:b7d4f51121295061a65ce7"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase