import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdiIIGdulwVYRImDL-7Lqo45CysxxeSKE",
  authDomain: "test-aef30.firebaseapp.com",
  projectId: "test-aef30",
  storageBucket: "test-aef30.appspot.com",
  messagingSenderId: "926379734918",
  appId: "1:926379734918:web:ab43849ee53e113235de07",
  measurementId: "G-W2D9MXNGR0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
