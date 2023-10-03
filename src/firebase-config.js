import { initializeApp } from "firebase/app";
import {getFirestore,collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore";
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCHbhlD6ry-aW3l9OHhvKkM-tf-w2ZCei8",
    authDomain: "testcrud-489d0.firebaseapp.com",
    databaseURL: "https://testcrud-489d0-default-rtdb.firebaseio.com",
    projectId: "testcrud-489d0",
    storageBucket: "testcrud-489d0.appspot.com",
    messagingSenderId: "166537135566",
    appId: "1:166537135566:web:152525ba37567bdae6579f",
    measurementId: "G-16GFZJE2JG"
  };

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)
export {db,collection,getDocs,addDoc,updateDoc,doc,signOut,deleteDoc,auth,signInWithPopup}
export const provider = new GoogleAuthProvider();

