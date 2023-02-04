// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnBzv8BKUl3oc2Bf9GtR0QEVNQ2XALRkw",
  authDomain: "fir-auth-accb0.firebaseapp.com",
  projectId: "fir-auth-accb0",
  storageBucket: "fir-auth-accb0.appspot.com",
  messagingSenderId: "518628766340",
  appId: "1:518628766340:web:5bd647e4d4ebd1c63b08d1",
  measurementId: "G-B6RC5KNE9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);