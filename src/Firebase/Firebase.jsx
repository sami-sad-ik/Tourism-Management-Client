// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4OGZBZcYA5otIo4HPFxQ0hc64SpKW5g0",
  authDomain: "tourism-management-83241.firebaseapp.com",
  projectId: "tourism-management-83241",
  storageBucket: "tourism-management-83241.firebasestorage.app",
  messagingSenderId: "963305922430",
  appId: "1:963305922430:web:a43268377db2ba20e91d2f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
