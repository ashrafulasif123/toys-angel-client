// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
  // apiKey: "AIzaSyC34pjhntN9mpjx8evyq8wHxuo5LuBpvAA",
  // authDomain: "toy-angel-client.firebaseapp.com",
  // projectId: "toy-angel-client",
  // storageBucket: "toy-angel-client.appspot.com",
  // messagingSenderId: "516075330038",
  // appId: "1:516075330038:web:d05042c69fb066839f0fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;