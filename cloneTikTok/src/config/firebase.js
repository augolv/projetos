import { getFirestore } from 'firebase/firestore/lite'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxLRu_Vm78bZTPEOEfbifVk1Ad4KT25ZM",
  authDomain: "tiktok---jornada-1b273.firebaseapp.com",
  projectId: "tiktok---jornada-1b273",
  storageBucket: "tiktok---jornada-1b273.appspot.com",
  messagingSenderId: "746850591868",
  appId: "1:746850591868:web:effee1b6fda85298a295f9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;