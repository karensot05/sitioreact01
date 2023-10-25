// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO1GsHzFJBX_DJNpvV1uN-Lf7Nweq_zzs",
  authDomain: "pro-react-app03.firebaseapp.com",
  projectId: "pro-react-app03",
  storageBucket: "pro-react-app03.appspot.com",
  messagingSenderId: "1064903205045",
  appId: "1:1064903205045:web:e6ca115a8717122b8e9efc",
  measurementId: "G-NW3QP6VW08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);