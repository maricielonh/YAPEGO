// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxFZ-4zM1XQqkBCBGn8QWydVOMSwBcfrU",
  authDomain: "mini-proyecto-d4d04.firebaseapp.com",
  projectId: "mini-proyecto-d4d04",
  storageBucket: "mini-proyecto-d4d04.firebasestorage.app",
  messagingSenderId: "199649537471",
  appId: "1:199649537471:web:a701864fce645c3931c50a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);