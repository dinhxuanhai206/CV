import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCG_KQ7ph0NsoKx5KRrJZZfTMkmUbKfgNA",
  authDomain: "movies-8429c.firebaseapp.com",
  projectId: "movies-8429c",
  storageBucket: "movies-8429c.appspot.com",
  messagingSenderId: "631951813869",
  appId: "1:631951813869:web:9205103468854de4fa70e4",
  measurementId: "G-WJM3FQ9D78"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;