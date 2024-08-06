// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcH7yD8_YhbZ3l5JzZX_8VIoybRZRIR0A",
  authDomain: "inventory-management-app-69b15.firebaseapp.com",
  projectId: "inventory-management-app-69b15",
  storageBucket: "inventory-management-app-69b15.appspot.com",
  messagingSenderId: "33678258019",
  appId: "1:33678258019:web:37c251a37477680627ad56",
  measurementId: "G-EKTKZRJB2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}