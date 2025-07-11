// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5raGurzTHcG9A9Shq5ZTISRz89OfP5Gw",
  authDomain: "trailbrothers240.firebaseapp.com",
  projectId: "trailbrothers240",
  storageBucket: "trailbrothers240.firebasestorage.app",
  messagingSenderId: "437473232549",
  appId: "1:437473232549:web:3276bacf79a462184eef4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

export default app;