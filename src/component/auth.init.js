// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN_PKhl8V5FMDzN3ElAfK_Xe4jwg9MEhY",
  authDomain: "dragon-news-auth-35fc6.firebaseapp.com",
  projectId: "dragon-news-auth-35fc6",
  storageBucket: "dragon-news-auth-35fc6.firebasestorage.app",
  messagingSenderId: "45847837743",
  appId: "1:45847837743:web:19d1de3db9891c47211ada"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);