// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsVfAzCzI7InTevrCS9yBsbAv0f5BiMJ0",
  authDomain: "testproj-5919d.firebaseapp.com",
  projectId: "testproj-5919d",
  storageBucket: "testproj-5919d.appspot.com",
  messagingSenderId: "632365394074",
  appId: "1:632365394074:web:92b1d5cc01cb3995aa1723",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
