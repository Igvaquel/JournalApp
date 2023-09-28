// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWD3QLZq5yS_T4QPTb1NjaeM_aDeMkS1E",
  authDomain: "react-cursos-8795f.firebaseapp.com",
  projectId: "react-cursos-8795f",
  storageBucket: "react-cursos-8795f.appspot.com",
  messagingSenderId: "348985041250",
  appId: "1:348985041250:web:8a85ed43605bb12d20cc3b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);

