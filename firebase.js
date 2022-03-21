// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIg30tKwvHCryCfJihbNiB-cuPLVkQf7A",
  authDomain: "instagram-clone-36b2e.firebaseapp.com",
  projectId: "instagram-clone-36b2e",
  storageBucket: "instagram-clone-36b2e.appspot.com",
  messagingSenderId: "311236678831",
  appId: "1:311236678831:web:2205f22f5f8a3c325df05a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export {app, db, storage};