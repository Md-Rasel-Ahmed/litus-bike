// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD73PEFIqJxMw1oK73B3z-zwL3tdfD7Lao",
  authDomain: "stored-bike-warehous.firebaseapp.com",
  projectId: "stored-bike-warehous",
  storageBucket: "stored-bike-warehous.appspot.com",
  messagingSenderId: "972563380875",
  appId: "1:972563380875:web:b74c2628e44445c97df28e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
