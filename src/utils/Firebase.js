// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwNztz72_OQWiQN_n4RUwJUgp4wPDWk5o",
  authDomain: "netflixgpt-61331.firebaseapp.com",
  projectId: "netflixgpt-61331",
  storageBucket: "netflixgpt-61331.appspot.com",
  messagingSenderId: "632403783502",
  appId: "1:632403783502:web:0dfce1f59f0b475e41781f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();